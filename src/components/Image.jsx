import React from "react";

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className="rounded-md mb-4" />;
};

export default Image;