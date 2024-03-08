import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
};

// Update BASE_URL to match Reed API endpoint for job search
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/search?keywords=software';

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, jobs: [] };
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };
    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
      params: { ...params, resultsToTake: 50, resultsToSkip: page * 50 },
      headers: {
        'Authorization': `Basic ${btoa('14ced952-950e-403c-b5d4-c69fa6fe3511:')}` // Note the colon at the end of the API key
      }
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data.results } });
    }).catch(e => {
      if (axios.isCancel(e)) return;
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
    });

    // Checking for the next page might need a different approach depending on the Reed API's response structure
    const hasNextPageCheck = (data) => {
      // This logic may need adjustment based on the Reed API's way of indicating the last page of results
      return data.totalResults > (page + 1) * 50;
    };

    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
      params: { ...params, resultsToTake: 50, resultsToSkip: (page + 1) * 50 },
      headers: { 'Authorization': `Bearer your_api_key` }
    }).then(res => {
      dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: hasNextPageCheck(res.data) } });
    }).catch(e => {
      if (axios.isCancel(e)) return;
      // You might want to handle this error differently or ignore if pagination check fails
    });

    return () => {
      cancelToken1.cancel();
    };
  }, [params, page]);

  return state;
}
