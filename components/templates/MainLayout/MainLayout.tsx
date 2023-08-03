import {
	Fragment,
	FunctionComponent,
	JSXElementConstructor,
	ReactElement,
} from "react";
import TopNavBar from "@components/molecules/TopNavBar/TopNavBar";

import Footer from "@components/molecules/Footer/Footer";

interface MainLayoutProps {
	children?: ReactElement<any, string | JSXElementConstructor<any>>;
} //Closes MainLayout prop types

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<TopNavBar />
			{children}
			<Footer />
		</Fragment>
	);
}; //Closes MainLayout component

export default MainLayout;
