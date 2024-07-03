import React from 'react';
import useFetch from '../customHooks/useFetch';

const FetchComponent = () => {
  const { data, loading } = useFetch('https://api.example.com/data');

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchComponent;
