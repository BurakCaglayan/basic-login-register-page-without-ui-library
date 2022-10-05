import { useState } from "react";
import Card from "../../components/UI/card/Card";
import Tabs from "../../components/UI/tabs/Tabs";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";

const Home = () => {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <div className="home">
      <Card
        header={
          <Tabs setSelectedView={setSelectedView} selectedView={selectedView} />
        }
        content={selectedView === 1 ? <Login /> : <Register />}
      />
    </div>
  );
};

export default Home;
