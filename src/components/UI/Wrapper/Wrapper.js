import React from 'react';

const wrapper = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h2 className="form-group">{props.title}</h2>
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default wrapper;
