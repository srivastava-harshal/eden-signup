import React from "react";

const Usage = () => {
  return (
    <form>
      <div>
        <h1>Let's set up a home for your work</h1>
        <p>You can always create another workspace later.</p>
      </div>
      <div>
        <label>Workspace Name</label>
        <br />
        <input placeholder="Eden" />
      </div>
      <div>
        <label>Workspace URL</label>
        <br />
        <input placeholder="www.eden.com" />
      </div>
      <div>
        <button>Create Workspace</button>
      </div>
    </form>
  );
};

export default Usage;
