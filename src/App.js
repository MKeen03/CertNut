import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import vars from "./utility/vars";

const App = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginLeft: `${vars.drawerWidth + 40}px`,
          marginTop: "100px",
          width: "600px",
          height: "350px",
          alignItems: "center",
          borderRadius: "30px",
          boxShadow: 12,
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default App;
