import React, { Component } from "react";

class AddUniversity extends Component {
  state = {
    spring_intake_available: false
  };

  springIntakeAvailable = () => {
    this.setState({ spring_intake_available: false});
  }

  springIntakeNotAvailable = () => {
    this.setState({ spring_intake_available: true});
  }

  render() {
    return (
      <form className="row g-3 mb-3 align-items-center justify-content-center">
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-2 offset-xl-1">
            <h4>Add University</h4>
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputInstituteName" className="form-label">
              Institute name
            </label>
          </div>
          <div className="col-xl-5">
            <input
              className="form-control"
              type="text"
              id="inputInstituteName"
              placeholder="Enter institute name"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputWebsite" className="form-label">
              Website
            </label>
          </div>
          <div className="col-xl-5">
            <input
              className="form-control"
              type="text"
              id="inputWebsite"
              placeholder="www.url.com"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputInstituteAddress" className="form-label">
              Address line
            </label>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control"
              id="inputInstituteAddress"
              placeholder="1234 Main Street"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputInstituteCity" className="form-label">
              City
            </label>
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputInstituteCity"
              placeholder="UniverCity"
            />
          </div>
          <div className="col-xl-1">
            <label for="inputInstituteState" className="form-label">
              State
            </label>
          </div>
          <div className="col-xl-2">
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
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputInstituteZip" className="form-label">
              Zip
            </label>
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputInstituteZip"
              placeholder="11111"
            />
          </div>
          <div className="col-xl-1">
            <label for="inputInstituteCountry" className="form-label">
              Country
            </label>
          </div>
          <div className="col-xl-2">
            <input
              className="form-control"
              type="text"
              id="inputInstituteCountry"
              placeholder="U.S.A."
              aria-label="Readonly input example"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center align-items-center justify-content-center">
          <div className="col-xl-2 offset-xl-1">
            <h4>Add Programs</h4>
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputProgramName" className="form-label">
              Program name
            </label>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control"
              id="inputProgramName"
              placeholder="Enter program name"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputCollegeName" className="form-label">
              Offered by
            </label>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control"
              id="inputCollegeName"
              placeholder="Enter college name"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputCampusName" className="form-label">
              Campus name
            </label>
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputCampusName"
              placeholder="Campus A"
            />
          </div>

          <div className="col-xl-1">
            <label for="inputCampusZip" className="form-label">
              Campus zip
            </label>
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputCampusZip"
              placeholder="22222"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="inputFallIntake" className="form-label">
              Fall intake
            </label>
          </div>
          <div className="col-xl-1">
            <input
              type="text"
              className="form-control"
              id="inputFallIntake"
              placeholder="100"
            />
          </div>

          <div className="col-xl-1">
            <label for="inputSpringIntakeAvailable" className="form-label">
              Spring admits?
            </label>
          </div>
          <div className="col-xl-1">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineSpringIntakeYes"
                value="option1"
                onClick={this.springIntakeAvailable}
              />
              <label className="form-check-label" for="inlineSpringIntakeYes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineSpringIntakeNo"
                value="option2"
                onClick={this.springIntakeNotAvailable}
              />
              <label className="form-check-label" for="inlineSpringIntakeNo">
                No
              </label>
            </div>
          </div>

          <div className="col-xl-1">
            <label for="inputSpringIntake" className="form-label">
              Spring intake
            </label>
          </div>
          <div className="col-xl-1">
            <input
              type="text"
              className="form-control"
              id="inputSpringIntake"
              placeholder="100"
              disabled={this.state.spring_intake_available}
            />
          </div>
        </div>

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
