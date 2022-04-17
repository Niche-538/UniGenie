import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import StickyBox from "react-sticky-box";
const CS = () => {
  return (
    <div>
      <div
        className="row mx-5 my-5 px-2 align-items-center text-start justify-content-center rounded border"
        style={{
          backgroundImage: `url("https://www.usnews.com/dims4/USNEWS/0be1944/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F07%2F00354c85a0a99b4abfd67d48bd3e4c%2Fjobs-job-photo-101.jpg")`,
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h5>Masters (MS) in Mechanical Engineering Abroad</h5>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <StickyBox className="col-3 mx-5 my-4 align-items-center text-start justify-content-center">
          <div className="px-3" style={{ backgroundColor: "" }}>
            <p>
              <a href="#overview">Overview</a>
            </p>
            <p>
              <a href="#Course Structure">Course Structure</a>
            </p>
            <p>
              <a href="#Course Subjects">Course Subjects</a>
            </p>
            <p>
              <a href="#Top Specializations">Top Specializations</a>
            </p>
            <p>
              <a href="#Core Skills">Core Skills</a>
            </p>
            <p>
              <a href="#Requirements">Requirements</a>
            </p>
            <p>
              <a href="#Top Scholarships">Top Scholarships</a>
            </p>
            <p>
              <a href="#Work Opportunities">Work Opportunities</a>
            </p>
          </div>
        </StickyBox>

        <div className="col-7 my-4">
          <div
            id="overview"
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-right"
            style={{
              backgroundColor: "white",
            }}
          >
            <h4 style={{}}>
              <strong>Overview</strong>
            </h4>
            <p>
              Mechanical Engineering is a branch of engineering concerned with
              the manufacturing, designing of mechanisms as well operations of
              automibiles. It is an introduction to vehicle engineering which
              deals with motorcycles, cars, buses, trucks etc. It includes
              elements of mechanical, electronic, software and safety.
            </p>
            <p>
            Mechanical engineering is research-intensive and involves
              application of mathematical models. Automotive engineers are
              involved in the design, manufacture, distribution and after-sales
              care of automobiles which includes cars, motorbikes and other
              vehicles. Safety engineering and quality management are other
              aspects of the same branch. It also includes manufacturing of
              vehicles.
            </p>
          </div>
          <div
            id="Course Structure"
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Course Structure</strong>
            </h4>
            <p>
              The precise structure and content of an automotive engineering
              program will differ depending on the university you apply to. In
              some programs you will spend the first one or two years learning
              the foundations of mechanical engineering, whereas others will
              focus on automotive topics from the start. Modules you can expect
              to study include:
            </p>
            <p>
              <ul>
                <li>Thermodynamics</li>
                <li>Engineering mathematics</li>
                <li>Engineering materials</li>
                <li>Engineering mechanics</li>
                <li>Computing and programming for engineers</li>
                <li>Vehicle systems and design</li>
                <li>Dynamics and vibration</li>
                <li>Ground vehicle aerodynamics</li>
                <li>Electrical drive systems</li>
              </ul>
            </p>
          </div>
          <div
            id="Course Subjects"
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Course Subjects</strong>
            </h4>
            <p>
              <ul>
                <li>Manufacturing Methods</li>
                <li>Engineering Thermodynamics</li>
                <li>Heat Transfer and Combustion</li>
                <li>Automotive Petrol Engines</li>
                <li>Engineering Analysis and Numerical Methods</li>
                <li>Automotive Design Engines</li>
                <li>Material Science and Technology</li>
                <li>Power Units and Transmission</li>
                <li>Automotive Chassis</li>
                <li>Vehicle Body Engineering</li>
                <li>Automotive Pollution and Control</li>
              </ul>
            </p>
          </div>
          <div
            id="Top Specializations"
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Top Specializations</strong>
            </h4>
            <h4 style={{}}>
              <strong>
                MS in Mech engineering courses offer various specializations.
              </strong>
            </h4>
            <h4 style={{}}>
              <strong>Some of these are listed below:</strong>
            </h4>
            <p>
              <ul>
                <li>Automotive Mechatronics and Intelligent Vehicles</li>
                <li>Transportation and Mechanical Design</li>
                <li>Automotive Engineering</li>
                <li>Advanced Automotive Electronic Engineering</li>
              </ul>
            </p>
          </div>
          <div
            id="Core Skills"
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Core Skills</strong>
            </h4>
            <h4 style={{}}>
              <strong>Key skills for mechanical engineers :</strong>
            </h4>
            <p>
              <ul>
                <li>An avid interest in motor vehicle engineering.</li>
                <li>
                  Solid analytical skills and an creative approach to problem
                  solving.
                </li>
                <li>
                  A thorough understanding of technical concepts and federal
                  safety standards and laws.
                </li>
                <li>Excellent oral and written communication skills.</li>
                <li>The ability to prioritize and plan effectively.</li>
              </ul>
            </p>
          </div>
          <div
            id="Requirements"
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Requirements</strong>
            </h4>

            <p>
              The Masters of Mechanical Engineering program requires you to have
              a previous understanding and knowledge of specific concepts.
              Listed below are some of the basic requirements:
            </p>
            <p>
              Most of the universities in the USA, Canada require you to give
              the GRE. Few universities from Germany require GRE scores.
              However, GRE is not required for admission to Australian
              universities. IELTS or TOEFL is compulsory for acquiring student
              visa and as a proof of English proficiency. A Bachelor’s degree in
              Mechanical Engineering or any other related discipline is also
              required for MS in Mechanical Engineering.
            </p>
          </div>
          <div
            id="Top Scholarships"
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Top Scholarships</strong>
            </h4>
            <h4 style={{}}>
              <strong>
                Masters Scholarships, Fellowships and grants in Mechanical
                Engineering
              </strong>
            </h4>

            <ul>
              <li>Orange Knowledge Programme Netherlands</li>
              <li>
                Japan Africa Dream Scholarship (JADS) Program AfDB 2021-22
              </li>
              <li>Fulbright Foreign Student Scholarship Program USA</li>
              <li>
                New Zealand Aid Programme 2021-2022 Scholarships for
                international students
              </li>
              <li>Australia Awards Scholarships for International Students</li>
              <li>Global Korea Scholarship - Funded by Korean Government</li>
              <li>Friedrich Ebert Stiftung Scholarships</li>
              <li>ANU Chancellor’s International Scholarship</li>
              <li>British Chevening Scholarships 2021</li>
              <li>
                Japanese Government (MEXT) Scholarships for Young Leaders
                Program
              </li>
              <li>Heinrich Boll Foundation Scholarships</li>
              <li>
                The Frank Wallace Scholarships at University of Bath for Chinese
                Sudents.
              </li>
            </ul>
          </div>
          <div
            id="Work Opportunities"
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Work Opportunities</strong>
            </h4>

            <p>
              As an automotive engineering graduate you will be well placed for
              a role in design, manufacturing or testing in the automotive
              industry. Popular careers with an automotive engineering degree
              include:
            </p>
            <h4 style={{}}>
              <strong>
                Here’s some of the most common computer science degree jobs:
              </strong>
            </h4>
            <ul>
              <li>Automotive engineer</li>
              <li>Design engineer</li>
              <li>Product designer</li>
              <li>Nuclear engineer</li>
              <li>Mechanical engineer</li>
              <li>Research engineer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CS;
