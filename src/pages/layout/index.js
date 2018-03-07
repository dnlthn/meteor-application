import React from 'react';
import NavBar from '../../components/navbar';
import glamorous from 'glamorous';

const Container = glamorous.div({
  maxWidth: '1000px',
  background: '#ffffff',
  borderRight: '1px solid #DAE1E7',
  borderLeft: '1px solid #DAE1E7',
  height: '100vh',
  width: '1000'
});

const Layout = ({ page }) => (
  <Container>
    <NavBar />
    {page}
  </Container>
);
export default Layout;
