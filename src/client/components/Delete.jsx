import React,{userState} from 'react'
import Axios from 'axios';

const Delete = () => {
  const [clearw,setClear] = userState('')
  const clear = () => {
     Axios.delete(`http://localhost:3000/user/${clearw}`);
 }
  return (
    <>
      <div className="p-10 ">
        <div className=" container m-auto p-10 text-center border border-black w-10xl  ">
          <div className="m-20">
            <label htmlFor="id1" className="uppercase mr-20">
              delete :
            </label>
            <input
              type="number"
              id="id1"
              value={clearw}
              onChange={(e) => setClear(e.target.value)}
              placeholder="Enter your id"
              className="ooutline-none px-5 py-1 bg-black text-white"
            />
          </div>
          <div>
            <button
              onClick={() => clear()}
              className="uppcase outline-none border border-black px-4 py-2 bg-black text-white rounded my-10 mr-30"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete