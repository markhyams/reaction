import React from 'react';
import { Route } from 'react-router-dom';
import TopNav from './shared/TopNav';
import BoardsDashboardContainer from './dashboard/BoardsDashboardContainer';
import BoardContainer from './board/BoardContainer';
import LoadingSpinner from './shared/LoadingSpinner';
import CardContainer from './card/CardContainer';

const Application = props => {
  return (
    <div>
      {props.loading && <LoadingSpinner />}
      <TopNav />
      <Route
        path="/(boards|cards)/:id"
        exact
        component={BoardContainer}
      />
      <Route path="/cards/:id" exact component={CardContainer} />
      <Route path="/" exact component={BoardsDashboardContainer} />
    </div>
  );
};

export default Application;
