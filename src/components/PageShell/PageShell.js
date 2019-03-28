import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const PageShell = Page => { 
  return props => 
    <div className="page">
        <Page {...props} /> 
    </div>
};

// transitionName={props.match.path === '/thanks' ? 'SlideIn' : 'SlideOut'}


export default PageShell;