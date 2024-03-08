import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'; // Ensure this is adapted for Reed API
import { Container } from 'react-bootstrap';
import Job from './Job'; // Ensure this displays job details correctly for Reed API
import JobsPagination from './JobsPagination'; // Adjust if necessary for API pagination
import SearchForm from './SearchForm'; // Already adjusted for Reed API

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Reed Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        // Ensure the key and job prop passed to Job component are correct
        return <Job key={job.jobId} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
