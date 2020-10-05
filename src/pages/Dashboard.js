import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import Spinner from "../components/common/Spinner";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <>
        <Spinner />
        <Navbar />
        <Search />
      </>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
