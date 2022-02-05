import React, { Component } from "react";

class StudentDetails extends Component {
  state = {};
  render() {
    return (
      <form className="row g-3 mb-3 align-items-center justify-content-center">
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-2">
            <h4>Personal Details</h4>
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="exampleInputFirstName" className="form-label">
              First name
            </label>
          </div>
          <div className="col-xl-2">
            <input
              class="form-control"
              type="text"
              placeholder="John"
              aria-label="Readonly input example"
              readOnly
            />
          </div>
          <div className="col-xl-1">
            <label for="exampleInputLastName" className="form-label">
              Last name
            </label>
          </div>
          <div className="col-xl-2">
            <input
              class="form-control"
              type="text"
              placeholder="Doe"
              aria-label="Readonly input example"
              readOnly
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="exampleEmail" className="form-label">
              Email address
            </label>
          </div>
          <div className="col-xl-5">
            <input
              class="form-control"
              type="text"
              placeholder="john.doe@email.com"
              aria-label="Readonly input example"
              readOnly
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
          <div className="col-xl-1">
            <label for="inputZip" className="form-label">
              Zip
            </label>
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="99999"
            />
          </div>
          <div className="col-xl-1">
            <label for="inputCountry" className="form-label">
              Country
            </label>
          </div>
          <div className="col-xl-2">
            <input
              class="form-control"
              type="text"
              id="inputCountry"
              placeholder="U.S.A."
              aria-label="Readonly input example"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center align-items-center justify-content-center">
          <div className="col-xl-2">
            <h4>Education Details</h4>
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
            <label for="exampleDataList" class="form-label">
              Institute name
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
              <option value="Massachusetts Institute of Technology"></option>
              <option value="Harvard University"></option>
              <option value="Stanford University"></option>
              <option value="Cornell University"></option>
              <option value="University of California, Berkeley"></option>
              <option value="Columbia University in the City of New York"></option>
              <option value="University of Michigan"></option>
              <option value="University of Washington"></option>
              <option value="University of Pennsylvania"></option>
              <option value="University of Minnesota-Twin Cities"></option>
              <option value="Yale University"></option>
              <option value="University of California, Los Angeles"></option>
              <option value="Johns Hopkins University"></option>
              <option value="The University of Texas at Austin"></option>
              <option value="New York University"></option>
              <option value="University of Wisconsin-Madison"></option>
              <option value="Purdue University"></option>
              <option value="Penn State University"></option>
              <option value="Princeton University"></option>
              <option value="Carnegie Mellon University"></option>
              <option value="University of Southern California"></option>
              <option value="University of Chicago"></option>
              <option value="Arizona State University"></option>
              <option value="University of Florida"></option>
              <option value="Michigan State University"></option>
              <option value="University of California, San Diego"></option>
              <option value="University of Illinois at Urbana-Champaign"></option>
              <option value="University of North Carolina at Chapel Hill"></option>
              <option value="Duke University"></option>
              <option value="Northwestern University"></option>
              <option value="University of California, Davis"></option>
              <option value="Boston University"></option>
              <option value="University of Maryland"></option>
              <option value="Rutgers, The State University of New Jersey"></option>
              <option value="University of California, Irvine"></option>
              <option value="The University of Arizona"></option>
              <option value="Texas A&M University"></option>
              <option value="The University of Utah"></option>
              <option value="University of Virginia"></option>
              <option value="The Ohio State University"></option>
              <option value="University of Colorado Boulder"></option>
              <option value="North Carolina State University"></option>
              <option value="Georgia Institute of Technology"></option>
              <option value="University of Pittsburgh"></option>
              <option value="Indiana University Bloomington"></option>
              <option value="California Institute of Technology"></option>
              <option value="Washington University in St. Louis"></option>
              <option value="University of California, Santa Barbara"></option>
              <option value="Georgetown University"></option>
              <option value="Tufts University"></option>
              <option value="University of Nebraska-Lincoln"></option>
              <option value="Virginia Polytechnic Institute and State University"></option>
              <option value="Florida State University"></option>
              <option value="University of South Florida"></option>
              <option value="Oregon State University"></option>
              <option value="University of Massachusetts Amherst"></option>
              <option value="University of Georgia"></option>
              <option value="Brown University"></option>
              <option value="Iowa State University"></option>
              <option value="Brigham Young University"></option>
              <option value="University of Rochester"></option>
              <option value="University of Iowa"></option>
              <option value="University of California, Riverside"></option>
              <option value="Washington State University"></option>
              <option value="University of Delaware"></option>
              <option value="Georgia State University"></option>
              <option value="William Marsh Rice University"></option>
              <option value="University at Buffalo, State University of New York"></option>
              <option value="Dartmouth College"></option>
              <option value="George Washington University"></option>
              <option value="Vanderbilt University"></option>
              <option value="Syracuse University"></option>
              <option value="Colorado State University"></option>
              <option value="University of Houston"></option>
              <option value="George Mason University"></option>
              <option value="University of Oregon"></option>
              <option value="University of California, Santa Cruz"></option>
              <option value="University of Illinois at Chicago"></option>
              <option value="University of California, San Francisco"></option>
              <option value="University of Notre Dame"></option>
              <option value="University of Connecticut"></option>
              <option value="Emory University"></option>
              <option value="Temple University"></option>
              <option value="Northeastern University"></option>
              <option value="University of Missouri"></option>
              <option value="University of Central Florida"></option>
              <option value="University of Kansas"></option>
              <option value="University of Kentucky"></option>
              <option value="Florida International University"></option>
              <option value="University of New Mexico"></option>
              <option value="Drexel University"></option>
              <option value="The University of Tennessee, Knoxville"></option>
              <option value="Rochester Institute of Technology"></option>
              <option value="University of Miami"></option>
              <option value="Louisiana State University"></option>
              <option value="The University of Alabama"></option>
              <option value="San Diego State University"></option>
              <option value="American University"></option>
              <option value="Boston College"></option>
              <option value="Fordham University"></option>
            </datalist>
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
              placeholder="Collegeville"
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
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
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
          </div>
          <div className="col-xl-1">
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
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-xl-1">
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

export default StudentDetails;
