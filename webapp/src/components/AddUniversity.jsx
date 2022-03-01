// import React, { Component } from "react";

// class AddUniversity extends Component {
//     state = {
//         spring_intake_available: false,
//     };

//     springIntakeAvailable = () => {
//         this.setState({ spring_intake_available: false });
//     };

//     springIntakeNotAvailable = () => {
//         this.setState({ spring_intake_available: true });
//     };

//     render() {
//         return (
//             <form className="row g-3 mb-3 align-items-center justify-content-center">
//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-2 offset-xl-1">
//                         <h4>Add University</h4>
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputInstituteName" className="form-label">
//                             Institute name
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <input
//                             className="form-control"
//                             type="text"
//                             id="inputInstituteName"
//                             placeholder="Enter institute name"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputWebsite" className="form-label">
//                             Website
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <input
//                             className="form-control"
//                             type="text"
//                             id="inputWebsite"
//                             placeholder="www.url.com"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label
//                             for="inputInstituteAddress"
//                             className="form-label"
//                         >
//                             Address line
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputInstituteAddress"
//                             placeholder="1234 Main Street"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputInstituteCity" className="form-label">
//                             City
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputInstituteCity"
//                             placeholder="UniverCity"
//                         />
//                     </div>
//                     <div className="col-xl-1">
//                         <label for="inputInstituteState" className="form-label">
//                             State
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <select
//                             id="inputInstituteState"
//                             className="form-select"
//                         >
//                             <option selected>Choose...</option>
//                             <option value="AL">Alabama</option>
//                             <option value="AK">Alaska</option>
//                             <option value="AZ">Arizona</option>
//                             <option value="AR">Arkansas</option>
//                             <option value="CA">California</option>
//                             <option value="CO">Colorado</option>
//                             <option value="CT">Connecticut</option>
//                             <option value="DE">Delaware</option>
//                             <option value="DC">District Of Columbia</option>
//                             <option value="FL">Florida</option>
//                             <option value="GA">Georgia</option>
//                             <option value="HI">Hawaii</option>
//                             <option value="ID">Idaho</option>
//                             <option value="IL">Illinois</option>
//                             <option value="IN">Indiana</option>
//                             <option value="IA">Iowa</option>
//                             <option value="KS">Kansas</option>
//                             <option value="KY">Kentucky</option>
//                             <option value="LA">Louisiana</option>
//                             <option value="ME">Maine</option>
//                             <option value="MD">Maryland</option>
//                             <option value="MA">Massachusetts</option>
//                             <option value="MI">Michigan</option>
//                             <option value="MN">Minnesota</option>
//                             <option value="MS">Mississippi</option>
//                             <option value="MO">Missouri</option>
//                             <option value="MT">Montana</option>
//                             <option value="NE">Nebraska</option>
//                             <option value="NV">Nevada</option>
//                             <option value="NH">New Hampshire</option>
//                             <option value="NJ">New Jersey</option>
//                             <option value="NM">New Mexico</option>
//                             <option value="NY">New York</option>
//                             <option value="NC">North Carolina</option>
//                             <option value="ND">North Dakota</option>
//                             <option value="OH">Ohio</option>
//                             <option value="OK">Oklahoma</option>
//                             <option value="OR">Oregon</option>
//                             <option value="PA">Pennsylvania</option>
//                             <option value="RI">Rhode Island</option>
//                             <option value="SC">South Carolina</option>
//                             <option value="SD">South Dakota</option>
//                             <option value="TN">Tennessee</option>
//                             <option value="TX">Texas</option>
//                             <option value="UT">Utah</option>
//                             <option value="VT">Vermont</option>
//                             <option value="VA">Virginia</option>
//                             <option value="WA">Washington</option>
//                             <option value="WV">West Virginia</option>
//                             <option value="WI">Wisconsin</option>
//                             <option value="WY">Wyoming</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputInstituteZip" className="form-label">
//                             Zip
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputInstituteZip"
//                             placeholder="11111"
//                         />
//                     </div>
//                     <div className="col-xl-1">
//                         <label
//                             for="inputInstituteCountry"
//                             className="form-label"
//                         >
//                             Country
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             className="form-control"
//                             type="text"
//                             id="inputInstituteCountry"
//                             placeholder="U.S.A."
//                             aria-label="Readonly input example"
//                             disabled
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center align-items-center justify-content-center">
//                     <div className="col-xl-2 offset-xl-1">
//                         <h4>Add Programs</h4>
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputProgramName" className="form-label">
//                             Program name
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputProgramName"
//                             placeholder="Enter program name"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputCollegeName" className="form-label">
//                             Offered by
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputCollegeName"
//                             placeholder="Enter college name"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputCampusName" className="form-label">
//                             Campus name
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputCampusName"
//                             placeholder="Campus A"
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label for="inputCampusZip" className="form-label">
//                             Campus zip
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputCampusZip"
//                             placeholder="22222"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputFallIntake" className="form-label">
//                             Fall intake
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputFallIntake"
//                             placeholder="100"
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputSpringIntakeAvailable"
//                             className="form-label"
//                         >
//                             Spring admits?
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <div className="form-check form-check-inline">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="inlineSpringIntakeYes"
//                                 value="option1"
//                                 onClick={this.springIntakeAvailable}
//                             />
//                             <label
//                                 className="form-check-label"
//                                 for="inlineSpringIntakeYes"
//                             >
//                                 Yes
//                             </label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="inlineSpringIntakeNo"
//                                 value="option2"
//                                 onClick={this.springIntakeNotAvailable}
//                             />
//                             <label
//                                 className="form-check-label"
//                                 for="inlineSpringIntakeNo"
//                             >
//                                 No
//                             </label>
//                         </div>
//                     </div>

//                     <div className="col-xl-1">
//                         <label for="inputSpringIntake" className="form-label">
//                             Spring intake
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputSpringIntake"
//                             placeholder="100"
//                             disabled={this.state.spring_intake_available}
//                         />
//                     </div>
//                 </div>

//                 <div className="col-xl-1">
//                     <button type="submit" className="btn btn-primary">
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default AddUniversity;

import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Field, Formik } from "formik";
import * as yup from "yup";

class AddUniversity extends Component {
    state = {};

    schema = yup.object().shape({
        instituteName: yup
            .string()
            .required("Please enter a valid institute name."),
        instituteWebsite: yup
            .string()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                "Enter correct url!"
            )
            .required("Please enter a valid website."),
        instituteAddress: yup
            .string()
            .required("Please enter a valid address."),
        instituteCity: yup.string().required("Please enter a valid city."),
        instituteState: yup.string().required("Please select a state."),
        instituteZip: yup
            .number()
            .required("Please enter a valid zip code.")
            .min(1, "Min value 00001.")
            .max(99999, "Max value 99999."),
    });

    render() {
        return (
            <Formik
                validationSchema={this.schema}
                onSubmit={console.log}
                initialValues={{
                    instituteName: "",
                    instituteWebsite: "",
                    instituteAddress: "",
                    instituteCity: "",
                    instituteState: "",
                    instituteZip: "",
                }}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="row g-3 mb-3 my-auto align-items-center justify-content-center">
                            <Form.Group className="col-xl-2 offset-xl-1">
                                <h4>Add University</h4>
                            </Form.Group>
                        </Form.Group>

                        <Form.Group
                            className="row g-3 mb-3 align-items-center justify-content-center"
                            controlId="formInstituteName"
                        >
                            <Form.Group className="col-xl-1">
                                <Form.Label>Institute Name</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-5">
                                <Form.Control
                                    type="text"
                                    name="instituteName"
                                    placeholder="Enter institute name"
                                    minLength={20}
                                    maxLength={40}
                                    value={values.instituteName}
                                    onChange={handleChange}
                                    isInvalid={!!errors.instituteName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.instituteName}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Group>

                        <Form.Group
                            className="row g-3 mb-3 align-items-center justify-content-center"
                            controlId="formInstituteWebsite"
                        >
                            <Form.Group className="col-xl-1">
                                <Form.Label>Institute Website</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-5">
                                <Form.Control
                                    type="url"
                                    name="instituteWebsite"
                                    placeholder="www.institute.edu"
                                    maxLength={20}
                                    value={values.instituteWebsite}
                                    onChange={handleChange}
                                    isInvalid={!!errors.instituteWebsite}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.instituteWebsite}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Group>

                        <Form.Group
                            className="row g-3 mb-3 align-items-center justify-content-center"
                            controlId="formInstituteAddress"
                        >
                            <Form.Group className="col-xl-1">
                                <Form.Label>Institute Address</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-5">
                                <Form.Control
                                    type="text"
                                    name="instituteAddress"
                                    placeholder="Enter institute address"
                                    maxLength={60}
                                    value={values.instituteAddress}
                                    onChange={handleChange}
                                    isInvalid={!!errors.instituteAddress}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.instituteAddress}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Group>

                        <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                            <Form.Group
                                className="col-xl-1"
                                controlId="formInstituteCity"
                            >
                                <Form.Label>Institute City</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-2">
                                <Form.Control
                                    type="text"
                                    name="instituteCity"
                                    placeholder="Collegeberg"
                                    maxLength={15}
                                    value={values.instituteCity}
                                    onChange={handleChange}
                                    isInvalid={!!errors.instituteCity}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.instituteCity}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                                className="col-xl-1"
                                controlId="formInstituteState"
                            >
                                <Form.Label>Institute State</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-2">
                                <Form.Select
                                    name="instituteState"
                                    value={values.instituteState}
                                    onChange={handleChange}
                                    isInvalid={!!errors.instituteState}
                                >
                                    <option value="">Select a state...</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">
                                        District Of Columbia
                                    </option>
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
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.instituteState}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Group>

                        <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                            <Form.Group
                                className="col-xl-1"
                                controlId="formInstituteZipCode"
                            >
                                <Form.Label>Institute Zip Code</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-2">
                                <Form.Control
                                    type="number"
                                    name="instituteZip"
                                    placeholder="11111"
                                    minLength={1}
                                    maxLength={5}
                                    value={values.instituteZip}
                                    onChange={handleChange}
                                    isInvalid={!!errors.instituteZip}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.instituteZip}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                                className="col-xl-1"
                                controlId="formInstituteCountry"
                            >
                                <Form.Label>Institute Country</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-2">
                                <Form.Control
                                    type="text"
                                    placeholder="U.S.A."
                                    aria-label="Readonly input example"
                                    readOnly
                                />
                            </Form.Group>
                        </Form.Group>

                        <Form.Group className="text-center">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>{" "}
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default AddUniversity;
