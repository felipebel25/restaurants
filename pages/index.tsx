import { Fragment, ReactElement } from "react";
import MainLayout from "@components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { HomeContent } from "@components/templates/Home/Home";
import { Box } from "@mui/material";


const Home: NextPageWithLayout = () => {

  return (
    <Fragment >
      <Box style={{ backgroundColor: 'white' }}>
        <HomeContent />
      </Box>
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