import { ReactNode } from "react";
import { Container as MUIContainer, Typography } from "@mui/material";
import styles from "@app/styles/All.module.css";

type BodyProps = {
	children: ReactNode;
};

const Container = ({ children }: BodyProps) => {
	return (
		<div className={styles.root}>
			<MUIContainer component="main" className={styles.main} maxWidth="xl">
				{children}
			</MUIContainer>
			<footer className={styles.footer}>
				<MUIContainer maxWidth="xl">
					<Typography variant="body1">
						My sticky footer can be found here.
					</Typography>
				</MUIContainer>
			</footer>
		</div>
	);
};

export default Container;
