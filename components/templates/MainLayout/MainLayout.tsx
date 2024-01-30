import {
	FunctionComponent,
	JSXElementConstructor,
	ReactElement,
} from "react";
import TopNavBar from "@components/molecules/TopNavBar/TopNavBar";

import Footer from "@components/molecules/Footer/Footer";
import { NoSsr } from "@mui/material";

interface MainLayoutProps {
	children?: ReactElement<any, string | JSXElementConstructor<any>>;
} //Closes MainLayout prop types

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<TopNavBar />
			{children}
			<NoSsr>
				<Footer />
			</NoSsr>
		</>
	);
}; //Closes MainLayout component

export default MainLayout;
