import React, { useEffect, useState } from "react";
import Axios from "axios";

const DataGet = () => {
  // Data stroe in useState
  const [userData, setuserData] = useState([]);

  //   Get data from server
  const dataLoad = async () => {
    const response = await Axios.get('http://localhost:3000/user');
    setuserData(response.data);
  };

  // useEffect finally rendered
  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <>
      <div>
        {userData === 0 && <p>loading...</p>}
        {userData.map((e) => (
          <div key={e.id}>
            <div>{e.id +` : `}</div>
            <div className="ml-10">
              {`username : ` + e.userName}
              <br />
              {`age : ` + e.age}
              <br />
              {`gender : ` + e.gender}
              <br />
              {`email : ` + e.email}
              <br />
              {`mobile : ` + e.mobile}
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataGet;
