import React from 'react';
import Spinner from 'react-loader-spinner';

export function Loader() {
  return (
    <div className="blur">
      <div className="loader">
        <Spinner
          visible={true}
          type="ThreeDots"
          color="#000000"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
}
