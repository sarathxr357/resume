import {
	Box,
	List,
	ListItem,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";

const ResumeView = () => {
	return (
		<Paper sx={{ py: 3 }}>
			<header style={{ marginLeft: 15, marginRight: 15, borderRadius: 5 }}>
				<h1>Sarath K.S.</h1>
				<p>Software Developer | Thrissur</p>
				<p>Email: sarathxr@gmail.com | Phone: (+91) 80757-25639</p>
			</header>
			<main>
				<section className="section">
					<h2 className="section-title">Summary</h2>
					<p className="section-content">
						I am a computer engineering graduate from MTI Thrissur with a
						strong background in web development. Three years of
						experience in HTML, JavaScript, and CSS. One and a half years
						of experience in React.js, Nest.js, and Next.js. Strong
						understanding of software development principles,
						problem-solving skills, and working with APIs and third-party
						libraries.
					</p>
				</section>
				<section className="section">
					<h2 className="section-title">Education</h2>
					<div className="section-content">
						<div className="education-item">
							<h3 className="item-title">
								Diploma in Computer Engineering
							</h3>
							<p>{"Maharaja's Technological Institute, Thrissur"}</p>
							<p>2016-2019</p>
						</div>
						{/* Add more education items if applicable */}
					</div>
				</section>
				<section className="section">
					<h2 className="section-title">Experience</h2>
					<div className="section-content">
						<div className="experience-item">
							<h3 className="item-title">Software Developer</h3>
							<p>Codiac Technologies, Chalakudy</p>
							<p>2022 Feb - Present</p>
							<h3 className="item-title">Programmer</h3>
							<p>Dukesoft, Thrissur</p>
							<p>2019 May - 2021 Sept</p>
							{/* <ul> */}
							{/* <li>Responsibility or Achievement</li> */}
							{/* <li>Responsibility or Achievement</li> */}
							{/* Add more responsibilities or achievements if applicable */}
							{/* </ul> */}
						</div>
						{/* Add more experience items if applicable */}
					</div>
				</section>
				<section className="section">
					<h2 className="section-title">Skills</h2>
					<h4 className="section-content">
						Skills in Next.js (Frontend):
					</h4>
					<ul>
						<li>
							Proficient in JavaScript and TypeScript, which are
							essential for Next.js and Nest.js development.
						</li>
						<li>
							Solid understanding of React.js concepts for building
							components, managing state, and utilizing lifecycle
							methods.
						</li>
						<li>
							Familiarity with Next.js fundamentals such as routing,
							server-side rendering (SSR), static site generation (SSG),
							and API routes.
						</li>
						<li>
							Proficiency in CSS and styling frameworks like CSS modules,
							CSS-in-JS libraries, and preprocessors.
						</li>
						<li>
							Strong understanding of HTML structure and DOM
							manipulation.
						</li>
						<li>
							Knowledge of Git and version control for collaborative
							development.
						</li>
					</ul>
					<h4 className="section-content">Skills in Nest.js (Backend):</h4>
					<ul>
						<li>
							Strong proficiency in Node.js and familiarity with
							event-driven programming and asynchronous concepts.
						</li>
						<li>
							Solid understanding of TypeScript features, such as
							decorators and strong typing.
						</li>
						<li>
							Knowledge of building RESTful and GraphQL APIs using
							Nest.js and integrating them with frontend applications.
						</li>
						<li>
							Experience with databases like MongoDB, PostgreSQL, or
							MySQL and ORM libraries like TypeORM or Sequelize.
						</li>
						<li>
							Understanding of authentication and authorization
							mechanisms for securing web applications.
						</li>
						<li>
							Knowledge of testing frameworks like Jest for unit,
							integration, and end-to-end tests.
						</li>
						<li>
							Familiarity with deployment, DevOps practices,
							containerization (e.g., Docker), and cloud platforms (e.g.,
							AWS, Azure, Google Cloud).
						</li>
					</ul>
				</section>
			</main>
		</Paper>
	);
};

export default ResumeView;
