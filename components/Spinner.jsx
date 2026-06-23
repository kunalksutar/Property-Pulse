'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
  const cssOverride = {
    display: 'block',
    margin: '100px auto',
  };

  return (
    <ClipLoader
      color="#3b82f6"
      loading={true}
      cssOverride={cssOverride}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;