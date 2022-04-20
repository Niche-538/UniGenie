import React from "react";
import { Table } from "react-bootstrap";
import StickyBox from "react-sticky-box";

const US = () => {
    return (
        <div>
            <div
                className="row mx-5 my-5 px-2 align-items-center text-center justify-content-center rounded border"
                style={{
                    backgroundImage: `url("https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-1835470884-87780.transform/lh-dcep-transform-width-1440/img.jpg")`,
                    height: "300px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="my-5 mx-2 justify-content-center">
                    <h1 style={{ color: "#6C63FF" }}>
                        <strong>United States</strong>
                    </h1>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
                <StickyBox className="col-3 mx-5 my-4 align-items-center text-start justify-content-center">
                    <div
                        className="px-3 py-3 rounded border"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Contents</strong>
                        </h4>
                        <p>
                            <a href="#Overview">Overview</a>
                        </p>
                        <p>
                            <a href="#Education System">Education System</a>
                        </p>
                        <p>
                            <a href="#Popular Universities">
                                Popular Universities
                            </a>
                        </p>
                        <p>
                            <a href="#Top Courses">Top Courses</a>
                        </p>
                        <p>
                            <a href="#Admission Process">Admission Process</a>
                        </p>
                        <p>
                            <a href="#Cost of Attendance">Cost of Attendance</a>
                        </p>
                        <p>
                            <a href="#Best Student Cities">
                                Best Student Cities
                            </a>
                        </p>
                        <p>
                            <a href="#Visa">Visa</a>
                        </p>
                        <p>
                            <a href="#Top Scholarships">Top Scholarships</a>
                        </p>
                        <p>
                            <a href="#Work Opportunities">Work Opportunities</a>
                        </p>
                        <p>
                            <a href="#FAQs">FAQs</a>
                        </p>
                    </div>
                </StickyBox>
                <div className="col-8 my-4">
                    <div
                        id="Overview"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Overview</strong>
                        </h4>
                        <p>
                            With over 1.1 million international students, the
                            USA has emerged as the number one study destination
                            over the years. One of the major reasons for
                            students flocking to study in USA is the excellent
                            reputation that US universities and degrees hold.
                        </p>
                        <p>
                            Diversity is another distinguishing factor that
                            attracts students to pursue higher studies in USA.
                            The country also provides ample work opportunities
                            to the students during and after completion of their
                            academic courses.
                        </p>
                        <p>
                            Overall, USA is one of the most favourable places in
                            the world for those who wish to turn their study
                            abroad dream into reality.
                        </p>

                        <h4>
                            <strong>
                                USA As a Study Destination: Highlights
                            </strong>
                        </h4>
                        <p>
                            Here's an overview of all the factors that an
                            international student must know about when pursuing
                            higher studies in USA:
                        </p>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <th>Language of Instruction</th>
                                    <th>English</th>
                                </tr>
                                <tr>
                                    <th>Average Cost of Study</th>
                                    <th>$45,000/year</th>
                                </tr>
                                <tr>
                                    <th>Average Cost of Living</th>
                                    <th>$10,000 - $20,000/year</th>
                                </tr>
                                <tr>
                                    <th>Sources of Funding</th>
                                    <th>
                                        Scholarships, aids and part time jobs
                                    </th>
                                </tr>
                                <tr>
                                    <th>Exams Required</th>
                                    <th>IELTS, TOEFL, PTE, GRE, GMAT, etc.</th>
                                </tr>
                                <tr>
                                    <th>Intakes</th>
                                    <th>
                                        3 times a year - Fall, Spring and Summer
                                        Intakes
                                    </th>
                                </tr>
                                <tr>
                                    <th>Type of Visa</th>
                                    <th>F1, J1 and M1 visas</th>
                                </tr>
                                <tr>
                                    <th>Top Courses</th>
                                    <th>
                                        Engineering and Technology, Business and
                                        Management, Fine Arts, Physical and Life
                                        Sciences, etc.
                                    </th>
                                </tr>
                                <tr>
                                    <th>Types of Degrees</th>
                                    <th>
                                        Associate degree, Undergraduate degree,
                                        Graduate degree, Doctorate degree
                                    </th>
                                </tr>
                                <tr>
                                    <th>Best Student Cities</th>
                                    <th>
                                        New York, San Francisco, Los Angeles,
                                        Boston, Chicago, Seattle, Washington DC,
                                        Gainesville, etc.
                                    </th>
                                </tr>
                            </tbody>
                        </Table>

                        <h4>
                            <strong>Why Study in USA?</strong>
                        </h4>
                        <p>
                            The vast opportunities that educational institutions
                            in the USA provide are rarely found in any other
                            country. With vast STEM (Science, Technology,
                            Engineering and Mathematics) programs and equal
                            appreciation for Arts and Literature subjects, there
                            are many other benefits of studying in USA. The top
                            benefits of studying abroad in USA are:
                        </p>
                        <ul>
                            <li>
                                The USA is home to some of the best educational
                                institutions in the world. The degrees from
                                these universities are recognised worldwide.
                            </li>
                            <li>
                                The higher education system in USA is quite
                                flexible in terms of deciding the structure and
                                courses.
                            </li>
                            <li>
                                The US colleges and universities offer a vibrant
                                student life. Universities offer a wide range of
                                activities beyond academics in their campus.
                            </li>
                            <li>
                                There are ample research and training
                                opportunities for international students
                                studying in USA. The universities are well
                                equipped with the latest technology to provide
                                up-to-date education, research and training to
                                their students.
                            </li>
                            <li>
                                Studying from the best US universities and
                                learning under the guidance of top professors in
                                the world, make students highly employable in
                                the job market.
                            </li>
                        </ul>
                    </div>

                    <div
                        id="Education System"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Education System</strong>
                        </h4>
                        <p>
                            After completing their high school (12th grade), the
                            students in USA go to colleges and universities to
                            pursue higher education. The education system in USA
                            offers tremendous diversity for international
                            students. There are about 4,500 accredited higher
                            educational institutions in USA that offer three
                            types of degrees:
                        </p>
                        <ul>
                            <li>
                                <strong>Undergraduate Degree</strong>: It is a
                                full-time undergraduate degree which is referred
                                to as a Bachelor's degree in USA. The duration
                                of the degree is 4 years.
                            </li>
                            <li>
                                <strong>Associate Degree</strong>: It is a
                                degree taken at an undergraduate level. It is
                                equivalent to a diploma and is offered by
                                community colleges in USA. It is of 2 years
                                duration.
                            </li>
                            <li>
                                <strong>Graduate Degree</strong>: A graduate or
                                master's degree mostly covers 2 to 3 academic
                                years in the universities of USA.
                            </li>
                            <li>
                                <strong>Doctorate Degree</strong>: A doctorate
                                degree takes a total of 5 to 8 years to
                                complete.
                            </li>
                        </ul>
                        <p>
                            The detailed view of different types of higher
                            education institutions in USA is discussed below:
                        </p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>Types of Institutions</th>
                                    <th>Key Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>State College or University</th>
                                    <th>
                                        Subsidised by the local or state
                                        government
                                    </th>
                                </tr>
                                <tr>
                                    <th>Private College or University</th>
                                    <th>
                                        Run by private groups or organisations
                                    </th>
                                </tr>
                                <tr>
                                    <th>Community College</th>
                                    <th>
                                        Offers 2 year associate degrees or
                                        certificates
                                    </th>
                                </tr>
                                <tr>
                                    <th>Institute of Technology</th>
                                    <th>
                                        Offers graduate and short-terms programs
                                        in science and technology
                                    </th>
                                </tr>
                            </tbody>
                        </Table>

                        <h4>
                            <strong>Credit System in USA</strong>
                        </h4>
                        <p>
                            All US universities follow the same credit system.
                            The credits that a student earns during the course
                            are taken into consideration to calculate the final
                            result.
                        </p>
                        <ul>
                            <li>
                                A student requires 3-5 credits per course for an
                                undergraduate degree/Bachelor's. Typically,
                                around 120-130 credit hours are required to
                                complete a bachelor's degree.
                            </li>
                            <li>
                                For a master's course, it is 3-4 credits per
                                course. Around 30-64 credit hours are required
                                for a master's degree in USA.
                            </li>
                            <li>
                                The US education system uses the GPA or the
                                grade point average, which is a scale from 0.0
                                to 4.0 to grade students. For a semester, these
                                are calculated based on marks obtained in each
                                course and credits earned for that semester. 4.0
                                represents A grade and 0.0 is equivalent to F
                                grade.
                            </li>
                        </ul>
                    </div>

                    <div
                        id="Popular Universities"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Popular Universities</strong>
                        </h4>
                        <p>
                            There are many top universities in the USA that
                            excel in their teaching standards and contribute to
                            the overall development of students. Let us have a
                            look at the best universities in USA.
                        </p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>University</th>
                                    <th>QS World Ranking 2022</th>
                                    <th>Annual Tuition Fees Per Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        Massachusetts Institute of Technology
                                    </th>
                                    <th>1</th>
                                    <th>$50,000 - $55,000</th>
                                </tr>
                                <tr>
                                    <th>Stanford University</th>
                                    <th>3</th>
                                    <th>$25,000 - $55,000</th>
                                </tr>
                                <tr>
                                    <th>Harvard University</th>
                                    <th>5</th>
                                    <th>$25,000 - $51,000</th>
                                </tr>
                                <tr>
                                    <th>
                                        California Institute of Technology
                                        (Caltech)
                                    </th>
                                    <th>6</th>
                                    <th>$44,000 - $57,000</th>
                                </tr>
                                <tr>
                                    <th>University of Chicago</th>
                                    <th>10</th>
                                    <th>$55,000 - $59,000</th>
                                </tr>
                                <tr>
                                    <th>University of Pennsylvania</th>
                                    <th>13</th>
                                    <th>$60,000 - $62,000</th>
                                </tr>
                                <tr>
                                    <th>Yale University</th>
                                    <th>14</th>
                                    <th>$58,000 - $60,000</th>
                                </tr>
                                <tr>
                                    <th>Columbia University</th>
                                    <th>19</th>
                                    <th>$58,000 - $78,000</th>
                                </tr>
                                <tr>
                                    <th>Princeton University</th>
                                    <th>20</th>
                                    <th>$56,000 - $58,000</th>
                                </tr>
                                <tr>
                                    <th>Cornell University</th>
                                    <th>21</th>
                                    <th>$56,000 - $60,000</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div
                        id="Top Courses"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Top Courses</strong>
                        </h4>
                        <p>
                            Students looking for the best courses to study in
                            USA are presented with a wide range of options.
                            However, there are certain courses that US
                            Universities are known for. Here's a quick look at
                            best courses to study in USA for international
                            students:
                        </p>
                        <ul>
                            <li>Engineering and Technology</li>
                            <li>Business and Management</li>
                            <li>Marine Biology and Life Sciences</li>
                            <li>Maths and Computer Science</li>
                            <li>Social Sciences</li>
                            <li>Medicine</li>
                            <li>Liberal Arts</li>
                            <li>Law</li>
                        </ul>
                        <p>
                            The most popular programs that students opt to study
                            in America are:
                        </p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>Program</th>
                                    <th>Duration</th>
                                    <th>Average Tuition Fees</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>BSc Nursing (BSN)</th>
                                    <th>4 years</th>
                                    <th>$45,000/year</th>
                                </tr>
                                <tr>
                                    <th>MBBS (BS + MD + Residency)</th>
                                    <th>8 to 10 years</th>
                                    <th>$40,000/year</th>
                                </tr>
                                <tr>
                                    <th>MPH</th>
                                    <th>1 to 2 years</th>
                                    <th>$50,000/year</th>
                                </tr>
                                <tr>
                                    <th>MS Computer Science</th>
                                    <th>1 to 2 years</th>
                                    <th>$50,000/year</th>
                                </tr>
                                <tr>
                                    <th>MS Data Science</th>
                                    <th>1 to 2 years</th>
                                    <th>$70,000/year</th>
                                </tr>
                                <tr>
                                    <th>MA Applied Economics</th>
                                    <th>2 years</th>
                                    <th>$35,000/year</th>
                                </tr>
                                <tr>
                                    <th>MBA</th>
                                    <th>2 years</th>
                                    <th>$70,000/year</th>
                                </tr>
                                <tr>
                                    <th>LLM</th>
                                    <th>1 year</th>
                                    <th>$60,000/year</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div
                        id="Admission Process"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Admission Process</strong>
                        </h4>
                        <p>
                            The requirements to study in USA for Indian students
                            and International students can be completed online.
                            A step-by-step process of how to study in USA is
                            discussed below:
                        </p>
                        <ol>
                            <li>
                                Decide the course you want to pursue and start
                                searching for the best universities offering
                                that course.
                            </li>
                            <li>
                                Once the universities are shortlisted, check out
                                the official university websites of each
                                university and gather information about the
                                requirements and eligibility criteria.
                            </li>
                            <li>
                                Start the application process. Fill the
                                application form and upload all required
                                documents and certificates. Pay the required
                                application fees.
                            </li>
                            <li>
                                Wait for the universities to revert. Once
                                selected, you will be sent an I-20 form. It is
                                the document that you need to acquire your
                                student visa.
                            </li>
                        </ol>
                        <h4>
                            <strong>Admission Requirements</strong>
                        </h4>
                        <p>
                            To understand how to study in USA, you must also
                            understand the USA university requirements for
                            international students:
                        </p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>Degree</th>
                                    <th>Requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Associate Degree</th>
                                    <th>
                                        <ul>
                                            <li>
                                                High school transcript or
                                                equivalent with an average of C
                                                grade
                                            </li>
                                            <li>TOEFL iBT score 60</li>
                                        </ul>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Bachelor's Degree</th>
                                    <th>
                                        <ul>
                                            <li>
                                                12th grade certificate with
                                                minimum GPA - 2.50 to 3.60
                                            </li>
                                            <li>TOEFL - 61</li>
                                            <li>Statement of Purpose</li>
                                            <li>ACT/SAT</li>
                                        </ul>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Master's Degree</th>
                                    <th>
                                        <ul>
                                            <li>
                                                Bachelor's degree with minimum
                                                CGPA 2.50 to 3.60
                                            </li>
                                            <li>TOEFL - 78 to 100</li>
                                            <li>
                                                Statement of Purpose, Letters of
                                                Recommendation, Curriculum vitae
                                            </li>
                                            <li>GRE/GMAT</li>
                                        </ul>
                                    </th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div
                        id="Cost of Attendance"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Cost of Attendance</strong>
                        </h4>
                        <p>
                            The cost of studying in the USA depends upon the
                            course and university you choose. Your lifestyle
                            also comes into consideration here. The overall cost
                            of studying can be divided into two categories -
                            Tuition Fees and Cost of Living.
                        </p>
                        <h4>
                            <strong>Tuition Fees</strong>
                        </h4>
                        <p>
                            The tuition fee in the USA depends upon the
                            university you choose and the course you pursue. If
                            you could make it to the public universities in the
                            USA, your expenses are cut down to a great extent.
                            Private universities in the USA on the other hand
                            charge high fees in comparison to the public ones.
                        </p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>Degree</th>
                                    <th>Average Annual Tuition Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Bachelor's Degree</th>
                                    <th>$8,000 - $40,000</th>
                                </tr>
                                <tr>
                                    <th>Master's Degree</th>
                                    <th>$10,000 - $60,000</th>
                                </tr>
                            </tbody>
                        </Table>
                        <h4>
                            <strong>Cost of Living</strong>
                        </h4>
                        <p>
                            The cost of living in USA for international students
                            again depends upon the type of living you choose. If
                            you have a tight budget, you must opt for student
                            accommodation. Besides, there are some costs that
                            are unavoidable. An average cost of living in USA
                            for international students is discussed below:
                        </p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>Particular</th>
                                    <th>Average Cost Per Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        Apartment housing including utilities
                                    </th>
                                    <th>$21,710</th>
                                </tr>
                                <tr>
                                    <th>Food</th>
                                    <th>$8,500</th>
                                </tr>
                                <tr>
                                    <th>Dormitory housing</th>
                                    <th>$7,588 - $11,914</th>
                                </tr>
                                <tr>
                                    <th>Transportation</th>
                                    <th>$2,180</th>
                                </tr>
                                <tr>
                                    <th>Books and supplies</th>
                                    <th>$13,800</th>
                                </tr>
                                <tr>
                                    <th>Miscellaneous</th>
                                    <th>$1,000</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div
                        id="Best Student Cities"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Best Student Cities</strong>
                        </h4>
                        <p>
                            With more than 50 states hosting world famous
                            universities, the USA offers many options of cities
                            for you to choose from. Each of them is equally
                            pleasant in terms of education and exposure. Given
                            below is a list of best place to study in USA:
                        </p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>City</th>
                                    <th>Average Cost of Living</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Boston</th>
                                    <th>$22,000/year</th>
                                </tr>
                                <tr>
                                    <th>Chicago</th>
                                    <th>$20,000/year</th>
                                </tr>
                                <tr>
                                    <th>New York</th>
                                    <th>$21,000/year</th>
                                </tr>
                                <tr>
                                    <th>Los Angeles</th>
                                    <th>$20,000/year</th>
                                </tr>
                                <tr>
                                    <th>San Francisco</th>
                                    <th>$20,000/year</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div
                        id="Visa"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Visa</strong>
                        </h4>
                        <p>
                            The visa process to study in USA for Indian students
                            is quite simple. You have to follow all the steps
                            carefully to get your visa without any hassle. A
                            step-by-step guide to follow while one applies for
                            USA student visa is given below:
                        </p>
                        <ol>
                            <li>
                                Apply to an SEVP approved institution and be
                                accepted by a Student and Exchange Visitor
                                Program (SEVP) approved school in the US (6 to
                                12 months prior to US study).
                            </li>
                            <li>
                                After being accepted at an SEVP certified
                                institution you will receive an I-20 or DS-160
                                form. The form is a must to apply for an USA
                                student visa.
                            </li>
                            <li>
                                Pay your SEVIS fee at least 3 days prior to
                                submitting your US visa application. You may
                                make the payment through online or a paper form.
                                The information about them can be accessed
                                through US Immigration Customs Enforcement (ICE)
                                SEVP official website.
                            </li>
                            <li>
                                Once you have received your SEVIS form and paid
                                the SEVIS fee, you can book an appointment with
                                a US consulate or embassy in your country for a
                                US student visa application.
                            </li>
                            <li>
                                Pay the visa application fee. It is also known
                                as the Machine Readable Visa Fee, or 'MRV fee'.
                            </li>
                            <li>
                                The last step is to schedule and attend a USA
                                student visa interview. Go to the embassy or
                                consulate website and check for all required
                                documents that you need to carry to the
                                interview.
                            </li>
                            <li>
                                In all cases you'll need to complete the visa
                                application form DS-160 through online mode.
                                Select the location from which you wish to apply
                                and ensure you have all the documents and
                                information required for the application form.
                            </li>
                        </ol>
                        <h5>
                            <strong>
                                Necessary documents and personal details needed
                                to apply for DS-160 visa
                            </strong>
                        </h5>
                        <ol>
                            <li>Name and date of birth</li>
                            <li>Address and contact number</li>
                            <li>Passport details</li>
                            <li>
                                Details of travel plans, and travel companions
                            </li>
                            <li>Details of previous US travel</li>
                            <li>Your point of contact in the US</li>
                            <li>Family, work and education details</li>
                            <li>
                                Security, background and medical health
                                information
                            </li>
                            <li>
                                SEVIS ID and address of US school/program you
                                intend to enrol in (as printed on I-20 or
                                DS-2019 form)
                            </li>
                        </ol>
                        <p>
                            Make sure to reach at least 30 minutes prior to your
                            scheduled time of your visa interview.
                        </p>
                    </div>

                    <div
                        id="Top Scholarships"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Top Scholarships</strong>
                        </h4>
                        <p>
                            International students are offered many scholarships
                            to study in USA. Most of them are based on merit or
                            excellence in any extra co-curricular activity. They
                            may be government funded or non-government ones, and
                            also university-specific ones as well. Some top
                            scholarships for indian students to study in USA:
                        </p>
                        <h5>
                            <strong>Fulbright Foreign Student Program</strong>
                        </h5>
                        <ul>
                            <li>
                                <strong>Awarded to</strong>: International
                                Students for Graduate programs.
                            </li>
                            <li>
                                <strong>Amount/Benefit</strong>: Covers tuition
                                fees, accommodation fee, health insurance and
                                airfare.
                            </li>
                        </ul>
                        <h5>
                            <strong>
                                United World Colleges International Youth
                                Scholarships
                            </strong>
                        </h5>
                        <ul>
                            <li>
                                <strong>Awarded to</strong>: International
                                students pursuing a bachelor's degree in the
                                USA.
                            </li>
                            <li>
                                <strong>Amount/Benefit</strong>: Full or partial
                                fee waiver depending on the funds available.
                            </li>
                        </ul>
                        <h5>
                            <strong>Rotary Peace Fellowships</strong>
                        </h5>
                        <ul>
                            <li>
                                <strong>Awarded to</strong>: International
                                students pursuing a Certificate Program or
                                Masters' Degree related to peace and conflict
                                resolution.
                            </li>
                            <li>
                                <strong>Amount/Benefit</strong>: Covers fees,
                                accommodation, transportation, and all
                                internship and field-study expenses.
                            </li>
                        </ul>
                        <h5>
                            <strong>
                                PEO International Peace Scholarship For Women
                            </strong>
                        </h5>
                        <ul>
                            <li>
                                <strong>Awarded to</strong>: Female students
                                pursuing graduate programs.
                            </li>
                            <li>
                                <strong>Amount/Benefit</strong>: $12,500
                            </li>
                        </ul>
                        <h5>
                            <strong>Clark Global Scholarship Program</strong>
                        </h5>
                        <ul>
                            <li>
                                <strong>Awarded to</strong>: International
                                students pursuing a bachelor's degree and
                                demonstrating financial need.
                            </li>
                            <li>
                                <strong>Amount/Benefit</strong>: $15,000-$25,000
                            </li>
                        </ul>
                        <h5>
                            <strong>
                                Rotary International Ambassadorial Scholarships
                            </strong>
                        </h5>
                        <ul>
                            <li>
                                <strong>Awarded to</strong>: Students in
                                Undergraduate and Postgraduate Programs.
                            </li>
                            <li>
                                <strong>Amount/Benefit</strong>: $12,000-$25,000
                            </li>
                        </ul>
                        <h5>
                            <strong>University Scholarships</strong>
                        </h5>
                        <ul>
                            <li>
                                <strong>Awarded to</strong>: Fully-funded
                                scholarships offered by individual universities
                                for both graduate and undergraduate programs.
                                Most universities including Stanford, Yale,
                                Harvard offer these scholarships.
                            </li>
                            <li>
                                <strong>Amount/Benefit</strong>: Varies with the
                                university and program.
                            </li>
                        </ul>
                    </div>

                    <div
                        id="Work Opportunities"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>Work Opportunities</strong>
                        </h4>
                        <p>
                            Having a student visa allows the international
                            students to opt for part time jobs in the USA.
                        </p>
                        <p>
                            <strong>
                                The US government follows a 20 hour work per
                                week rule for part time jobs in USA for
                                international students.
                            </strong>
                        </p>
                        <p>
                            There are two types of student employment: On-campus
                            and Off-campus. The former is the work that takes
                            place within the college/university campus.
                            Off-campus on the other hand is the work that is
                            affiliated with the institution.{" "}
                            <strong>
                                Off-campus jobs can be undertaken by students
                                under 4 categories - Optional Practice Training
                                (OPT), Curricular Practical Training (CPT),
                                Economic Hardship and lastly, International
                                Organizations.
                            </strong>
                        </p>
                        <p>
                            Some popular part time student jobs in USA for
                            international students are:
                        </p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>Part-Time Jobs</th>
                                    <th>Average Salary Per Hour</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Library Assistant</th>
                                    <th>$14</th>
                                </tr>
                                <tr>
                                    <th>Research Assistant</th>
                                    <th>$17</th>
                                </tr>
                                <tr>
                                    <th>Tutor</th>
                                    <th>$12</th>
                                </tr>
                                <tr>
                                    <th>Campus Tour Guide</th>
                                    <th>$13</th>
                                </tr>
                                <tr>
                                    <th>Department Assistant</th>
                                    <th>$16</th>
                                </tr>
                                <tr>
                                    <th>Food Runner</th>
                                    <th>$12</th>
                                </tr>
                                <tr>
                                    <th>Receptionist</th>
                                    <th>$13</th>
                                </tr>
                            </tbody>
                        </Table>
                        <h4>
                            <strong>
                                Post Study Work Options For International
                                Students In USA
                            </strong>
                        </h4>
                        <p>
                            Most of the international students in USA hold the
                            US non-immigrant student visa F-1. Having the F1
                            visa grants them the permission to work in the USA
                            after finishing the studies depending on the course.
                            However, there are certain guidelines and
                            restrictions issued by the United States Citizenship
                            and Immigration Service (USCIS) in this regard.
                        </p>
                        <h4>
                            <strong>
                                Job Outlook for International Students after
                                Studies
                            </strong>
                        </h4>
                        <p>Here's a quick look at the jobs after MS in USA:</p>
                        <Table striped bordered hover>
                            <thead
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "white",
                                }}
                            >
                                <tr>
                                    <th>Area of Specialization</th>
                                    <th>Median Annual Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Management</th>
                                    <th>$144,830</th>
                                </tr>
                                <tr>
                                    <th>Computer Science</th>
                                    <th>$126,830</th>
                                </tr>
                                <tr>
                                    <th>Chemical Engineering</th>
                                    <th>$108,540</th>
                                </tr>
                                <tr>
                                    <th>Statistics/Data Science</th>
                                    <th>$103,930</th>
                                </tr>
                                <tr>
                                    <th>
                                        Electrical and Electronics Engineering
                                    </th>
                                    <th>$100,830</th>
                                </tr>
                            </tbody>
                        </Table>
                        <h4>
                            <strong>Work Visa and PR in USA</strong>
                        </h4>
                        <p>
                            Once the extension under F1 student Visa is over,
                            students are allowed to stay in the country after
                            obtaining a H-1B USA work visa. With this visa,
                            students can live and work in the US for up to 6
                            years.
                        </p>
                        <p>
                            Students wanting to stay over 6 years can apply for
                            a green card to get PR in the US. Some ways for F1
                            students to apply for a green card in USA are:
                        </p>
                        <ul>
                            <li>Receive Employer Sponsorship</li>
                            <li>Marry a US citizen</li>
                            <li>Seek Asylum</li>
                            <li>Participate in military service</li>
                            <li>Receive parent or child sponsorship</li>
                        </ul>
                        <p>
                            Students fulfilling any of the above mentioned
                            criteria, will definitely get their PR in the USA.
                            Having a PR in the USA allows individuals to apply
                            for all kinds of job opportunities in the USA.
                        </p>
                        <p>
                            Academic study and work experience from the reputed
                            universities of USA, and years of residing in this
                            radiant country is truly a lifetime experience. It
                            has a positive impression on your life and career to
                            enhance your long-term goals. This experience helps
                            you acquire all the at tributes to flourish, both,
                            in personal and professional spheres of life.
                            Professionals can help make your study abroad USA
                            journey easy, so feel free to reach out to UniGenie
                            Counsellors today!
                        </p>
                    </div>

                    <div
                        id="FAQs"
                        className="py-4 px-4 mb-4 rounded border align-items-center text-start justify-content-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <h4>
                            <strong>FAQs</strong>
                        </h4>
                        <ol>
                            <li>
                                <strong>
                                    When does the academic season in the US
                                    begin?
                                </strong>
                                <p>
                                    The academic year usually runs from August
                                    through May. Most universities run with the
                                    semester system (two terms) but some also go
                                    with a trimester system (three terms).
                                </p>
                            </li>
                            <li>
                                <strong>
                                    There are so many universities in the US,
                                    how do I navigate through them?
                                </strong>
                                <p>
                                    There are 4500 accredited universities in
                                    the US. Navigating through them can be a
                                    difficult task. You can try the Grad School
                                    Finder tool here. You can then discuss the
                                    results of the Grad School Finder with
                                    seniors or other peers on UniGenie
                                    discussions or read reviews of universities
                                    on UniGenie. You should also check the
                                    accreditation of the universities on the
                                    official government website.
                                </p>
                            </li>
                            <li>
                                <strong>
                                    Is it possible to apply for Masters with a
                                    three-year Bachelors?
                                </strong>
                                <p>
                                    This is a tricky question for US
                                    universities. Most top universities seek for
                                    a 4-year under-graduate study but still
                                    there are individual universities (even good
                                    ones) that may accept three-year. The best
                                    option is to check within the eligibility
                                    criteria of your shortlisted university.
                                </p>
                            </li>
                            <li>
                                <strong>
                                    Which English language test should I choose?
                                </strong>
                                <p>
                                    US universities generally accept both TOEFL
                                    and IELTS, but you might want to contact
                                    your prospective university and get the
                                    information verified.
                                </p>
                            </li>
                            <li>
                                <strong>
                                    Which term should I opt for? Does fall have
                                    better internship opportunities or does
                                    spring?
                                </strong>
                                <p>
                                    Fall has more internship opportunities.
                                    Students who enroll in the spring season
                                    face a problem of fulfilling 9-month
                                    enrolment criteria for companies.
                                </p>
                            </li>
                            <li>
                                <strong>
                                    While applying to on-campus jobs, what
                                    should I avoid mentioning in my resume?
                                </strong>
                                <p>
                                    Your date of birth, religious preference,
                                    nationality, passport number, or home
                                    address should not be mentioned in the
                                    resume.
                                </p>
                            </li>
                            <li>
                                <strong>
                                    How to get on-campus jobs in the US?
                                </strong>
                                <p>
                                    You should be proactive in terms of
                                    networking and volunteering. Reach out the
                                    university's career center for a job.
                                    Getting hand-on tips from seniors also
                                    helps.
                                </p>
                            </li>

                            <li>
                                <strong>
                                    Do I need to take care of the duration I
                                    work for CPT?
                                </strong>
                                <p>
                                    Yes, you should. If you work part-time for a
                                    CPT for less than 12 months, you can still
                                    apply for OPT. However, if you have been
                                    working full time for CPT for 12 months or
                                    more, you lose your eligibility for an OPT.
                                </p>
                            </li>

                            <li>
                                <strong>
                                    Can I get my OPT after coming back to the US
                                    from my home country?
                                </strong>
                                <p>
                                    No, if you had not received an Employment
                                    authorization document before leaving, you
                                    will not be readmitted after coming back.
                                </p>
                            </li>

                            <li>
                                <strong>
                                    What documents do I need to come back to the
                                    US after receiving my EAD for OPT?
                                </strong>
                                <p>
                                    A valid passport, valid F-1 visa, valid EAD
                                    card, letter of employment including dates
                                    and salary, and all I-20s with page 3
                                    endorsed to travel by the student's
                                    international student advisor in the last 6
                                    months.
                                </p>
                            </li>

                            <li>
                                <strong>
                                    Can I work for more than 12 months through
                                    OPT?
                                </strong>
                                <p>
                                    Students employed by companies under the
                                    E-Verify program and studying any of the
                                    following subjects can apply for a special
                                    extension of the OPT program for an
                                    additional 24 months. Subjects include
                                    Actuarial Science, Computer Science
                                    Applications, Engineering, Engineering
                                    Technologies, Life Sciences, Mathematics,
                                    Military Technologies, Physical Sciences,
                                    and other STEM Designated Degree Programs.
                                </p>
                            </li>

                            <li>
                                <strong>
                                    Why is a labor condition attestation (LCA)
                                    required for an H-1B visa?
                                </strong>
                                <p>
                                    It ensures that you get salaries and
                                    benefits at par with other American
                                    counterparts and you are not exploited by US
                                    companies.
                                </p>
                            </li>

                            <li>
                                <strong>
                                    Will I be able to fit the US culture as an
                                    international student?
                                </strong>
                                <p>
                                    US universities welcome international
                                    students with open arms. They provide lots
                                    of support with clubs for students from each
                                    country as well as offices for international
                                    students. There are so many ways to enjoy
                                    life on campus. With universities being
                                    bigger than some actual cities, the
                                    activities and student clubs can be really
                                    interesting to take part in. Also, students
                                    are exposed to so many cultures and
                                    different types of people. It helps them
                                    grow individually as well.
                                </p>
                            </li>

                            <li>
                                <strong>
                                    Is the US education system flexible?
                                </strong>
                                <p>
                                    As a student, you have the flexibility of
                                    working and pursuing extra-curricular
                                    activities while studying the course. Also,
                                    you can take up classes at night if it isn't
                                    feasible for you to take classes during the
                                    day (like if you have a job or child that
                                    you need to care for).
                                </p>
                            </li>

                            <li>
                                <strong>
                                    Where is the end date of CPT mentioned?
                                </strong>
                                <p>
                                    It is mentioned in the I-20 form. CPT needs
                                    to be a part of studies.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default US;
