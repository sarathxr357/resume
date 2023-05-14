import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { App, Container } from "@app/base";
import Resume from "../modules/resume";

const inter = Inter({ subsets: ["latin"] });

export default function ResumePage() {
	return (
		<App>
			<Container>
				<Resume />
			</Container>
		</App>
	);
}
