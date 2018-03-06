import React, { Fragment } from 'react';
import { Consumer as NavigationConsumer } from '../../context/navigation';

const Layout = ({ page }) => (
  <NavigationConsumer>
    {({ navigate_to }) => (
      <Fragment>
        <button onClick={navigate_to.about}>About</button>
        <button onClick={navigate_to.tech}>Tech</button>
        <button onClick={navigate_to.feedback}>Feedback</button>
        <button onClick={navigate_to.resume}>Resume</button>
        {page}
      </Fragment>
    )}
  </NavigationConsumer>
);
export default Layout;
