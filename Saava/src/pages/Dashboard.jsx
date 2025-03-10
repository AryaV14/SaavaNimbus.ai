import React from "react";
import "./dashboard.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import InstanceChartContainer from "../components/InstanceChartContainer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-content">
          <div className="widgets">
            <Widget />
            <Widget />
          </div>
          <div className="charts">
            <Featured />
            <InstanceChartContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;