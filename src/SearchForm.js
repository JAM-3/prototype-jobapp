import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        {/* Keywords */}
        <Form.Group as={Col}>
        <Form.Label>Keywords</Form.Label>
        <Form.Control
          type="text"
          name="keywords"
          value={params.keywords || ''}
          onChange={onParamChange} // Using onParamChange prop directly
        />
      </Form.Group>

        {/* Location Name */}
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control 
            onChange={(e) => onParamChange(e.target.name, e.target.value)} 
            value={params.locationName || ''} 
            name="locationName" 
            type="text" 
          />
        </Form.Group>

        {/* Distance From Location */}
        <Form.Group as={Col}>
          <Form.Label>Distance (miles)</Form.Label>
          <Form.Control 
            onChange={(e) => onParamChange(e.target.name, e.target.value)} 
            value={params.distanceFromLocation || ''} 
            name="distanceFromLocation" 
            type="number" 
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        {/* Job Types */}
        <Form.Group as={Col} xs="auto">
          <Form.Check 
            onChange={(e) => onParamChange(e.target.name, e.target.checked ? 'true' : 'false')} 
            checked={params.permanent === 'true'} 
            name="permanent" 
            label="Permanent" 
            type="checkbox" 
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto">
          <Form.Check 
            onChange={(e) => onParamChange(e.target.name, e.target.checked ? 'true' : 'false')} 
            checked={params.contract === 'true'} 
            name="contract" 
            label="Contract" 
            type="checkbox" 
          />
        </Form.Group>

        {/* Salary Range */}
        <Form.Group as={Col}>
          <Form.Label>Min Salary</Form.Label>
          <Form.Control 
            onChange={(e) => onParamChange(e.target.name, e.target.value)} 
            value={params.minimumSalary || ''} 
            name="minimumSalary" 
            type="number" 
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Max Salary</Form.Label>
          <Form.Control 
            onChange={(e) => onParamChange(e.target.name, e.target.value)} 
            value={params.maximumSalary || ''} 
            name="maximumSalary" 
            type="number" 
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
