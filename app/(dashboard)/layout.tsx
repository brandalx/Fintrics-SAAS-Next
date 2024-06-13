import { Header } from "@/components/ui/header";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main className="px-3 lg:px-14">
        <Header />
        Dashboard Page
        {/* {children} */}
      </main>
    </>
  );
};

export default DashboardLayout;
