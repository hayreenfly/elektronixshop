import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Electronix Shop',
  description: 'We sell the best electronic products for a cheap price.',
  keyword: 'electronics, buy electronics, cheap electronics.',
};

export default Meta;
