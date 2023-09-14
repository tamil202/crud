import React,{useRef,useState,useEffect} from "react";
import "./Login.css";
import Axios from "axios";
import DataGet from "./DataGet";

 
const Login = () => {
  const [data, setdata] = useState([]);
  //   Get data from server
  const dataLoad = async () => {
    const response = await Axios.get("http://localhost:3000/user");
    setdata(response.data);
  };
  useEffect(() => {
    dataLoad()
  })

  const [Username, setuserName] = useState(null);
  const [Password, setuserPassword] = useState(null);
  const username = useRef();
  const password = useRef();
  const click = () => {
    if (data.userName === username) {
      return <DataGet />;
    }
  };
  return (
    <>
      <div className="p-10 ">
        <div className=" container m-auto p-10 text-center border border-black w-10xl  ">
          <div className="m-20">
            <label htmlFor="userName" className="uppercase mr-20">
              username :
            </label>
            <input
              type="text"
              id="userName"
              value={Username}
              ref={username}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Enter your name"
              className="ooutline-none px-5 py-1 bg-black text-white"
            />
          </div>
          <div className="">
            <label htmlFor="password" className="uppercase mr-20">
              password :
            </label>
            <input
              type="password"
              ref={password}
              onChange={(e) => setuserPassword(e.target.value)}
              id="password"
              value={Password}
              placeholder="Enter your password"
              className="outline-none px-5 py-1 bg-black  text-white"
            />
          </div>
          <div>
            <button
              onClick={() => click()}
              className="uppcase outline-none border border-black px-4 py-2 bg-black text-white rounded my-10 mr-30"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
