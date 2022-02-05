import React, { Component } from "react";

class AddUniversity extends Component {
  state = {};
  render() {
    return (
      <form className="row g-3 mb-3 align-items-center justify-content-center">
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-2">
            <h4>Add University</h4>
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="exampleInputFirstName" className="form-label">
              University name
            </label>
          </div>
          <div className="col-xl-2">
            <input
              class="form-control"
              type="text"
              placeholder="John"
              aria-label="Readonly input example"
              
            />
          </div>
          <div className="col-xl-1">
            <label for="exampleInputLastName" className="form-label">
              Location Country
            </label>
          </div>
          <div className="col-xl-2">
            <input
              class="form-control"
              type="text"
              placeholder="Doe"
              aria-label="Readonly input example"
              
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="website" className="form-label">
              Website
            </label>
          </div>
          <div className="col-xl-5">
            <input
              class="form-control"
              type="text"
              placeholder="john.doe@email.com"
              aria-label="Readonly input example"
              
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputAddress" className="form-label">
              Address line 1
            </label>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main Street"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputAddress2" className="form-label">
              Address line 2
            </label>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputCity" className="form-label">
              City
            </label>
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Townsville"
            />
          </div>
          <div className="col-xl-1">
            <label for="inputState" className="form-label">
              State
            </label>
          </div>
          <div className="col-xl-2">
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          {/* <div className="col-xl-1">
            <label for="inputZip" className="form-label">
              Zip
            </label>
          </div> */}
          {/* <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="99999"
            />
          </div> */}
          {/* <div className="col-xl-1">
            <label for="inputCountry" className="form-label">
              Country
            </label>
          </div> */}
          {/* <div className="col-xl-2">
            <input
              class="form-control"
              type="text"
              id="inputCountry"
              placeholder="U.S.A."
              aria-label="Readonly input example"
              disabled
            />
          </div> */}
        </div>

        <div className="row g-3 align-items-center justify-content-center align-items-center justify-content-center">
          <div className="col-xl-2">
            <h4>Add Courses</h4>
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="exampleDataList" class="form-label">
              Course name
            </label>
          </div>
          <div className="col-xl-5">
            <input
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="Computer Science"></option>
              <option value="Computer Engineering"></option>
              <option value="Master in Business Administration"></option>
              <option value="Business Analyst"></option>
              <option value="Electrical and Computer Engineering"></option>
              <option value="Civil Engineering"></option>
              <option value="Mechanical Engineering"></option>
            </datalist>
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          {/* <div className="col-xl-1">
            <label for="inputInstituteCity" className="form-label">
              City
            </label>
          </div> */}
          {/* <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputInstituteCity"
              placeholder="Collegeville"
            />
          </div> */}
          {/* <div className="col-xl-1">
            <label for="inputInstituteState" className="form-label">
              State
            </label>
          </div> */}
          {/* <div className="col-xl-2">
            <select id="inputInstituteState" className="form-select">
              <option selected>Choose...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div> */}
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          {/* <div className="col-xl-1">
            <label for="inputDegree" className="form-label">
              Degree
            </label>
          </div>
          <div className="col-xl-2">
            <select id="inputDegree" className="form-select">
              <option selected>Choose...</option>
              <option value="Bachelor">Bachelor's</option>
              <option value="Master">Master's</option>
              <option value="PhD">Ph.D.</option>
            </select>
          </div> */}
        </div>

        {/* <div className="row g-3 align-items-center justify-content-center"> */}
          {/* <div className="col-xl-1">
            <label for="inputDegreePeriodFrom" className="form-label">
              From
            </label>
          </div>
          <div className="col-xl-2  input-daterange">
            <input
              type="date"
              id="inputDegreePeriodFrom"
              className="form-control"
            />
          </div> */}
          {/* <div className="col-xl-1">
            <label for="inputDegreePeriodTo" className="form-label">
              To
            </label>
          </div>
          <div className="col-xl-2 input-daterange">
            <input
              type="date"
              id="inputDegreePeriodTo"
              className="form-control"
            />
          </div> */}
        {/* </div> */}

        {/* <div className="row g-3 align-items-center justify-content-center"> */}
          {/* <div className="col-xl-1">
            <label for="inputCGPA" className="form-label">
              CGPA
            </label>
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputCGPA"
              placeholder="3.00"
            />
          </div>
          <div className="col-xl-1">
            <label for="inputMaxCGPA" className="form-label">
              Max possible CGPA
            </label>
          </div>
          <div className="col-xl-2">
            <input
              class="form-control"
              type="text"
              id="inputMaxCGPA"
              placeholder="4.00"
            />
          </div> */}
        {/* </div> */}

        <div className="col-xl-1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AddUniversity;
