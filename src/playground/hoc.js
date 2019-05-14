import React from  'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
   return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} /> 
    </div>
   )
};

const AdminInfo = withAdminWarning(Info);

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ?(
             <WrappedComponent {...props} />
              ):(
             <p> Please login to view the info</p>
              )}
        </div>
    )
}; 

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info= "there are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info= "please don't share the info" />, document.getElementById('app'))