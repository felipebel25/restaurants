import { ReactElement } from "react";
import Head from "next/head";

import MainLayout from "../../components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "../_app";
import { Register } from "@components/organisms/Register/Register";

const Registration: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Registration | Eatsy </title>
			</Head>
			<Register />
		</>
	);
}; //Closes Registration page

Registration.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
}; //Closes Layout helper

export default Registration;
