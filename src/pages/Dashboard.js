import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { loading } = React.useContext(GithubContext);

  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt='Loading...' className='loading-img' />
      </main>
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
