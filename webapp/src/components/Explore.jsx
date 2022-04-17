import React, { useState, useEffect } from "react";
import { Form, Button, FormCheck, FormControl, Tab } from "react-bootstrap";
import { Table } from "react-bootstrap";
const Explore = () => {
  const [Country, setCountry] = useState("");
  const [Course, setCourse] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    if (Course == "CS") {
      fetch("http://localhost:8080/getCsUniversityByCountry/" + Country + "")
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJSON) {
          //console.log(typeof myJSON); // returns object
          // setData(JSON.parse(myJSON));
          setData(myJSON);

          // setData(JSON.stringify(myJSON));
        });
    }
    if (Course == "Mech") {
      fetch("http://localhost:8080/getMechUniversityByCountry/" + Country + "")
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJSON) {
          //console.log(typeof myJSON); // returns object
          // setData(JSON.parse(myJSON));
          setData(myJSON);

          // setData(JSON.stringify(myJSON));
        });
    }

    if (Course == "MBA") {
      fetch("http://localhost:8080/getMbaUniversityByCountry/" + Country + "")
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJSON) {
          //console.log(typeof myJSON); // returns object
          // setData(JSON.parse(myJSON));
          setData(myJSON);
          // setData(JSON.stringify(myJSON));
        });
    }
  };

  const caller = (e) => {
    e.preventDefault();
    getData();
    console.log(typeof data);
  };

  return (
    <div>
      <div
        className="row mx-5 my-4 py-2 px-2 align-items-top text-start justify-content-center rounded border"
        style={{ backgroundColor: "white" }}
      >
        <p>
          <h2>
            <strong>Explore: Top Universities & Colleges</strong>
          </h2>
          All you need to know about university fees, courses, deadlines,
          scholarships and more.
          <div className="my-4 border-top border-3  align-items-top"></div>
          <Form onSubmit={caller}>
            <div className="row">
              {/* <div className="col">   */}
              <Form.Group
                className="col-2 text-center align-items-center justify-content-center"
                controlId="formChooseCountry"
              >
                <Form.Label>Choose Country</Form.Label>
              </Form.Group>
              <Form.Group className="col-3">
                {/* <FormControl> */}
                <Form.Select
                  //as="select"
                  //name="Country"
                  value={Country}
                  //type="text"
                  //id="Country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Can">Canada</option>
                </Form.Select>
                {/* </FormControl> */}
              </Form.Group>
              {/* </div>
              <div className="col"> */}
              <Form.Group
                className="col-2 text-center align-items-center justify-content-center"
                controlId="formChooseCourse"
              >
                <Form.Label>Course</Form.Label>
              </Form.Group>
              <Form.Group className="col-3">
                <Form.Select
                  //as="select"
                  //name="Course"
                  value={Course}
                  //type="text"
                  //id="Course"
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                >
                  <option selected>Choose...</option>
                  <option value="CS">Computer Science</option>
                  <option value="MBA">MBA</option>
                  <option value="Mech">Mechanical Engineering</option>
                </Form.Select>
              </Form.Group>
              <Button
                className="col-1 mx-5 search-bg text-center align-items-center justify-content-center"
                type="submit"
                onClick={caller}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
              {/* </div> */}
            </div>
          </Form>
        </p>
      </div>

      <div
        className="row my-5 px-2 align-items-center text-center justify-content-center rounded border"
        style={{}}
      >
        <Table striped bordered hover style={{ width: "800px" }}>
          <thead
            style={{
              backgroundColor: "#6C63FF",
              color: "white",
            }}
          >
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>State</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.type}</td>
              <td>{user.state}</td>
              <td>
                <a href="{user.website}">{user.website}</a>
              </td>
            </tr>
            //   <p>{user.state}</p>
          ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Explore;
