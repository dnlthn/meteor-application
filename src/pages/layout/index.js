import React, { Fragment } from 'react';
import { Consumer as NavigationConsumer } from '../../context/navigation';
import NavBar from '../../components/navbar';

const Layout = ({ page }) => (
  <NavigationConsumer>
    {({ navigate_to }) => (
      <Fragment>
        <NavBar />
        {page}
      </Fragment>
    )}
  </NavigationConsumer>
);
export default Layout;
