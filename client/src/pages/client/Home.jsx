import { Fragment } from "react";
import Navbar from "../../components/client/UI/nav/Navbar";
import ServiceLayout from "../../components/client/Layout/ServiceLayout";

const Home = () => {
  return (
    <Fragment>
      <header className="container">
        <Navbar />
      </header>
      <main>
        <ServiceLayout />
      </main>
    </Fragment>
  );
};

export default Home;
