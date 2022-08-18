import React from "react";

const Workspace = ({ formData, handleChange }) => {
  return (
    <>
      <p className="signup-heading">Let's set up a home for your work</p>
      <p className="signup-subtitle">
        You can always create another workspace later.
      </p>
      <div className="step-wrapper">
        <div className="form-item">
          <label>Workspace Name</label>
          <input
            placeholder="Eden"
            value={formData.workspaceName}
            onChange={(e) => handleChange("workspaceName", e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Workspace URL</label>
          <input
            placeholder="www.eden.com"
            value={formData.workspaceURL}
            onChange={(e) => handleChange("workspaceURL", e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Workspace;
