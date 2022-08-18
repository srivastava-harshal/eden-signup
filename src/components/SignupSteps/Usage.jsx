import React from "react";
// import {user as React.Component} '../../icons/user.png'

const plans = [
  {
    key: "myself",
    img: "https://res.cloudinary.com/df8r2vbcg/image/upload/v1660843490/eden/Screenshot_2022-08-18_at_8.06.29_PM_mg1nqm.png",
    title: "For myself",
    description: "Write better. Think more clearly. Stay organized.",
  },
  {
    key: "team",
    img: "https://res.cloudinary.com/df8r2vbcg/image/upload/v1660843490/eden/Screenshot_2022-08-18_at_8.06.51_PM_kinbpi.png",
    title: "With my team",
    description: "Wikis, docs, tasks & projects, all in one place.",
  },
];

const Usage = ({ formData, handleChange }) => {
  return (
    <>
      <p className="signup-heading">How are you planning to use Eden?</p>
      <p className="signup-subtitle">
        We'll streamline your setup experience accordingly
      </p>
      <div className="step-wrapper">
        <div className="plan-wrapper">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`plan ${
                plan.key === formData.plan ? "selected-plan" : ""
              }`}
              onClick={() => handleChange("plan", plan.key)}
            >
              <img className="plan-image" src={plan.img} />
              <p className="plan-title">{plan.title}</p>
              <p className="plan-subtitle">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Usage;
