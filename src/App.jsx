import React from "react";
// import Login from "./client/components/Login";
import Sign from "./client/components/Sign";
// import Delete from "./client/components/Delete";

const App = () => {
  return (
    <>
      <div>
        {/* <h1 className="text-center text-2xl">Login</h1>
        <Login />*/}
        <h1 className="text-center text-2xl">Add details</h1>
        <Sign />
        {/* <h1 className="text-center text-2xl">delete</h1>
        <Delete/> */}
      </div>
    </>
  );
};

export default App;
