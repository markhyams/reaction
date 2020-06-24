import React from "react";
import { Route } from "react-router-dom";
import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./board/BoardContainer";

const Application = () => {
  return (
    <div>
      <TopNav />
      <Route path="/boards/:id" exact component={BoardContainer} />
      <Route path="/" exact component={BoardsDashboardContainer} />
    </div>
  );
};

export default Application;
