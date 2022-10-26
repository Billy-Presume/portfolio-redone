import { FaBeer } from "react-icons/io5";
import "./about.scss";

const About = () => {
  return (
    <section id="about-section">
      <aside>
        <header>Menu</header>
        <nav class="sidebar-nav">
          <ul>
            <li>
              <a href="#">
                <i class="ion-bag"></i> <span>Background</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ion-ios-settings"></i> <span class="">Education</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ion-ios-briefcase-outline"></i>{" "}
                <span class="">Work History</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ion-ios-analytics-outline"></i>{" "}
                <span class="">Skills</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ion-ios-paper-outline"></i>{" "}
                <span class="">Volunteering</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ion-ios-navigate-outline"></i>{" "}
                <span class="">Passions</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ion-ios-medical-outline"></i>{" "}
                <span class="">Athletics</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <div class="helper">
          RESIZE THE WINDOW
          <span>Breakpoints on 900px and 400px</span>
        </div>
      </main>
    </section>
  );
};

export default About;

/* <Tabs
        defaultActiveKey="about-me"
        id="fill-tab-example"
        className="mb-3"
        fill
        // style={{
        //   width: "100%",
        //   height: "auto",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   margin: "0",
        //   padding: "none",
        //   verticalAlign: "top",
        // }}
      >
        <Tab
          eventKey="about-me"
          title="About me"
          className="about-me-tab"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="about-me-tab-content">
            <div className="about-me-tab-card">
              <h3>My Background</h3>I am a passionate and results-oriented
              eLearning Developer, Instructional Designer, and Web Developer
              with 3+ years of experience delivering superior learning solutions
              impacting 3000+ learners. I have a background in higher education
              and a commitment to accessibility and sustainability. Full Name:{" "}
              <strong>Billy Gaspard Pr&eacute;sum&eacute;</strong>
              Age: <strong>23</strong>
              Highest Education: <strong>Bachelor's Degree</strong>
              Profession:{" "}
              <strong>
                Instructional Designer, eLearning Developer, and Web Developer
              </strong>
            </div>
            <div className="about-me-tab-image-container">
              <img
                // fluid
                // thumbnail
                src={require("../../assets/home_images/IMG-8982.jpg")}
                alt="Billy Presume"
              />
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="longer-tab"
          title="Work Experience"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    eLearning Developer & Instructional Designer
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Salesforce Database Management Systems Specialist
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    Information Technology Support Specialist
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    echnical IT Support Specialist
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <Card>
                      <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                          <Nav.Item>
                            <Nav.Link href="#first">
                              Aug 2020 - Aug 2022
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          Franciscan University of Steubenville
                        </Card.Title>
                        <ListGroup>
                          <ListGroup.Item>
                            ● Conducted needs analysis for 10+ courses and
                            carried out implementation analysis involving
                            <br /> participant guides and gap analysis.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Collaborated with SMEs and other stakeholders to
                            develop project plans, and draft development-ready
                            <br /> storyboards to convert 25+ ITL
                            <br /> to impactful eLearning solutions leveraging
                            design models such as A.D.D.I.E and S.A.M.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Partnered with IT to analyze development needs and
                            ensure seamless LMS integration with xAPI.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <Card>
                      <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                          <Nav.Item>
                            <Nav.Link href="#first">
                              Jan 2020 - Dec 2021
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          Franciscan University of Steubenville
                        </Card.Title>
                        <ListGroup>
                          <ListGroup.Item>
                            ● Used Salesforce to document and review 500+
                            student applications.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Collaborated with the Admissions team to audit
                            records and develop operating procedures.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Managed 1000+ confidential records in compliance
                            with privacy regulations and legal policies.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Identified security issues and developed
                            mitigation processes resulting in 30% fewer false
                            applicants.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <Card>
                      <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                          <Nav.Item>
                            <Nav.Link href="#first">
                              Aug 2019 - Dec 2019
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          Franziskanische Universität (Niederösterreich,
                          Austria)
                        </Card.Title>
                        <ListGroup>
                          <ListGroup.Item>
                            ● Performed software installations, updates and
                            provided technical support.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Analyzed organization needs to configure new
                            network systems and workstations
                            <br /> to improve organization-wide performance and
                            productivity.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Monitored TCP/IP network operations for security
                            breaches and performance issues.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Documented and resolved technical support request
                            tickets issued by 30+ personnel daily.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <Card>
                      <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                          <Nav.Item>
                            <Nav.Link href="#first">
                              Aug 2018 - May 2019
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          Franciscan University of Steubenville
                        </Card.Title>
                        <ListGroup>
                          <ListGroup.Item>
                            ● Installed, updated, and troubleshot computer
                            hardware and software systems.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Resolved staff-generated technical requests.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Maintained system functionality by testing
                            computer components.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            ● Drafted operation manuals for end users.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
        <Tab
          eventKey="skills"
          title="Skills"
          style={{
            justifySelf: "center",
            marginTop: "-15%",
            padding: "none",
            verticalAlign: "top",
          }}
        >
          <Container className="table-container">
            <Table
              striped
              bordered
              hover
              size="sm"
              responsive="sm"
              variant="light"
            >
              <thead>
                <tr>
                  <th>Skills</th>
                  <th>Soft</th>
                  <th>Technical</th>
                  <th>Authoring Tools</th>
                  <th>Multimedia</th>
                  <th>Learning Management Systems</th>
                  <th>Languages</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Excellent Communicator</td>
                  <td>JavaScript (ES6+), Python</td>
                  <td>Articulate Storyline</td>
                  <td>Adobe Premiere Pro</td>
                  <td>Blackboard</td>
                  <td>English</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Detail-oriented</td>
                  <td>HTML5, CSS3, Sass</td>
                  <td>Adobe Captivate</td>
                  <td>Adobe After Effects</td>
                  <td>Moodle</td>
                  <td>French</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Self-starter</td>
                  <td>RESTful APIs, xAPI, SCORM</td>
                  <td>iSpring Suite</td>
                  <td>Adobe Dreamweaver</td>
                  <td>Canvas</td>
                  <td>Haitian Creole</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Team Player</td>
                  <td>React, React Native</td>
                  <td>Lectora</td>
                  <td>Adobe Illustrator</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td></td>
                  <td>
                    Web and Software Development,
                    <br /> Object-Oriented Programming,
                    <br /> Data Structures and Algorithms
                  </td>
                  <td>Elucidat</td>
                  <td>Adobe Photoshop</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td></td>
                  <td>Agile, SCRUM, Waterfall</td>
                  <td></td>
                  <td>Microsoft Office Suite</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td></td>
                  <td>Git, GitHub, CI/CD</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Tab>
      </Tabs> */
