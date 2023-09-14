import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Sign.css";

const Sign = () => {
  // All detail store useState
  const [sig, setsig] = useState([]);
  // store useState
  const [id, setId] = useState();
  const [userName, setname] = useState();
  const [password, setpassword] = useState();
  const [age, setage] = useState();
  const [email, setemail] = useState();
  const [mobile, setmobile] = useState();
  // update detail stroe useState
  const [update, setUpdate] = useState({id:"",userName: "", email: "", mobile: "" });
  //   Get data from server
  const dataLoad = async () => {
    const response = await Axios.get("http://localhost:3000/user");
    setsig(response.data);
  };

  // Post data from server
  const addList = () => {
    Axios.post("http://localhost:3000/user", {
      userName,
      password,
      age,
      email,
      mobile,
    })
      .then(() => {
        userName("");
        setpassword("");
        setage("");
        setemail("");
        setmobile("");
      })
      .catch((error) => console.log(error));
  };
  // Delete from server
  const clear = (id) => {
    Axios.delete(`http://localhost:3000/user/${id}`);
    console.log(id);
    setTimeout(() => {
      dataLoad();
    }, 500);
  };
  // update or put data from server
  const puts = () => {
    Axios.put(`http://localhost:3000/user/${update.id}`, {
      id:update.id,
      userName: update.userName,
      email: update.email,
      mobile: update.mobile,
    }).then((res) => {
      console.log(res);
    })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => {
      dataLoad();
    }, 500);
  };
  // useEffect finally rendered
  useEffect(() => {
    dataLoad();
  }, []);

  setTimeout(() => {
    dataLoad();
  }, 500);

  return (
    <>
      <div className="">
        <div className=" container m-auto p-5 text-center border border-black w-10xl  ">
          {/* id */}
          <div className="ml-20">
            <label htmlFor="id" className="uppercase mr-20">
              id :
            </label>
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              id="id"
              placeholder="Enter your id"
              className="rounded outline-none px-5 py-1 bg-black text-white"
            />
          </div>
          {/* usename */}
          <div className="m-5 ml-8">
            <label htmlFor="userName" className="uppercase mr-20">
              username :
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setname(e.target.value)}
              id="userName"
              placeholder="Enter your name"
              className="outline-none px-5 py-1 bg-black text-white"
            />
          </div>
          {/* password */}
          <div className="m-5 ml-8">
            <label htmlFor="password" className="uppercase mr-20">
              password :
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              id="password"
              placeholder="Enter your password"
              className="rounded outline-none px-5 py-1 bg-black  text-white"
            />
          </div>
          {/* email */}
          <div className="m-5 ml-16">
            <label htmlFor="email" className="uppercase mr-20">
              Email :
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              id="email"
              placeholder="Enter your email"
              className="rounded outline-none px-5 py-1 bg-black text-white"
            />
          </div>
          {/* age */}
          <div className="m-5 ml-20">
            <label htmlFor="age" className="uppercase mr-20">
              age :
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setage(e.target.value)}
              id="age"
              placeholder="Enter your age"
              className="rounded outline-none px-5 py-1 bg-black text-white"
            />
          </div>
          {/* mobile */}
          <div className="m-5 ml-10 ">
            <label htmlFor="mobile" className="uppercase mr-20">
              mobile :
            </label>
            <input
              type="number"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
              id="moblie"
              placeholder="Enter your Mobile"
              className="outline-none px-5 py-1 bg-black text-white rounded"
            />
          </div>
          <div className="ml-20">
            <span className="ml-10">
              <button
                onClick={() => addList()}
                className="uppcase outline-none border border-black px-4 py-2 bg-black text-white rounded"
              >
                Add
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="drop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        {sig.map((e) => (
          <div className="drop_me">
            {e.id + `:`}
            <button
              onClick={() => {
                clear(e.id);
              }}
              className="border border-black rounded px-2 py-1"
            >
              delete
            </button>
            <div className="ml-10" key={e.id}>
              {`id :` + e.id} <br />
              {`username : ` + e.userName}
              <br />
              {`age : ` + e.age}
              <br />
              {`email:` + e.email}
              <br />
              {`mobile : ` + e.mobile}
              <br />
            </div>
            <br />
            <div className="flex border border-black p-2">
              <input
                type="text"
                placeholder="update name"
                onChange={(e) =>
                  setUpdate({ ...update, userName: e.target.value })
                }
                className="border border-black outline-none bg-transparent text-black px-2 py-1 ml-2  "
              />
              <input
                type="text"
                placeholder="update mail"
                onChange={(e) =>
                  setUpdate({ ...update, email: e.target.value })
                }
                className="border border-black outline-none bg-transparent text-black px-2 py-1 ml-2 "
              />
              <input
                type="text"
                placeholder="update mobile"
                onChange={(e) =>
                  setUpdate({ ...update, mobile: e.target.value })
                }
                className="border border-black outline-none bg-transparent text-black px-2 py-1 ml-2 "
              />
              <input
                type="text"
                placeholder="update id"
                onChange={(e) =>
                  setUpdate({ ...update, mobile: e.target.value })
                }
                className="border border-black outline-none bg-transparent text-black px-2 py-1 ml-2 "
              />
              <button
                className="border border-black bg-transparent px-2 py-1 mx-2"
                onClick={() => puts()}
              >
                update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sign;
