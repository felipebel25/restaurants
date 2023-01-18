import Box from "@mui/material/Box";

import { FunctionComponent, JSXElementConstructor, ReactElement } from "react";
import TopNavBar from "../../molecules/TopNavBar/TopNavBar";

interface MainLayoutProps {
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
} //Closes MainLayout prop types

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <TopNavBar />
      <Box> {children}</Box>
    </>
  );
}; //Closes MainLayout component

export default MainLayout;
