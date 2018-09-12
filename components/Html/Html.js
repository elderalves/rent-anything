import React from 'react';
import PropTypes from 'prop-types';

const Html = ({
  title, description, body, state
}) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title || ''}</title>
      <meta name="description" content={description || ''} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script async src="client.js" />
    </head>
    <body>
      <div
        id="app"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <script dangerouslySetInnerHTML={{ __html: `window.AppState=${JSON.stringify(state)}` }} />
    </body>
  </html>
);

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired
};

export default Html;
