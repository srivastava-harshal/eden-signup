import React, { useEffect, useState } from "react";
import { Stepper } from "react-form-stepper";

import Name from "./Name";
import Usage from "./Usage";
import Workspace from "./Workspace";
import Final from "./Final";

const steps = [
  {
    key: "name",
    component: Name,
    buttonText: "Create Workspace",
  },
  {
    key: "workspace",
    component: Workspace,
    buttonText: "Create Workspace",
  },
  {
    key: "usage",
    component: Usage,
    buttonText: "Create Workspace",
  },
  {
    key: "final",
    component: Final,
    buttonText: "Launch Eden",
  },
];

const initialFormData = {
  userName: "",
  userDisplayName: "",
  workspaceName: "",
  workspaceURL: "",
  plan: "",
};

const SignupSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState(initialFormData);

  const Component = steps[activeStep].component;

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const checkDisabled = () => {
    const { userName, userDisplayName, workspaceName, workspaceURL, plan } =
      formData;
    switch (activeStep) {
      case 1:
        return !workspaceName && !workspaceURL;
      case 2:
        return !plan;
      default:
        return !userName && !userDisplayName;
    }
  };

  return (
    <div className="wrapper">
      <div className="company-logo">
        <img src="https://res.cloudinary.com/df8r2vbcg/image/upload/v1660843490/eden/Screenshot_2022-08-18_at_7.11.40_PM_upx9dd.png" />
      </div>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        className="stepper"
        styleConfig={{
          activeBgColor: "#6657eb",
          completedBgColor: "#6657eb",
          inactiveBgColor: "#fff",
          inactiveTextColor: "#000",
          circleFontSize: "0.8rem",
        }}
      />
      <div className="steps-container">
        <Component formData={formData} handleChange={handleChange} />
        <button
          className="signup-button"
          disabled={checkDisabled()}
          style={{
            cursor: checkDisabled() ? "not-allowed" : "pointer",
          }}
          onClick={() => setActiveStep((activeStep + 1) % steps.length)}
        >
          {steps[activeStep].buttonText}
        </button>
      </div>
    </div>
  );
};

export default SignupSteps;
