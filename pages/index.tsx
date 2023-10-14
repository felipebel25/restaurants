import { ReactElement } from "react";
import MainLayout from "@components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { HomeContent } from "@components/templates/Home/Home";
import { Box } from "@mui/material";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Box style={{ backgroundColor: "#121212" }}>
				<HomeContent />
			</Box>
		</>
	);
}; //Closes Home page

Home.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
}; //Closes Layout helper

export default Home;
