import { Fragment, ReactElement } from "react";
import MainLayout from "@components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { PlansContent } from "@components/organisms/Plans/Plans";



const Solutions: NextPageWithLayout = () => {

  return (
    <Fragment >
      <PlansContent/>
    </Fragment>
  )

}//Closes Home page

Solutions.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}//Closes Layout helper


export default Solutions;