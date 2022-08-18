import React from "react";
import Name from "./Name";
import Usage from "./Usage";
import Workspace from "./Workspace";
import Final from "./Final";

const steps = [
  {
    label: "name",
    component: <Name />,
  },
  {
    label: "workspace",
    component: <Usage />,
  },
  {
    label: "usage",
    component: <Workspace />,
  },
  {
    label: "final",
    component: <Final />,
  },
];

const SignupSteps = () => {
  return (
    <div>
      <Name />
    </div>
  );
};

export default SignupSteps;
