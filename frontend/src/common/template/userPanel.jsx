import React from 'react';
import DefaultLogo from '../images/default-150x150.png';

export default props => (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
            {/* <i className='fa fa-user img-circle elevation-4' ></i> */}
            <img src={DefaultLogo} className="img-circle elevation-2"></img>
        </div>
        <div className="info">
            <a href="#" className="d-block">{props.name}</a>
        </div>
    </div>
);