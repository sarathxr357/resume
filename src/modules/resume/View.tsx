import { Box, Typography } from "@mui/material";
import styles from "@app/styles/All.module.css";

const ResumeView = () => {
	return (
		<Box className={styles.page}>
			<h1>Jane Doe</h1>
			<h2>1234 Technology Drive</h2>
			<h2>Cyber City, USA 12345</h2>
			<h2>(123) 456-7890</h2>
			<h2>jane.doe@email.com</h2>
			<br />
			<h2>Objective:</h2>
			<p>
				To obtain a full stack developer position that leverages my
				experience with both front-end and back-end technologies to build
				and maintain high-quality web applications.
			</p>
			<br />
			<h2>Summary:</h2>
			<p>
				Highly skilled and experienced full stack developer with 5 years of
				experience in developing and implementing web applications. Strong
				proficiency in various front-end technologies, including HTML, CSS,
				and JavaScript, and back-end technologies, including Node.js, Ruby
				on Rails, and PHP. Adept at working in Agile development
				environments and collaborating with cross-functional teams to
				deliver high-quality web applications.
			</p>
			<br />
			<h2>Work Experience:</h2>
			<h3>Full Stack Developer</h3>
			<h4>XYZ Inc., Cyber City, USA</h4>
			<h4>June 2018 - Present</h4>
			<ul>
				<li>
					Worked with cross-functional teams to design, develop, and
					implement web applications using HTML, CSS, JavaScript, Node.js,
					and Ruby on Rails
				</li>
				<li>
					Built reusable UI components using React.js and ensured
					cross-browser compatibility using CSS frameworks such as
					Bootstrap
				</li>
				<li>
					Developed and maintained RESTful APIs to connect the front-end
					with the back-end databases
				</li>
				<li>
					Implemented security measures, such as user authentication and
					authorization, to ensure the protection of sensitive data
				</li>
			</ul>
			<h3>Web Developer</h3>
			<h4>123Web Solutions, Cyber City, USA</h4>
			<h4>January 2016 - June 2018</h4>
			<ul>
				<li>
					Designed and developed web pages using HTML, CSS, and JavaScript
					and integrated them with back-end systems using PHP and MySQL
				</li>
				<li>
					Collaborated with designers to ensure the accurate implementation
					of designs into functional web pages
				</li>
				<li>
					Developed and maintained e-commerce websites, including the
					implementation of payment gateway integration and shipping
					calculation systems
				</li>
				<li>
					Troubleshot and resolved technical issues to ensure the smooth
					operation of web applications
				</li>
			</ul>
			<br />
			<h2>Education:</h2>
			<h3>Bachelor of Science in Computer Science</h3>
			<h4>University of Technology, Cyber City, USA</h4>
			<h4>September 2011 - June 2015</h4>
			<br />
			<h2>Skills:</h2>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>React.js</li>
				<li>Node.js</li>
				<li>Ruby on Rails</li>
				<li>RESTful API development</li>
				<li>Agile development</li>
				<li>Git</li>
				<li>Cross-browser compatibility</li>
				<li>User authentication and authorization</li>
			</ul>
		</Box>
	);
};

export default ResumeView;
