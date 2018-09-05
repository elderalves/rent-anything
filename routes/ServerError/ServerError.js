import React from 'react';

const path = '/500';
const action = () => <ServerError/>

const ServerError = () => {
  return (
    <div>
      <h1>Server Error</h1>
      <p>Sorry, but something went wrong.</p>
    </div>
  );
}

export default { path, action };