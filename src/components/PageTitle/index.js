import React from 'react';

import './style.css';

function PageTitle({description, title}) {
  return (
    <div className="center container PageTitle">
        <div className="center">
            <h1 className="center">{title}</h1>
            <p className="center">{description}</p>
        </div>
    </div>
  );
}

export default PageTitle;