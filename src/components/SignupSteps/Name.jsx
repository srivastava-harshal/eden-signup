import React from "react";

const Name = () => {
  return (
    <div className="name">
      <h1>Welcome! First things first...</h1>
      <p>You can always change them later.</p>
      <form className="name-form">
        <label>Full Name</label>
        <br />
        <input type="text" />
      </form>
      <form>
        <label>Display Name</label>
        <br />
        <input type="text" />
      </form>
    </div>
  );
};

export default Name;
