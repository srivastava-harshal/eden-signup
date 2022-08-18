import React from "react";

const Name = ({ formData, handleChange }) => {
  // console.log(props);

  return (
    <>
      <p className="signup-heading">Welcome! First things first...</p>
      <p className="signup-subtitle">You can always change them later.</p>
      <div className="step-wrapper">
        <div className="form-item">
          <label>Full Name</label>
          <input
            value={formData.userName}
            onChange={(e) => handleChange("userName", e.target.value)}
            placeholder="Steve Jobs"
            type="text"
          />
        </div>
        <div className="form-item">
          <label>Display Name</label>
          <input
            value={formData.userDisplayName}
            onChange={(e) => handleChange("userDisplayName", e.target.value)}
            placeholder="Steve"
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default Name;
