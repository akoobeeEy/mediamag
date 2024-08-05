import Header from "@/components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="bg-bodyColor">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
