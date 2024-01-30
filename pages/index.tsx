import { ReactElement } from "react";
import MainLayout from "@components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { HomeContent } from "@components/templates/Home/Home";
import { Box } from "@mui/material";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Restaurants | Eatsy Orders</title>
			</Head>
			<Box style={{ backgroundColor: "#111111" }}>
				<HomeContent />
			</Box>
		</>
	);
}; //Closes Home page

Home.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
}; //Closes Layout helper

export default Home;
