import React from "react";

const FoundResults = ({movies}) => {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
};

export default FoundResults;
