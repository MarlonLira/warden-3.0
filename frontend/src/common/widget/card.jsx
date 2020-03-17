import React from 'react';

export default props => (
  <div className="card card-outline card-primary collapsed-card">
    <div className="card-header">
      <h3 className="card-title">{props.label}</h3>
      <div className="card-tools">
        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <div className="card-body">
      {props.children}
    </div>
  </div>
);