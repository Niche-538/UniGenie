import { useState, useEffect } from "react";

const Get = (props) => {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch("http://localhost:8080/getUniversities")
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJSON) {
                console.log(typeof myJSON); // returns object
                // setData(JSON.parse(myJSON));
                setData(myJSON);
                // setData(JSON.stringify(myJSON));
            });
    };

    useEffect(() => {
        getData();
        // console.log(data);
    }, []);

    return (
        <div>
            {/* <h1> trying get request</h1> */}
            {/* <p>{data}</p> */}
            {/* <p>{JSON.parse(data)[1]["first_name"]}</p> */}
            {/* <p>{data[1].first_name}</p> */}
            {/* <p>{data}</p> */}
            {/* {data.map((user) => (<p>[{user.ID}]{user.email}</p>))} */}
            {data.map((user) => (
                <p>{user.ID}</p>
            ))}
        </div>
    );
};

export default Get;
