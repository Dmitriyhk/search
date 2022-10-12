import React, { useState } from "react";

const Hint = ({ el }) => {
  const [test, setTest] = useState(false);
  return (
    <div className="hints_company" key={`${el.name}${el.domain}`}>
      {test ? (
        <div className="hints_company__noLogo" />
      ) : (
        <img
          onError={() => setTest(true)}
          className="hints_company__logo"
          src={el.logo}
          alt={el.name}
        />
      )}
      <div className="hints_company__text">
        <p>{el.name}</p>
        <p>{el.domain}</p>
      </div>
    </div>
  );
};

export default Hint;
