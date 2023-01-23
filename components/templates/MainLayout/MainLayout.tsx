import { Fragment, FunctionComponent, JSXElementConstructor, ReactElement } from "react";
import TopNavBar from "@components/molecules/TopNavBar/TopNavBar";

interface MainLayoutProps {
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
} //Closes MainLayout prop types

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <TopNavBar />
      {children}
    </Fragment>
  );
}; //Closes MainLayout component

export default MainLayout;
