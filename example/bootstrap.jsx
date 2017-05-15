import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../src/react-md-component.jsx';

(function() {
  ReactDOM.render(
    <div>
      <Component fileName="README.md" nested={false} />
      <Component fileName="README.md" nested={true} />
    </div>,
    document.getElementById('app')
  );
})();
