import { Fragment, ReactElement } from "react";
import MainLayout from "@components/templates/MainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { CompanyContent } from "@components/organisms/Company/Company";



const Company: NextPageWithLayout = () => {

  return (
    <Fragment >
      <CompanyContent/>
    </Fragment>
  )

}//Closes Home page

Company.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}//Closes Layout helper


export default Company;