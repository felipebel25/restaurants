
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";
import MainLayout from "../components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {

  return <Typography variant="h1">HOME</Typography>

}//Closes Home page

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}//Closes Layout helper


export default Home;