import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.jobTitle} - <span className="text-muted font-weight-light">{job.employerName}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.date).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary">{job.locationName}</Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <a href={job.jobUrl} target="_blank" rel="noopener noreferrer">Apply Here</a>
            </div>
          </div>
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary">
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown>{job.jobDescription}</ReactMarkdown>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
