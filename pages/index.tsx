import { Fragment, ReactElement } from "react";
import MainLayout from "@components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { HomeContent } from "@components/organisms/Home/Home";


const Home: NextPageWithLayout = () => {

  return (
    <Fragment >
      <HomeContent/>
    </Fragment>
  )

}//Closes Home page

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}//Closes Layout helper


export default Home;