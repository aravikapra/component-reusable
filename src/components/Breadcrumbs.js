import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Breadcrumbs({ paths }) {
  return (
    <Breadcrumb>
      {paths.map((path, index) => (
        <Breadcrumb.Item key={index} linkAs={Link} linkProps={{ to: path.link }}>
          {path.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
