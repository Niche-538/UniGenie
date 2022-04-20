import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const AddUniversity = () => {
    const validSchema = yup.object().shape({
        instituteName: yup
            .string()
            .matches(
                /^([a-zA-Z &]+)$/,
                "Institute name cannot contain numbers or special characters besides space and &."
            )
            .required("Please enter a valid institute name."),
        instituteWebsite: yup
            .string()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                "Please enter a valid website."
            )
            .required("Please enter a valid website."),
        instituteAddress: yup.string(),
        instituteCity: yup
            .string()
            .matches(
                /^([a-zA-Z ]+)$/,
                "City name cannot contain numbers or special characters besides space."
            )
            .required("Please enter a valid city."),
        instituteState: yup.string().required("Please select a state."),
        instituteZip: yup
            .number()
            .required("Please enter a valid zip code.")
            .min(1, "Zip code cannot be less than 1.")
            .max(99999, "Zip code cannot be more than 99999."),
    });

    const [name, setIName] = useState();
    const [website, setIWebsite] = useState();
    const [address, setIAddress] = useState();
    const [city, setICity] = useState();
    const [state, setIState] = useState();
    const [zip, setIZCode] = useState();
    const [country, setICountry] = useState();

    const handleSubmitt = (e) => {
        e.preventDefault();
        const universityInfo = {
            name,
            website,
            address,
            city,
            state,
            zip: Number(zip),
            country,
        };

        fetch("http://localhost:8080/addUniversity", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
                "Access-Control-Request-Headers": "*",
                "Access-Control-Request-Method": "*",
            },
            body: JSON.stringify(universityInfo),
        }).then(() => {
            console.log(universityInfo);
        });
    };

    return (
        <Formik
            validationSchema={validSchema}
            onSubmit={console.log}
            initialValues={{
                name: "",
                website: "",
                address: "",
                city: "",
                state: "",
                zip: 0,
                country: "",
            }}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <Form noValidate onSubmit={handleSubmitt}>
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
                                name="name"
                                placeholder="Enter institute name"
                                minLength={20}
                                maxLength={40}
                                //value={values.instituteName}
                                onChange={(e) => setIName(e.target.value)}
                                //isInvalid={!!errors.instituteName}
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
                                name="website"
                                placeholder="www.institute.edu"
                                maxLength={20}
                                //value={values.instituteWebsite}
                                onChange={(e) => setIWebsite(e.target.value)}
                                //isInvalid={!!errors.instituteWebsite}
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
                                name="address"
                                placeholder="Enter institute address"
                                maxLength={60}
                                //value={values.instituteAddress}
                                onChange={(e) => setIAddress(e.target.value)}
                                //isInvalid={!!errors.instituteAddress}
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
                                name="city"
                                placeholder="Collegeberg"
                                maxLength={15}
                                //value={values.instituteCity}
                                onChange={(e) => setICity(e.target.value)}
                                //isInvalid={!!errors.instituteCity}
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
                                name="state"
                                //value={values.instituteState}
                                onChange={(e) => setIState(e.target.value)}
                                //isInvalid={!!errors.instituteState}
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
                                name="zip"
                                placeholder="11111"
                                minLength={1}
                                maxLength={5}
                                //value={values.instituteZip}
                                onChange={(e) => setIZCode(e.target.value)}
                                //isInvalid={!!errors.instituteZip}
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
                                name="country"
                                placeholder="U.S.A"
                                //aria-label="Readonly input example"
                                onChange={(e) => setICountry(e.target.value)}
                                //readOnly
                            />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="text-center">
                        <Button
                            variant="primary"
                            type="submit"
                            //onClick={handleOnClick}
                        >
                            Submit
                        </Button>{" "}
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
};

// class AddUniversity extends Component {
//     state = {};

//     schema = yup.object().shape({
//         instituteName: yup
//             .string()
//             .matches(
//                 /^([a-zA-Z &]+)$/,
//                 "Institute name cannot contain numbers or special characters besides space and &."
//             )
//             .required("Please enter a valid institute name."),
//         instituteWebsite: yup
//             .string()
//             .matches(
//                 /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//                 "Please enter a valid website."
//             )
//             .required("Please enter a valid website."),
//         instituteAddress: yup.string(),
//         instituteCity: yup
//             .string()
//             .matches(
//                 /^([a-zA-Z ]+)$/,
//                 "City name cannot contain numbers or special characters besides space."
//             )
//             .required("Please enter a valid city."),
//         instituteState: yup.string().required("Please select a state."),
//         instituteZip: yup
//             .number()
//             .required("Please enter a valid zip code.")
//             .min(1, "Zip code cannot be less than 1.")
//             .max(99999, "Zip code cannot be more than 99999."),
//     });

//     render() {
//         return (
//             <Formik
//                 validationSchema={this.schema}
//                 onSubmit={console.log}
//                 initialValues={{
//                     instituteName: "",
//                     instituteWebsite: "",
//                     instituteAddress: "",
//                     instituteCity: "",
//                     instituteState: "",
//                     instituteZip: "",
//                 }}
//             >
//                 {({ handleSubmit, handleChange, values, errors }) => (
//                     <Form noValidate onSubmit={handleSubmit}>
//                         <Form.Group className="row g-3 mb-3 my-auto align-items-center justify-content-center">
//                             <Form.Group className="col-xl-2 offset-xl-1">
//                                 <h4>Add University</h4>
//                             </Form.Group>
//                         </Form.Group>

//                         <Form.Group
//                             className="row g-3 mb-3 align-items-center justify-content-center"
//                             controlId="formInstituteName"
//                         >
//                             <Form.Group className="col-xl-1">
//                                 <Form.Label>Institute Name</Form.Label>
//                             </Form.Group>
//                             <Form.Group className="col-xl-5">
//                                 <Form.Control
//                                     type="text"
//                                     name="instituteName"
//                                     placeholder="Enter institute name"
//                                     minLength={20}
//                                     maxLength={40}
//                                     value={values.instituteName}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.instituteName}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.instituteName}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                         </Form.Group>

//                         <Form.Group
//                             className="row g-3 mb-3 align-items-center justify-content-center"
//                             controlId="formInstituteWebsite"
//                         >
//                             <Form.Group className="col-xl-1">
//                                 <Form.Label>Institute Website</Form.Label>
//                             </Form.Group>
//                             <Form.Group className="col-xl-5">
//                                 <Form.Control
//                                     type="url"
//                                     name="instituteWebsite"
//                                     placeholder="www.institute.edu"
//                                     maxLength={20}
//                                     value={values.instituteWebsite}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.instituteWebsite}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.instituteWebsite}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                         </Form.Group>

//                         <Form.Group
//                             className="row g-3 mb-3 align-items-center justify-content-center"
//                             controlId="formInstituteAddress"
//                         >
//                             <Form.Group className="col-xl-1">
//                                 <Form.Label>Institute Address</Form.Label>
//                             </Form.Group>
//                             <Form.Group className="col-xl-5">
//                                 <Form.Control
//                                     type="text"
//                                     name="instituteAddress"
//                                     placeholder="Enter institute address"
//                                     maxLength={60}
//                                     value={values.instituteAddress}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.instituteAddress}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.instituteAddress}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                         </Form.Group>

//                         <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
//                             <Form.Group
//                                 className="col-xl-1"
//                                 controlId="formInstituteCity"
//                             >
//                                 <Form.Label>Institute City</Form.Label>
//                             </Form.Group>
//                             <Form.Group className="col-xl-2">
//                                 <Form.Control
//                                     type="text"
//                                     name="instituteCity"
//                                     placeholder="Collegeberg"
//                                     maxLength={15}
//                                     value={values.instituteCity}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.instituteCity}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.instituteCity}
//                                 </Form.Control.Feedback>
//                             </Form.Group>

//                             <Form.Group
//                                 className="col-xl-1"
//                                 controlId="formInstituteState"
//                             >
//                                 <Form.Label>Institute State</Form.Label>
//                             </Form.Group>
//                             <Form.Group className="col-xl-2">
//                                 <Form.Select
//                                     name="instituteState"
//                                     value={values.instituteState}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.instituteState}
//                                 >
//                                     <option value="">Select a state...</option>
//                                     <option value="AL">Alabama</option>
//                                     <option value="AK">Alaska</option>
//                                     <option value="AZ">Arizona</option>
//                                     <option value="AR">Arkansas</option>
//                                     <option value="CA">California</option>
//                                     <option value="CO">Colorado</option>
//                                     <option value="CT">Connecticut</option>
//                                     <option value="DE">Delaware</option>
//                                     <option value="DC">
//                                         District Of Columbia
//                                     </option>
//                                     <option value="FL">Florida</option>
//                                     <option value="GA">Georgia</option>
//                                     <option value="HI">Hawaii</option>
//                                     <option value="ID">Idaho</option>
//                                     <option value="IL">Illinois</option>
//                                     <option value="IN">Indiana</option>
//                                     <option value="IA">Iowa</option>
//                                     <option value="KS">Kansas</option>
//                                     <option value="KY">Kentucky</option>
//                                     <option value="LA">Louisiana</option>
//                                     <option value="ME">Maine</option>
//                                     <option value="MD">Maryland</option>
//                                     <option value="MA">Massachusetts</option>
//                                     <option value="MI">Michigan</option>
//                                     <option value="MN">Minnesota</option>
//                                     <option value="MS">Mississippi</option>
//                                     <option value="MO">Missouri</option>
//                                     <option value="MT">Montana</option>
//                                     <option value="NE">Nebraska</option>
//                                     <option value="NV">Nevada</option>
//                                     <option value="NH">New Hampshire</option>
//                                     <option value="NJ">New Jersey</option>
//                                     <option value="NM">New Mexico</option>
//                                     <option value="NY">New York</option>
//                                     <option value="NC">North Carolina</option>
//                                     <option value="ND">North Dakota</option>
//                                     <option value="OH">Ohio</option>
//                                     <option value="OK">Oklahoma</option>
//                                     <option value="OR">Oregon</option>
//                                     <option value="PA">Pennsylvania</option>
//                                     <option value="RI">Rhode Island</option>
//                                     <option value="SC">South Carolina</option>
//                                     <option value="SD">South Dakota</option>
//                                     <option value="TN">Tennessee</option>
//                                     <option value="TX">Texas</option>
//                                     <option value="UT">Utah</option>
//                                     <option value="VT">Vermont</option>
//                                     <option value="VA">Virginia</option>
//                                     <option value="WA">Washington</option>
//                                     <option value="WV">West Virginia</option>
//                                     <option value="WI">Wisconsin</option>
//                                     <option value="WY">Wyoming</option>
//                                 </Form.Select>
//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.instituteState}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                         </Form.Group>

//                         <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
//                             <Form.Group
//                                 className="col-xl-1"
//                                 controlId="formInstituteZipCode"
//                             >
//                                 <Form.Label>Institute Zip Code</Form.Label>
//                             </Form.Group>
//                             <Form.Group className="col-xl-2">
//                                 <Form.Control
//                                     type="number"
//                                     name="instituteZip"
//                                     placeholder="11111"
//                                     minLength={1}
//                                     maxLength={5}
//                                     value={values.instituteZip}
//                                     onChange={handleChange}
//                                     isInvalid={!!errors.instituteZip}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {errors.instituteZip}
//                                 </Form.Control.Feedback>
//                             </Form.Group>

//                             <Form.Group
//                                 className="col-xl-1"
//                                 controlId="formInstituteCountry"
//                             >
//                                 <Form.Label>Institute Country</Form.Label>
//                             </Form.Group>
//                             <Form.Group className="col-xl-2">
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="U.S.A."
//                                     aria-label="Readonly input example"
//                                     readOnly
//                                 />
//                             </Form.Group>
//                         </Form.Group>

//                         <Form.Group className="text-center">
//                             <Button
//                                 variant="primary"
//                                 type="submit"
//                                 onClick={handleOnClick}
//                             >
//                                 Submit
//                             </Button>{" "}
//                         </Form.Group>
//                     </Form>
//                 )}
//             </Formik>
//         );
//     }
// }

export default AddUniversity;
