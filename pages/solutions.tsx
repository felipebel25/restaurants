import { Fragment, ReactElement } from "react";
import MainLayout from "@components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { SolutionsContent } from "@components/organisms/Solutions/Solutions";



const Solutions: NextPageWithLayout = () => {

  return (
    <Fragment >
      <SolutionsContent/>
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