import React from "react";
import { NavbarAdmin } from "../../components/Admin";
import { BigSidebar, SmallSidebar } from "../../components";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

function SharedLayoutAdmin() {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavbarAdmin />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayoutAdmin;
