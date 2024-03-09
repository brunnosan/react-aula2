import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar";

const PageLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
 
export default PageLayout;