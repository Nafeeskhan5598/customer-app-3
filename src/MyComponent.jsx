import React from 'react';
import { Helmet } from 'react-helmet';

const MyComponent = () => {
  return (
    <div>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="Description of my page" />
        <title>My Page Title</title>
        <link rel="canonical" href="https://www.example.com/my-page" />
        {/* Add other head elements as needed */}
      </Helmet>

      {/* Your component content goes here */}
    </div>
  );
};

export default MyComponent;