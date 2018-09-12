import React from 'react';
import PropTypes from 'prop-types';

const PrivacyPage = (props, { page }) => {
  page.title = 'Privacy Policy';

  return (
    <div>
      <h1>{page.title}</h1>
      <p>Coming Soon</p>
    </div>
  );
};

PrivacyPage.contextTypes = {
  page: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default PrivacyPage;
