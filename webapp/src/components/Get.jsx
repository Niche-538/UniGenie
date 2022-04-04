import { useState,useEffect } from "react";

const Get = (props) => {

  const [data, setData] = useState(null);
  
  const getData = () => {

    fetch("http://localhost:8080/getUsers").then(function (response) {
      //response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      
      console.log(response);
      return response.json();
    }).then(function(myJSON){
      console.log(myJSON);
      setData(JSON.stringify(myJSON));
    })
  }
  useEffect(() => {
    getData()
  },[])

  return (
    <div>
     <h1> trying get request</h1>
     {/* <p>{data}</p> */}
    {/* <p>{JSON.parse(data)[1]["first_name"]}</p> */}
    {/* <p>{data[1].first_name}</p> */}
    <p>{data}</p>
    </div>
   );
};

export default Get;