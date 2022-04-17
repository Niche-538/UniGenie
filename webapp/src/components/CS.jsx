import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import StickyBox from "react-sticky-box";
const CS = () => {
  return (
    <div>
      <div
        className="row mx-5 my-5 px-2 align-items-center text-start justify-content-center rounded border container"
        style={{
          backgroundImage: `url("https://www.mercy.edu/sites/default/files/2020-07/iStock-1182604339.jpg")`,
          height: "300px",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h5>Masters (MS) in Computer Science (CS) Abroad</h5>

        {/* <div className="row mx-5 my-5 px-2 align-items-center text-center justify-content-center rounded border"> */}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <StickyBox className="col-3 mx-5 my-4 align-items-center text-start justify-content-center">
          {/* <div
            className="col-3 my-4 me-4 rounded border"
            style={{
              backgroundColor: "white",
            }}
          > */}

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
              <a href="#Top Scholarships">Top Scholarships</a>
            </p>
            <p>
              <a href="#Work Opportunities">Work Opportunities</a>
            </p>
          </div>

          {/* </div> */}
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
              Computer Science is the study of theory, engineering,
              experimentation that form the basis for the design and
              effectiveness of computers. It involves the study of algorithms
              and their application in the real world. Computer Science can be
              defined as the study of automating algorithmic processes that
              scale. It is the scientific and practical approach to computation
              and its applications and the systematic study of the feasibility,
              structure, expression, and mechanization of the methodical
              procedures (or algorithms) that is the basis of the acquisition,
              representation, processing, storage, communication of, and access
              to, information. The most important aspect of a Masters (MS) in
              Computer Science is problem-solving. Students study the design,
              development and analysis of software and hardware used to solve
              problems in a variety of business, scientific and social contexts.
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
              This means the program curriculum can vary greatly between
              countries and universities, so it’s important to take a close look
              at the structure and scope before you apply. Here are some of the
              topics you can expect to cover:
            </p>
            <p>
              <ul>
                <li>Computing fundamentals</li>
                <li>Programming languages</li>
                <li>Algorithms</li>
                <li>Continuous mathematics</li>
                <li>Machine Learning</li>
                <li>Computer architecture</li>
                <li>Artificial Intelligence</li>
                <li>Software engineering</li>
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
              Computer Science students are required to contribute meaningfully
              on the field in either industry or research jobs. In either they
              must learn modern computing skills. Various subjects deal
              specifically with individual topics Some of the courses covered in
              a MS in Computer Science include:
            </p>
            <p>
              <ul>
                <li>Discrete Mathematics for Computer Science</li>
                <li>Data Structures and Algorithms</li>
                <li>Compiler Design</li>
                <li>Database Management</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Software Engineering</li>
                <li>Paradigms of Programming</li>
                <li>Computer Architecture</li>
                <li>Computer Networks</li>
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
                MS in Computer Science courses offer various specializations.
              </strong>
            </h4>
            <h4 style={{}}>
              <strong>Some of these are listed below:</strong>
            </h4>
            <p>
              <ul>
                <li>Big Data, Cloud Computing</li>
                <li>Computer Architecture</li>
                <li>Computer Networks</li>
                <li>Cyber-Physical Systems, Internet of Things</li>
                <li>Cybersecurity, Privacy, and Trust</li>
                <li>Embedded Systems, Real-Time Systems</li>
                <li>
                  High-Performance Computing, Parallel/Distributed Computing
                </li>
                <li>Intelligent Systems, Machine Learning, Robotics</li>
                <li>Mobile Computing, Social Networks</li>
                <li>Reconfigurable Computing</li>
                <li>Computational Geometry</li>
                <li>Data Structures</li>
                <li>Discrete Mathematics</li>
              </ul>
            </p>
          </div>
          <div
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Core Skills</strong>
            </h4>
            <h4 style={{}}>
              <strong>Key skills for computer scientists :</strong>
            </h4>
            <p>
              <ul>
                <li>Big Data, Cloud Computing</li>
                <li>Computer Architecture</li>
                <li>Computer Networks</li>
                <li>Cyber-Physical Systems, Internet of Things</li>
                <li>Cybersecurity, Privacy, and Trust</li>
                <li>Embedded Systems, Real-Time Systems</li>
                <li>
                  High-Performance Computing, Parallel/Distributed Computing
                </li>
                <li>Intelligent Systems, Machine Learning, Robotics</li>
                <li>Mobile Computing, Social Networks</li>
                <li>Reconfigurable Computing</li>
                <li>Computational Geometry</li>
                <li>Data Structures</li>
                <li>Discrete Mathematics</li>
              </ul>
            </p>
          </div>
          <div
            className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
            style={{ backgroundColor: "white" }}
          >
            <h4 style={{}}>
              <strong>Requirements</strong>
            </h4>

            <p>
              To be able to pursue a MS in CS program, candidates should possess
              the right set of skills to become successful in the future. The
              requirements for a Masters in Computer Science vary from
              university to university, some of the fundamental ones are listed
              below:
            </p>
            <p>
              Most of the universities in the USA, Canada require you to give
              the GRE. Few universities from Germany require GRE scores.
              However, GRE is not required for admission to Australian
              universities. IELTS or TOEFL is compulsory for acquiring student
              visa and as a proof of English proficiency. Aspirants must have
              completed a Bachelor’s degree in the same specialization with a
              passing percentage in aggregate of the subjects studied at the
              degree level.
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
                Masters Scholarships, Fellowships and grants in Computer
                sciences
              </strong>
            </h4>
            <h4 style={{}}>
              {" "}
              <strong>
                and Information Technology for international students to study
                abroad
              </strong>
            </h4>

            <ul>
              <li>Postgraduate Taught EU Scholarships In UK 2021</li>
              <li>OSHC International Grants For Students In Australia 2021</li>
              <li>Sport Scholarships At MBS In UK 2021</li>
              <li>
                Master's Scholarships For UK/EU/International Students 2021
              </li>
              <li>Master's Scholarships For Vietnam Residents At UK 2021</li>
              <li>Master's Scholarships For US Residents At UK 2021</li>
              <li>Athletic Scholarships For International Students 2021</li>
              <li>Drama Scholarships For International Students 2021</li>
              <li>Need-Based Grants For International Students 2021</li>
              <li>
                Domestic Research Training Program Scholarships At Australia
                2021
              </li>
              <li>
                Indigenous Research Training Program Scholarship (RTPSI) At
                Australia 2021
              </li>
              <li>AIMS@JCU Scholarships At Australia 2021</li>
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
              One of the most attractive aspects of a computer science degree is
              that the skills it will give you are in high demand. Every
              industry needs tech-savvy employees, so you’ll have plenty of
              career options with a computer science degree.
            </p>
            <h4 style={{}}>
              <strong>
                Here’s some of the most common computer science degree jobs:
              </strong>
            </h4>
            <ul>
              <li>IT consultant</li>
              <li>Software developer</li>
              <li>Computer systems analyst</li>
              <li>Web developer</li>
              <li>Information security analyst</li>
              <li>Project manager</li>
              <li>Database administrator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CS;
