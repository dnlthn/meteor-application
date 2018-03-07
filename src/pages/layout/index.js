import React from 'react';
import Header from '../../components/header';
import glamorous from 'glamorous';

const Container = glamorous.div({
  maxWidth: '1000px',
  background: '#ffffff',
  borderRight: '1px solid #DAE1E7',
  borderLeft: '1px solid #DAE1E7',
  height: '100vh',
  width: '1000'
});

const BodyContainer = glamorous.div({
  padding: '0 4.5rem 0 4.5rem'
});

const Layout = ({ page }) => (
  <Container>
    <Header />
    <BodyContainer>{page}</BodyContainer>
  </Container>
);
export default Layout;
