// import React, { Component } from "react";

// class StudentDetails extends Component {
//     state = {
//         has_taken_gre: false,
//         has_taken_toefl: false,
//         has_taken_ielts: false,
//     };

//     hasTakenGRE = () => {
//         this.setState({ has_taken_gre: false });
//     };

//     hasNotTakenGRE = () => {
//         this.setState({ has_taken_gre: true });
//     };

//     hasTakenTOEFL = () => {
//         this.setState({ has_taken_toefl: false });
//     };

//     hasNotTakenTOEFL = () => {
//         this.setState({ has_taken_toefl: true });
//     };

//     hasTakenIELTS = () => {
//         this.setState({ has_taken_ielts: false });
//     };

//     hasNotTakenIELTS = () => {
//         this.setState({ has_taken_ielts: true });
//     };

//     render() {
//         return (
//             <form className="row g-3 mb-3 align-items-center justify-content-center">
//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-2 offset-xl-1">
//                         <h4>Personal Details</h4>
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputFirstName" className="form-label">
//                             First name
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             className="form-control"
//                             type="text"
//                             id="inputFirstName"
//                             placeholder="John"
//                             aria-label="Readonly input example"
//                             readOnly
//                         />
//                     </div>
//                     <div className="col-xl-1">
//                         <label for="inputLastName" className="form-label">
//                             Last name
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             className="form-control"
//                             type="text"
//                             id="inputLastName"
//                             placeholder="Doe"
//                             aria-label="Readonly input example"
//                             readOnly
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputEmail" className="form-label">
//                             Email address
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <input
//                             className="form-control"
//                             type="text"
//                             id="inputEmail"
//                             placeholder="john.doe@email.com"
//                             aria-label="Readonly input example"
//                             readOnly
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputAddress1" className="form-label">
//                             Address line 1
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputAddress1"
//                             placeholder="1234 Main Street"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputAddress2" className="form-label">
//                             Address line 2
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputAddress2"
//                             placeholder="Apartment, studio, or floor"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputStudentCity" className="form-label">
//                             City
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputStudentCity"
//                             placeholder="Townsville"
//                         />
//                     </div>
//                     <div className="col-xl-1">
//                         <label for="inputStudentState" className="form-label">
//                             State
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <select id="inputStudentState" className="form-select">
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
//                         <label for="inputStudentZip" className="form-label">
//                             Zip
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputStudentZip"
//                             placeholder="99999"
//                         />
//                     </div>
//                     <div className="col-xl-1">
//                         <label for="inputStudentCountry" className="form-label">
//                             Country
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             className="form-control"
//                             type="text"
//                             id="inputStudentCountry"
//                             placeholder="U.S.A."
//                             aria-label="Readonly input example"
//                             disabled
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center align-items-center justify-content-center">
//                     <div className="col-xl-2 offset-xl-1">
//                         <h4>Education Details</h4>
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputInstituteName" className="form-label">
//                             Institute name
//                         </label>
//                     </div>
//                     <div className="col-xl-5">
//                         <select id="inputInstituteName" className="form-select">
//                             <option selected>Choose...</option>
//                             <option value="Massachusetts Institute of Technology">
//                                 Massachusetts Institute of Technology
//                             </option>
//                             <option value="Harvard University">
//                                 Harvard University
//                             </option>
//                             <option value="Stanford University">
//                                 Stanford University
//                             </option>
//                             <option value="Cornell University">
//                                 Cornell University
//                             </option>
//                             <option value="University of California, Berkeley">
//                                 University of California, Berkeley
//                             </option>
//                             <option value="Columbia University in the City of New York">
//                                 Columbia University in the City of New York
//                             </option>
//                             <option value="University of Michigan">
//                                 University of Michigan
//                             </option>
//                             <option value="University of Washington">
//                                 University of Washington
//                             </option>
//                             <option value="University of Pennsylvania">
//                                 University of Pennsylvania
//                             </option>
//                             <option value="University of Minnesota-Twin Cities">
//                                 University of Minnesota-Twin Cities
//                             </option>
//                             <option value="Yale University">
//                                 Yale University
//                             </option>
//                             <option value="University of California, Los Angeles">
//                                 University of California, Los Angeles
//                             </option>
//                             <option value="Johns Hopkins University">
//                                 Johns Hopkins University
//                             </option>
//                             <option value="The University of Texas at Austin">
//                                 The University of Texas at Austin
//                             </option>
//                             <option value="New York University">
//                                 New York University
//                             </option>
//                             <option value="University of Wisconsin-Madison">
//                                 University of Wisconsin-Madison
//                             </option>
//                             <option value="Purdue University">
//                                 Purdue University
//                             </option>
//                             <option value="Penn State University">
//                                 Penn State University
//                             </option>
//                             <option value="Princeton University">
//                                 Princeton University
//                             </option>
//                             <option value="Carnegie Mellon University">
//                                 Carnegie Mellon University
//                             </option>
//                             <option value="University of Southern California">
//                                 University of Southern California
//                             </option>
//                             <option value="University of Chicago">
//                                 University of Chicago
//                             </option>
//                             <option value="Arizona State University">
//                                 Arizona State University
//                             </option>
//                             <option value="University of Florida">
//                                 University of Florida
//                             </option>
//                             <option value="Michigan State University">
//                                 Michigan State University
//                             </option>
//                             <option value="University of California, San Diego">
//                                 University of California, San Diego
//                             </option>
//                             <option value="University of Illinois at Urbana-Champaign">
//                                 University of Illinois at Urbana-Champaign
//                             </option>
//                             <option value="University of North Carolina at Chapel Hill">
//                                 University of North Carolina at Chapel Hill
//                             </option>
//                             <option value="Duke University">
//                                 Duke University
//                             </option>
//                             <option value="Northwestern University">
//                                 Northwestern University
//                             </option>
//                             <option value="University of California, Davis">
//                                 University of California, Davis
//                             </option>
//                             <option value="Boston University">
//                                 Boston University
//                             </option>
//                             <option value="University of Maryland">
//                                 University of Maryland
//                             </option>
//                             <option value="Rutgers, The State University of New Jersey">
//                                 Rutgers, The State University of New Jersey
//                             </option>
//                             <option value="University of California, Irvine">
//                                 University of California, Irvine
//                             </option>
//                             <option value="The University of Arizona">
//                                 The University of Arizona
//                             </option>
//                             <option value="Texas A&M University">
//                                 Texas A&M University
//                             </option>
//                             <option value="The University of Utah">
//                                 The University of Utah
//                             </option>
//                             <option value="University of Virginia">
//                                 University of Virginia
//                             </option>
//                             <option value="The Ohio State University">
//                                 The Ohio State University
//                             </option>
//                             <option value="University of Colorado Boulder">
//                                 University of Colorado Boulder
//                             </option>
//                             <option value="North Carolina State University">
//                                 North Carolina State University
//                             </option>
//                             <option value="Georgia Institute of Technology">
//                                 Georgia Institute of Technology
//                             </option>
//                             <option value="University of Pittsburgh">
//                                 University of Pittsburgh
//                             </option>
//                             <option value="Indiana University Bloomington">
//                                 Indiana University Bloomington
//                             </option>
//                             <option value="California Institute of Technology">
//                                 California Institute of Technology
//                             </option>
//                             <option value="Washington University in St. Louis">
//                                 Washington University in St. Louis
//                             </option>
//                             <option value="University of California, Santa Barbara">
//                                 University of California, Santa Barbara
//                             </option>
//                             <option value="Georgetown University">
//                                 Georgetown University
//                             </option>
//                             <option value="Tufts University">
//                                 Tufts University
//                             </option>
//                             <option value="University of Nebraska-Lincoln">
//                                 University of Nebraska-Lincoln
//                             </option>
//                             <option value="Virginia Polytechnic Institute and State University">
//                                 Virginia Polytechnic Institute and State
//                                 University
//                             </option>
//                             <option value="Florida State University">
//                                 Florida State University
//                             </option>
//                             <option value="University of South Florida">
//                                 University of South Florida
//                             </option>
//                             <option value="Oregon State University">
//                                 Oregon State University
//                             </option>
//                             <option value="University of Massachusetts Amherst">
//                                 University of Massachusetts Amherst
//                             </option>
//                             <option value="University of Georgia">
//                                 University of Georgia
//                             </option>
//                             <option value="Brown University">
//                                 Brown University
//                             </option>
//                             <option value="Iowa State University">
//                                 Iowa State University
//                             </option>
//                             <option value="Brigham Young University">
//                                 Brigham Young University
//                             </option>
//                             <option value="University of Rochester">
//                                 University of Rochester
//                             </option>
//                             <option value="University of Iowa">
//                                 University of Iowa
//                             </option>
//                             <option value="University of California, Riverside">
//                                 University of California, Riverside
//                             </option>
//                             <option value="Washington State University">
//                                 Washington State University
//                             </option>
//                             <option value="University of Delaware">
//                                 University of Delaware
//                             </option>
//                             <option value="Georgia State University">
//                                 Georgia State University
//                             </option>
//                             <option value="William Marsh Rice University">
//                                 William Marsh Rice University
//                             </option>
//                             <option value="University at Buffalo, State University of New York">
//                                 University at Buffalo, State University of New
//                                 York
//                             </option>
//                             <option value="Dartmouth College">
//                                 Dartmouth College
//                             </option>
//                             <option value="George Washington University">
//                                 George Washington University
//                             </option>
//                             <option value="Vanderbilt University">
//                                 Vanderbilt University
//                             </option>
//                             <option value="Syracuse University">
//                                 Syracuse University
//                             </option>
//                             <option value="Colorado State University">
//                                 Colorado State University
//                             </option>
//                             <option value="University of Houston">
//                                 University of Houston
//                             </option>
//                             <option value="George Mason University">
//                                 George Mason University
//                             </option>
//                             <option value="University of Oregon">
//                                 University of Oregon
//                             </option>
//                             <option value="University of California, Santa Cruz">
//                                 University of California, Santa Cruz
//                             </option>
//                             <option value="University of Illinois at Chicago">
//                                 University of Illinois at Chicago
//                             </option>
//                             <option value="University of California, San Francisco">
//                                 University of California, San Francisco
//                             </option>
//                             <option value="University of Notre Dame">
//                                 University of Notre Dame
//                             </option>
//                             <option value="University of Connecticut">
//                                 University of Connecticut
//                             </option>
//                             <option value="Emory University">
//                                 Emory University
//                             </option>
//                             <option value="Temple University">
//                                 Temple University
//                             </option>
//                             <option value="Northeastern University">
//                                 Northeastern University
//                             </option>
//                             <option value="University of Missouri">
//                                 University of Missouri
//                             </option>
//                             <option value="University of Central Florida">
//                                 University of Central Florida
//                             </option>
//                             <option value="University of Kansas">
//                                 University of Kansas
//                             </option>
//                             <option value="University of Kentucky">
//                                 University of Kentucky
//                             </option>
//                             <option value="Florida International University">
//                                 Florida International University
//                             </option>
//                             <option value="University of New Mexico">
//                                 University of New Mexico
//                             </option>
//                             <option value="Drexel University">
//                                 Drexel University
//                             </option>
//                             <option value="The University of Tennessee, Knoxville">
//                                 The University of Tennessee, Knoxville
//                             </option>
//                             <option value="Rochester Institute of Technology">
//                                 Rochester Institute of Technology
//                             </option>
//                             <option value="University of Miami">
//                                 University of Miami
//                             </option>
//                             <option value="Louisiana State University">
//                                 Louisiana State University
//                             </option>
//                             <option value="The University of Alabama">
//                                 The University of Alabama
//                             </option>
//                             <option value="San Diego State University">
//                                 San Diego State University
//                             </option>
//                             <option value="American University">
//                                 American University
//                             </option>
//                             <option value="Boston College">
//                                 Boston College
//                             </option>
//                             <option value="Fordham University">
//                                 Fordham University
//                             </option>
//                         </select>
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
//                             placeholder="Collegeville"
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
//                         <label for="inputDegree" className="form-label">
//                             Degree
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <select id="inputDegree" className="form-select">
//                             <option selected>Choose...</option>
//                             <option value="Bachelor">Bachelor's</option>
//                             <option value="Master">Master's</option>
//                             <option value="PhD">Ph.D.</option>
//                         </select>
//                     </div>

//                     <div className="col-xl-1">
//                         <label for="inputMajor" className="form-label">
//                             Major
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <select id="inputMajor" className="form-select">
//                             <option selected>Choose...</option>
//                             <option value="Accounting">Accounting</option>
//                             <option value="Advertising">Advertising</option>
//                             <option value="Aerospace Engineering">
//                                 Aerospace Engineering
//                             </option>
//                             <option value="African-American Studies">
//                                 African-American Studies
//                             </option>
//                             <option value="Agricultural Operations Management">
//                                 Agricultural Operations Management
//                             </option>
//                             <option value="Animal Sciences">
//                                 Animal Sciences
//                             </option>
//                             <option value="Anthropology">Anthropology</option>
//                             <option value="Applied Physiology and Kinesiology">
//                                 Applied Physiology and Kinesiology
//                             </option>
//                             <option value="Arabic">Arabic</option>
//                             <option value="Architecture">Architecture</option>
//                             <option value="Art History">Art History</option>
//                             <option value="Art">Art</option>
//                             <option value="Astronomy and Astrophysics">
//                                 Astronomy and Astrophysics
//                             </option>
//                             <option value="Biological Engineering">
//                                 Biological Engineering
//                             </option>
//                             <option value="Biology">Biology</option>
//                             <option value="Biomedical Engineering">
//                                 Biomedical Engineering
//                             </option>
//                             <option value="Botany">Botany</option>
//                             <option value="Business Administration">
//                                 Business Administration
//                             </option>
//                             <option value="Chemical Engineering">
//                                 Chemical Engineering
//                             </option>
//                             <option value="Chemistry">Chemistry</option>
//                             <option value="Chinese">Chinese</option>
//                             <option value="Civil Engineering">
//                                 Civil Engineering
//                             </option>
//                             <option value="Classical Studies">
//                                 Classical Studies
//                             </option>
//                             <option value="Communication Sciences and Disorders">
//                                 Communication Sciences and Disorders
//                             </option>
//                             <option value="Computer Engineering">
//                                 Computer Engineering
//                             </option>
//                             <option value="Computer Science">
//                                 Computer Science
//                             </option>
//                             <option value="Construction Management">
//                                 Construction Management
//                             </option>
//                             <option value="Criminology">Criminology</option>
//                             <option value="Dance">Dance</option>
//                             <option value="Data Science">Data Science</option>
//                             <option value="Dietetics">Dietetics</option>
//                             <option value="Digital Arts and Sciences">
//                                 Digital Arts and Sciences
//                             </option>
//                             <option value="Economics">Economics</option>
//                             <option value="Education Sciences">
//                                 Education Sciences
//                             </option>
//                             <option value="Educational Psychology and Research">
//                                 Educational Psychology and Research
//                             </option>
//                             <option value="Educational Technology">
//                                 Educational Technology
//                             </option>
//                             <option value="Electrical Engineering">
//                                 Electrical Engineering
//                             </option>
//                             <option value="English">English</option>
//                             <option value="Entomology and Nematology">
//                                 Entomology and Nematology
//                             </option>
//                             <option value="Environmental Engineering">
//                                 Environmental Engineering
//                             </option>
//                             <option value="Environmental Science">
//                                 Environmental Science
//                             </option>
//                             <option value="Finance">Finance</option>
//                             <option value="Fire and Emergency Services">
//                                 Fire and Emergency Services
//                             </option>
//                             <option value="Food and Resource Economics">
//                                 Food and Resource Economics
//                             </option>
//                             <option value="Food Science">Food Science</option>
//                             <option value="Foreign Languages and Literatures">
//                                 Foreign Languages and Literatures
//                             </option>
//                             <option value="Forest Resources and Conservation">
//                                 Forest Resources and Conservation
//                             </option>
//                             <option value="French and Francophone Studies">
//                                 French and Francophone Studies
//                             </option>
//                             <option value="General Studies">
//                                 General Studies
//                             </option>
//                             <option value="Geography">Geography</option>
//                             <option value="Geology">Geology</option>
//                             <option value="Geomatics">Geomatics</option>
//                             <option value="German">German</option>
//                             <option value="Graphic Design">
//                                 Graphic Design
//                             </option>
//                             <option value="Health Science">
//                                 Health Science
//                             </option>
//                             <option value="Hispanic and Latin American Languages, Literatures and Linguistics">
//                                 Hispanic and Latin American Languages,
//                                 Literatures and Linguistics
//                             </option>
//                             <option value="History">History</option>
//                             <option value="Horticultural Science">
//                                 Horticultural Science
//                             </option>
//                             <option value="Industrial and Systems Engineering">
//                                 Industrial and Systems Engineering
//                             </option>
//                             <option value="Information Systems">
//                                 Information Systems
//                             </option>
//                             <option value="Interdisciplinary Studies">
//                                 Interdisciplinary Studies
//                             </option>
//                             <option value="Interior Design">
//                                 Interior Design
//                             </option>
//                             <option value="Italian">Italian</option>
//                             <option value="Japanese">Japanese</option>
//                             <option value="Journalism">Journalism</option>
//                             <option value="Linguistics">Linguistics</option>
//                             <option value="Management">Management</option>
//                             <option value="Marine Sciences">
//                                 Marine Sciences
//                             </option>
//                             <option value="Marketing">Marketing</option>
//                             <option value="Materials Science and Engineering">
//                                 Materials Science and Engineering
//                             </option>
//                             <option value="Mathematics">Mathematics</option>
//                             <option value="Mechanical Engineering">
//                                 Mechanical Engineering
//                             </option>
//                             <option value="Microbiology and Cell Science">
//                                 Microbiology and Cell Science
//                             </option>
//                             <option value="Music">Music</option>
//                             <option value="Natural Resource Conservation">
//                                 Natural Resource Conservation
//                             </option>
//                             <option value="Nuclear and Radiological Sciences">
//                                 Nuclear and Radiological Sciences
//                             </option>
//                             <option value="Nuclear Engineering">
//                                 Nuclear Engineering
//                             </option>
//                             <option value="Nursing">Nursing</option>
//                             <option value="Nutritional Sciences">
//                                 Nutritional Sciences
//                             </option>
//                             <option value="Pharmacy">Pharmacy</option>
//                             <option value="Philosophy">Philosophy</option>
//                             <option value="Physics">Physics</option>
//                             <option value="Political Science">
//                                 Political Science
//                             </option>
//                             <option value="Portuguese">Portuguese</option>
//                             <option value="Psychology">Psychology</option>
//                             <option value="Public Health">Public Health</option>
//                             <option value="Religion">Religion</option>
//                             <option value="Russian">Russian</option>
//                             <option value="Sociology">Sociology</option>
//                             <option value="Soil and Water Sciences">
//                                 Soil and Water Sciences
//                             </option>
//                             <option value="Spanish">Spanish</option>
//                             <option value="Sport Management">
//                                 Sport Management
//                             </option>
//                             <option value="Statistics">Statistics</option>
//                             <option value="Sustainability Studies">
//                                 Sustainability Studies
//                             </option>
//                             <option value="Theatre">Theatre</option>
//                             <option value="Tourism, Hospitality and Event Management">
//                                 Tourism, Hospitality and Event Management
//                             </option>
//                             <option value="Wildlife Ecology and Conservation">
//                                 Wildlife Ecology and Conservation
//                             </option>
//                             <option value="Women's Studies">
//                                 Women's Studies
//                             </option>
//                             <option value="Zoology">Zoology</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputCGPA" className="form-label">
//                             CGPA
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputCGPA"
//                             placeholder="3.00"
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label for="inputCGPAScale" className="form-label">
//                             CGPA Scale
//                         </label>
//                     </div>
//                     <div className="col-xl-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputCGPAScale"
//                             placeholder="4"
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputGRE" className="form-label">
//                             GRE attempted?
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <div className="form-check form-check-inline">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="inlineRadioGREYes"
//                                 value="option1"
//                                 onClick={this.hasTakenGRE}
//                             />
//                             <label
//                                 className="form-check-label"
//                                 for="inlineRadioGREYes"
//                             >
//                                 Yes
//                             </label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="inlineRadioGRENo"
//                                 value="option2"
//                                 onClick={this.hasNotTakenGRE}
//                             />
//                             <label
//                                 className="form-check-label"
//                                 for="inlineRadioGRENo"
//                             >
//                                 No
//                             </label>
//                         </div>
//                     </div>

//                     <div className="col-xl-1">
//                         <label for="inputTOEFL" className="form-label">
//                             TOEFL attempted?
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <div className="form-check form-check-inline">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="inlineRadioTOEFLYes"
//                                 value="option1"
//                                 onClick={this.hasTakenTOEFL}
//                             />
//                             <label
//                                 className="form-check-label"
//                                 for="inlineRadioTOEFLYes"
//                             >
//                                 Yes
//                             </label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="inlineRadioTOEFLNo"
//                                 value="option2"
//                                 onClick={this.hasNotTakenTOEFL}
//                             />
//                             <label
//                                 className="form-check-label"
//                                 for="inlineRadioTOEFLNo"
//                             >
//                                 No
//                             </label>
//                         </div>
//                     </div>

//                     <div className="col-xl-1">
//                         <label for="inputIELTS" className="form-label">
//                             IELTS attempted?
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <div className="form-check form-check-inline">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="inlineRadioIELTSYes"
//                                 value="option1"
//                                 onClick={this.hasTakenIELTS}
//                             />
//                             <label
//                                 className="form-check-label"
//                                 for="inlineRadioIELTSYes"
//                             >
//                                 Yes
//                             </label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="inlineRadioIELTSNo"
//                                 value="option2"
//                                 onClick={this.hasNotTakenIELTS}
//                             />
//                             <label
//                                 className="form-check-label"
//                                 for="inlineRadioIELTSNo"
//                             >
//                                 No
//                             </label>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputGRETotalScore" className="form-label">
//                             GRE Total Score
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputGRETotalScore"
//                             placeholder="340"
//                             disabled={this.state.has_taken_gre}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputTOEFLTotalScore"
//                             className="form-label"
//                         >
//                             TOEFL Total Score
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputTOEFLTotalScore"
//                             placeholder="120"
//                             disabled={this.state.has_taken_toefl}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputIELTSOverallBandScore"
//                             className="form-label"
//                         >
//                             Overall Band Score
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputIELTSOverallBandScore"
//                             placeholder="9"
//                             disabled={this.state.has_taken_ielts}
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputVerbalScore" className="form-label">
//                             Verbal
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputVerbalScore"
//                             placeholder="170"
//                             disabled={this.state.has_taken_gre}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputTOEFLReadingScore"
//                             className="form-label"
//                         >
//                             Reading
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputTOEFLReadingScore"
//                             placeholder="30"
//                             disabled={this.state.has_taken_toefl}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputIELTSListeningScore"
//                             className="form-label"
//                         >
//                             Listening
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputIELTSListeningScore"
//                             placeholder="9"
//                             disabled={this.state.has_taken_ielts}
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputQuantScore" className="form-label">
//                             Quant
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputQuantScore"
//                             placeholder="170"
//                             disabled={this.state.has_taken_gre}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputTOEFLListeningScore"
//                             className="form-label"
//                         >
//                             Listening
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputTOEFLListeningScore"
//                             placeholder="30"
//                             disabled={this.state.has_taken_toefl}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputIELTSReadingScore"
//                             className="form-label"
//                         >
//                             Reading
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputIELTSReadingScore"
//                             placeholder="9"
//                             disabled={this.state.has_taken_ielts}
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1">
//                         <label for="inputAWMScore" className="form-label">
//                             AWM
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputAWMScore"
//                             placeholder="6"
//                             disabled={this.state.has_taken_gre}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputTOEFLSpeakingScore"
//                             className="form-label"
//                         >
//                             Speaking
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputTOEFLSpeakingScore"
//                             placeholder="30"
//                             disabled={this.state.has_taken_toefl}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputIELTSWritingScore"
//                             className="form-label"
//                         >
//                             Writing
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputIELTSWritingScore"
//                             placeholder="9"
//                             disabled={this.state.has_taken_ielts}
//                         />
//                     </div>
//                 </div>

//                 <div className="row g-3 align-items-center justify-content-center">
//                     <div className="col-xl-1 offset-xl-2">
//                         <label
//                             for="inputTOEFLWritingScore"
//                             className="form-label"
//                         >
//                             Writing
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputTOEFLWritingScore"
//                             placeholder="30"
//                             disabled={this.state.has_taken_toefl}
//                         />
//                     </div>

//                     <div className="col-xl-1">
//                         <label
//                             for="inputIELTSSpeakingScore"
//                             className="form-label"
//                         >
//                             Speaking
//                         </label>
//                     </div>
//                     <div className="col-xl-1">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="inputIELTSSpeakingScore"
//                             placeholder="9"
//                             disabled={this.state.has_taken_ielts}
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

// export default StudentDetails;

import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class StudentDetails extends Component {
    state = {
        has_taken_gre: true,
        has_taken_toefl: true,
        has_taken_ielts: true,
    };

    hasTakenGRE = () => {
        this.setState({ has_taken_gre: false });
    };

    hasNotTakenGRE = () => {
        this.setState({ has_taken_gre: true });
    };

    hasTakenTOEFL = () => {
        this.setState({ has_taken_toefl: false });
    };

    hasNotTakenTOEFL = () => {
        this.setState({ has_taken_toefl: true });
    };

    hasTakenIELTS = () => {
        this.setState({ has_taken_ielts: false });
    };

    hasNotTakenIELTS = () => {
        this.setState({ has_taken_ielts: true });
    };

    render() {
        return (
            <Form>
                <Form.Group className="row g-3 mb-3 my-auto align-items-center justify-content-center">
                    <Form.Group className="col-xl-2 offset-xl-1">
                        <h4>Personal Details</h4>
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group className="col-xl-1" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Control
                            type="text"
                            placeholder="John"
                            aria-label="Readonly input example"
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group className="col-xl-1" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Control
                            type="text"
                            placeholder="Doe"
                            aria-label="Readonly input example"
                            readOnly
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group
                    className="row g-3 mb-3 align-items-center justify-content-center"
                    controlId="formBasicEmail"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Label>Email Address</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="email"
                            placeholder="john.doe@gmail.com"
                            aria-label="Readonly input example"
                            readOnly
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group
                    className="row g-3 mb-3 align-items-center justify-content-center"
                    controlId="formAddress1"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Label>Address Line 1</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="1234 Main Street"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group
                    className="row g-3 mb-3 align-items-center justify-content-center"
                    controlId="formAddress2"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Label>Address Line 2</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Apartment, Studio, or Floor"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group className="col-xl-1" controlId="formCity">
                        <Form.Label>City</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Control type="text" placeholder="Cityville" />
                    </Form.Group>

                    <Form.Group className="col-xl-1" controlId="formState">
                        <Form.Label>State</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Select>
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
                        </Form.Select>
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group className="col-xl-1" controlId="formZipCode">
                        <Form.Label>Zip Code</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Control type="number" placeholder="99999" />
                    </Form.Group>

                    <Form.Group className="col-xl-1" controlId="formCountry">
                        <Form.Label>Country</Form.Label>
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

                <Form.Group className="row g-3 mb-3 my-auto align-items-center justify-content-center">
                    <Form.Group className="col-xl-2 offset-xl-1">
                        <h4>Educational Details</h4>
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formInstituteName"
                    >
                        <Form.Label>Institute name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Select>
                            <option selected>Choose...</option>
                            <option value="Massachusetts Institute of Technology">
                                Massachusetts Institute of Technology
                            </option>
                            <option value="Harvard University">
                                Harvard University
                            </option>
                            <option value="Stanford University">
                                Stanford University
                            </option>
                            <option value="Cornell University">
                                Cornell University
                            </option>
                            <option value="University of California, Berkeley">
                                University of California, Berkeley
                            </option>
                            <option value="Columbia University in the City of New York">
                                Columbia University in the City of New York
                            </option>
                            <option value="University of Michigan">
                                University of Michigan
                            </option>
                            <option value="University of Washington">
                                University of Washington
                            </option>
                            <option value="University of Pennsylvania">
                                University of Pennsylvania
                            </option>
                            <option value="University of Minnesota-Twin Cities">
                                University of Minnesota-Twin Cities
                            </option>
                            <option value="Yale University">
                                Yale University
                            </option>
                            <option value="University of California, Los Angeles">
                                University of California, Los Angeles
                            </option>
                            <option value="Johns Hopkins University">
                                Johns Hopkins University
                            </option>
                            <option value="The University of Texas at Austin">
                                The University of Texas at Austin
                            </option>
                            <option value="New York University">
                                New York University
                            </option>
                            <option value="University of Wisconsin-Madison">
                                University of Wisconsin-Madison
                            </option>
                            <option value="Purdue University">
                                Purdue University
                            </option>
                            <option value="Penn State University">
                                Penn State University
                            </option>
                            <option value="Princeton University">
                                Princeton University
                            </option>
                            <option value="Carnegie Mellon University">
                                Carnegie Mellon University
                            </option>
                            <option value="University of Southern California">
                                University of Southern California
                            </option>
                            <option value="University of Chicago">
                                University of Chicago
                            </option>
                            <option value="Arizona State University">
                                Arizona State University
                            </option>
                            <option value="University of Florida">
                                University of Florida
                            </option>
                            <option value="Michigan State University">
                                Michigan State University
                            </option>
                            <option value="University of California, San Diego">
                                University of California, San Diego
                            </option>
                            <option value="University of Illinois at Urbana-Champaign">
                                University of Illinois at Urbana-Champaign
                            </option>
                            <option value="University of North Carolina at Chapel Hill">
                                University of North Carolina at Chapel Hill
                            </option>
                            <option value="Duke University">
                                Duke University
                            </option>
                            <option value="Northwestern University">
                                Northwestern University
                            </option>
                            <option value="University of California, Davis">
                                University of California, Davis
                            </option>
                            <option value="Boston University">
                                Boston University
                            </option>
                            <option value="University of Maryland">
                                University of Maryland
                            </option>
                            <option value="Rutgers, The State University of New Jersey">
                                Rutgers, The State University of New Jersey
                            </option>
                            <option value="University of California, Irvine">
                                University of California, Irvine
                            </option>
                            <option value="The University of Arizona">
                                The University of Arizona
                            </option>
                            <option value="Texas A&M University">
                                Texas A&M University
                            </option>
                            <option value="The University of Utah">
                                The University of Utah
                            </option>
                            <option value="University of Virginia">
                                University of Virginia
                            </option>
                            <option value="The Ohio State University">
                                The Ohio State University
                            </option>
                            <option value="University of Colorado Boulder">
                                University of Colorado Boulder
                            </option>
                            <option value="North Carolina State University">
                                North Carolina State University
                            </option>
                            <option value="Georgia Institute of Technology">
                                Georgia Institute of Technology
                            </option>
                            <option value="University of Pittsburgh">
                                University of Pittsburgh
                            </option>
                            <option value="Indiana University Bloomington">
                                Indiana University Bloomington
                            </option>
                            <option value="California Institute of Technology">
                                California Institute of Technology
                            </option>
                            <option value="Washington University in St. Louis">
                                Washington University in St. Louis
                            </option>
                            <option value="University of California, Santa Barbara">
                                University of California, Santa Barbara
                            </option>
                            <option value="Georgetown University">
                                Georgetown University
                            </option>
                            <option value="Tufts University">
                                Tufts University
                            </option>
                            <option value="University of Nebraska-Lincoln">
                                University of Nebraska-Lincoln
                            </option>
                            <option value="Virginia Polytechnic Institute and State University">
                                Virginia Polytechnic Institute and State
                                University
                            </option>
                            <option value="Florida State University">
                                Florida State University
                            </option>
                            <option value="University of South Florida">
                                University of South Florida
                            </option>
                            <option value="Oregon State University">
                                Oregon State University
                            </option>
                            <option value="University of Massachusetts Amherst">
                                University of Massachusetts Amherst
                            </option>
                            <option value="University of Georgia">
                                University of Georgia
                            </option>
                            <option value="Brown University">
                                Brown University
                            </option>
                            <option value="Iowa State University">
                                Iowa State University
                            </option>
                            <option value="Brigham Young University">
                                Brigham Young University
                            </option>
                            <option value="University of Rochester">
                                University of Rochester
                            </option>
                            <option value="University of Iowa">
                                University of Iowa
                            </option>
                            <option value="University of California, Riverside">
                                University of California, Riverside
                            </option>
                            <option value="Washington State University">
                                Washington State University
                            </option>
                            <option value="University of Delaware">
                                University of Delaware
                            </option>
                            <option value="Georgia State University">
                                Georgia State University
                            </option>
                            <option value="William Marsh Rice University">
                                William Marsh Rice University
                            </option>
                            <option value="University at Buffalo, State University of New York">
                                University at Buffalo, State University of New
                                York
                            </option>
                            <option value="Dartmouth College">
                                Dartmouth College
                            </option>
                            <option value="George Washington University">
                                George Washington University
                            </option>
                            <option value="Vanderbilt University">
                                Vanderbilt University
                            </option>
                            <option value="Syracuse University">
                                Syracuse University
                            </option>
                            <option value="Colorado State University">
                                Colorado State University
                            </option>
                            <option value="University of Houston">
                                University of Houston
                            </option>
                            <option value="George Mason University">
                                George Mason University
                            </option>
                            <option value="University of Oregon">
                                University of Oregon
                            </option>
                            <option value="University of California, Santa Cruz">
                                University of California, Santa Cruz
                            </option>
                            <option value="University of Illinois at Chicago">
                                University of Illinois at Chicago
                            </option>
                            <option value="University of California, San Francisco">
                                University of California, San Francisco
                            </option>
                            <option value="University of Notre Dame">
                                University of Notre Dame
                            </option>
                            <option value="University of Connecticut">
                                University of Connecticut
                            </option>
                            <option value="Emory University">
                                Emory University
                            </option>
                            <option value="Temple University">
                                Temple University
                            </option>
                            <option value="Northeastern University">
                                Northeastern University
                            </option>
                            <option value="University of Missouri">
                                University of Missouri
                            </option>
                            <option value="University of Central Florida">
                                University of Central Florida
                            </option>
                            <option value="University of Kansas">
                                University of Kansas
                            </option>
                            <option value="University of Kentucky">
                                University of Kentucky
                            </option>
                            <option value="Florida International University">
                                Florida International University
                            </option>
                            <option value="University of New Mexico">
                                University of New Mexico
                            </option>
                            <option value="Drexel University">
                                Drexel University
                            </option>
                            <option value="The University of Tennessee, Knoxville">
                                The University of Tennessee, Knoxville
                            </option>
                            <option value="Rochester Institute of Technology">
                                Rochester Institute of Technology
                            </option>
                            <option value="University of Miami">
                                University of Miami
                            </option>
                            <option value="Louisiana State University">
                                Louisiana State University
                            </option>
                            <option value="The University of Alabama">
                                The University of Alabama
                            </option>
                            <option value="San Diego State University">
                                San Diego State University
                            </option>
                            <option value="American University">
                                American University
                            </option>
                            <option value="Boston College">
                                Boston College
                            </option>
                            <option value="Fordham University">
                                Fordham University
                            </option>
                        </Form.Select>
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
                        <Form.Control type="text" placeholder="UniverCity" />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formInstituteState"
                    >
                        <Form.Label>Institute State</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Select>
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
                        </Form.Select>
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group className="col-xl-1" controlId="formDegree">
                        <Form.Label>Degree</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Select>
                            <option selected>Choose...</option>
                            <option value="Bachelor">Bachelor's</option>
                            <option value="Master">Master's</option>
                            <option value="PhD">Ph.D.</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-xl-1" controlId="formMajor">
                        <Form.Label>Major</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Select>
                            <option selected>Choose...</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Advertising">Advertising</option>
                            <option value="Aerospace Engineering">
                                Aerospace Engineering
                            </option>
                            <option value="African-American Studies">
                                African-American Studies
                            </option>
                            <option value="Agricultural Operations Management">
                                Agricultural Operations Management
                            </option>
                            <option value="Animal Sciences">
                                Animal Sciences
                            </option>
                            <option value="Anthropology">Anthropology</option>
                            <option value="Applied Physiology and Kinesiology">
                                Applied Physiology and Kinesiology
                            </option>
                            <option value="Arabic">Arabic</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Art History">Art History</option>
                            <option value="Art">Art</option>
                            <option value="Astronomy and Astrophysics">
                                Astronomy and Astrophysics
                            </option>
                            <option value="Biological Engineering">
                                Biological Engineering
                            </option>
                            <option value="Biology">Biology</option>
                            <option value="Biomedical Engineering">
                                Biomedical Engineering
                            </option>
                            <option value="Botany">Botany</option>
                            <option value="Business Administration">
                                Business Administration
                            </option>
                            <option value="Chemical Engineering">
                                Chemical Engineering
                            </option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Civil Engineering">
                                Civil Engineering
                            </option>
                            <option value="Classical Studies">
                                Classical Studies
                            </option>
                            <option value="Communication Sciences and Disorders">
                                Communication Sciences and Disorders
                            </option>
                            <option value="Computer Engineering">
                                Computer Engineering
                            </option>
                            <option value="Computer Science">
                                Computer Science
                            </option>
                            <option value="Construction Management">
                                Construction Management
                            </option>
                            <option value="Criminology">Criminology</option>
                            <option value="Dance">Dance</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Dietetics">Dietetics</option>
                            <option value="Digital Arts and Sciences">
                                Digital Arts and Sciences
                            </option>
                            <option value="Economics">Economics</option>
                            <option value="Education Sciences">
                                Education Sciences
                            </option>
                            <option value="Educational Psychology and Research">
                                Educational Psychology and Research
                            </option>
                            <option value="Educational Technology">
                                Educational Technology
                            </option>
                            <option value="Electrical Engineering">
                                Electrical Engineering
                            </option>
                            <option value="English">English</option>
                            <option value="Entomology and Nematology">
                                Entomology and Nematology
                            </option>
                            <option value="Environmental Engineering">
                                Environmental Engineering
                            </option>
                            <option value="Environmental Science">
                                Environmental Science
                            </option>
                            <option value="Finance">Finance</option>
                            <option value="Fire and Emergency Services">
                                Fire and Emergency Services
                            </option>
                            <option value="Food and Resource Economics">
                                Food and Resource Economics
                            </option>
                            <option value="Food Science">Food Science</option>
                            <option value="Foreign Languages and Literatures">
                                Foreign Languages and Literatures
                            </option>
                            <option value="Forest Resources and Conservation">
                                Forest Resources and Conservation
                            </option>
                            <option value="French and Francophone Studies">
                                French and Francophone Studies
                            </option>
                            <option value="General Studies">
                                General Studies
                            </option>
                            <option value="Geography">Geography</option>
                            <option value="Geology">Geology</option>
                            <option value="Geomatics">Geomatics</option>
                            <option value="German">German</option>
                            <option value="Graphic Design">
                                Graphic Design
                            </option>
                            <option value="Health Science">
                                Health Science
                            </option>
                            <option value="Hispanic and Latin American Languages, Literatures and Linguistics">
                                Hispanic and Latin American Languages,
                                Literatures and Linguistics
                            </option>
                            <option value="History">History</option>
                            <option value="Horticultural Science">
                                Horticultural Science
                            </option>
                            <option value="Industrial and Systems Engineering">
                                Industrial and Systems Engineering
                            </option>
                            <option value="Information Systems">
                                Information Systems
                            </option>
                            <option value="Interdisciplinary Studies">
                                Interdisciplinary Studies
                            </option>
                            <option value="Interior Design">
                                Interior Design
                            </option>
                            <option value="Italian">Italian</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Journalism">Journalism</option>
                            <option value="Linguistics">Linguistics</option>
                            <option value="Management">Management</option>
                            <option value="Marine Sciences">
                                Marine Sciences
                            </option>
                            <option value="Marketing">Marketing</option>
                            <option value="Materials Science and Engineering">
                                Materials Science and Engineering
                            </option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Mechanical Engineering">
                                Mechanical Engineering
                            </option>
                            <option value="Microbiology and Cell Science">
                                Microbiology and Cell Science
                            </option>
                            <option value="Music">Music</option>
                            <option value="Natural Resource Conservation">
                                Natural Resource Conservation
                            </option>
                            <option value="Nuclear and Radiological Sciences">
                                Nuclear and Radiological Sciences
                            </option>
                            <option value="Nuclear Engineering">
                                Nuclear Engineering
                            </option>
                            <option value="Nursing">Nursing</option>
                            <option value="Nutritional Sciences">
                                Nutritional Sciences
                            </option>
                            <option value="Pharmacy">Pharmacy</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Physics">Physics</option>
                            <option value="Political Science">
                                Political Science
                            </option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Public Health">Public Health</option>
                            <option value="Religion">Religion</option>
                            <option value="Russian">Russian</option>
                            <option value="Sociology">Sociology</option>
                            <option value="Soil and Water Sciences">
                                Soil and Water Sciences
                            </option>
                            <option value="Spanish">Spanish</option>
                            <option value="Sport Management">
                                Sport Management
                            </option>
                            <option value="Statistics">Statistics</option>
                            <option value="Sustainability Studies">
                                Sustainability Studies
                            </option>
                            <option value="Theatre">Theatre</option>
                            <option value="Tourism, Hospitality and Event Management">
                                Tourism, Hospitality and Event Management
                            </option>
                            <option value="Wildlife Ecology and Conservation">
                                Wildlife Ecology and Conservation
                            </option>
                            <option value="Women's Studies">
                                Women's Studies
                            </option>
                            <option value="Zoology">Zoology</option>
                        </Form.Select>
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group className="col-xl-1" controlId="formCGPA">
                        <Form.Label>CGPA</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Control type="text" placeholder="3.00" />
                    </Form.Group>

                    <Form.Group className="col-xl-1" controlId="formCGPAScale">
                        <Form.Label>CGPA Scale</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Select>
                            <option selected>Choose...</option>
                            <option value="100">100</option>
                            <option value="20">20</option>
                            <option value="10">10</option>
                            <option value="4">4</option>
                        </Form.Select>
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formGREAttempted"
                    >
                        <Form.Label>GRE Attempted?</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Check
                            inline
                            label="Yes"
                            type="radio"
                            name="gre"
                            id={`inline-radio-1`}
                            onClick={this.hasTakenGRE}
                        />
                        <Form.Check
                            inline
                            label="No"
                            type="radio"
                            name="gre"
                            id={`inline-radio-2`}
                            onClick={this.hasNotTakenGRE}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formTOEFLAttempted"
                    >
                        <Form.Label>TOEFL Attempted?</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Check
                            inline
                            label="Yes"
                            type="radio"
                            name="toefl"
                            id={`inline-radio-3`}
                            onClick={this.hasTakenTOEFL}
                        />
                        <Form.Check
                            inline
                            label="No"
                            type="radio"
                            name="toefl"
                            id={`inline-radio-4`}
                            onClick={this.hasNotTakenTOEFL}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formIELTSAttempted"
                    >
                        <Form.Label>IELTS Attempted?</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Check
                            inline
                            label="Yes"
                            type="radio"
                            name="ielts"
                            id={`inline-radio-5`}
                            onClick={this.hasTakenIELTS}
                        />
                        <Form.Check
                            inline
                            label="No"
                            type="radio"
                            name="ielts"
                            id={`inline-radio-6`}
                            onClick={this.hasNotTakenIELTS}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formTotalGREScore"
                    >
                        <Form.Label>Total GRE Score</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="340"
                            disabled={this.state.has_taken_gre}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formTotalTOEFLScore"
                    >
                        <Form.Label>Total TOEFL Score</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="120"
                            disabled={this.state.has_taken_toefl}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formOverallBandScore"
                    >
                        <Form.Label>Overall Band Score</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="9"
                            disabled={this.state.has_taken_ielts}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formGREVerbalScore"
                    >
                        <Form.Label>Verbal</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="170"
                            disabled={this.state.has_taken_gre}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formTOEFLReadingScore"
                    >
                        <Form.Label>Reading</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="30"
                            disabled={this.state.has_taken_toefl}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formIELTSListeningScore"
                    >
                        <Form.Label>Listening</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="9"
                            disabled={this.state.has_taken_ielts}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formGREQuantScore"
                    >
                        <Form.Label>Quant</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="170"
                            disabled={this.state.has_taken_gre}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formTOEFLListeningScore"
                    >
                        <Form.Label>Listening</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="30"
                            disabled={this.state.has_taken_toefl}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formIELTSReadingScore"
                    >
                        <Form.Label>Reading</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="9"
                            disabled={this.state.has_taken_ielts}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formGREAWMScore"
                    >
                        <Form.Label>AWM</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="6"
                            disabled={this.state.has_taken_gre}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formTOEFLSpeakingScore"
                    >
                        <Form.Label>Speaking</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="30"
                            disabled={this.state.has_taken_toefl}
                        />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formIELTSWritingScore"
                    >
                        <Form.Label>Writing</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="9"
                            disabled={this.state.has_taken_ielts}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1 offset-xl-2"
                        controlId="formTOEFLWritingScore"
                    >
                        <Form.Label>Writing</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-1">
                        <Form.Control
                            type="number"
                            placeholder="30"
                            disabled={this.state.has_taken_toefl}
                        />
                    </Form.Group>

                    <Form.Group className="col-xl-1">
                        <Form.Label>Speaking</Form.Label>
                    </Form.Group>
                    <Form.Group
                        className="col-xl-1"
                        controlId="formIELTSSpeakingScore"
                    >
                        <Form.Control
                            type="number"
                            placeholder="9"
                            disabled={this.state.has_taken_ielts}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="text-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>{" "}
                </Form.Group>
            </Form>
        );
    }
}

export default StudentDetails;
