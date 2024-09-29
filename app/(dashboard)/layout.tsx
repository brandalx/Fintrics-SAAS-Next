import { Header } from "@/components/header";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main className="">
        <Header />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
