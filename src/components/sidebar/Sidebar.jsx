import "./sidebar.scss";
import {Dashboard, GroupOutlined, StoreOutlined, Payment, LocalShipping, Assessment, NotificationsNone, HealthAndSafety, PsychologyOutlined, SettingsOutlined, AccountCircleOutlined, LogoutOutlined} from "@mui/icons-material";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="menuLink">
        <span className="logo">Admin (suddhu)</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" className="menuLink">
          <li>
            <GroupOutlined className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" className="menuLink">
          <li>
            <StoreOutlined className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <Payment className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <Assessment className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafety className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlined className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlined className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <hr />
      <p className="title">THEMES</p>
      <div className="bottom">
        <div className="colorOptions" onClick={()=> dispatch({type: "LIGHT"})}></div>
        <div className="colorOptions" onClick={()=> dispatch({type: "DARK"})}></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
