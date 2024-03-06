import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import ProjectsCard from "../../components/Projects/ProjectsCard";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="Our Project"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Our Project"
      />

      <ProjectsCard />

      <Footer />
    </>
  );
}
