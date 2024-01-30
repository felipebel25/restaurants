import { ReactElement } from "react";
import MainLayout from "@components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { SolutionsContent } from "@components/organisms/Solutions/Solutions";
import Head from "next/head";

const Solutions: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Solutions  | Eatsy</title>
			</Head>
			<SolutionsContent />
		</>
	);
}; //Closes Home page

Solutions.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
}; //Closes Layout helper

export default Solutions;
