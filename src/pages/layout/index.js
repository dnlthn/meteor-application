import React from 'react';
import glamorous from 'glamorous';

import Header from '../../components/header';
import Hero from '../../components/hero';

const Container = glamorous.div({
  maxWidth: '1000px',
  background: '#ffffff',
  borderRight: '1px solid #DAE1E7',
  borderLeft: '1px solid #DAE1E7',
  borderBottom: '1px solid #DAE1E7',
  height: '100vh',
  width: '1000'
});

const BodyContainer = glamorous.div({
  padding: '0 4.5rem 2.5rem 4.5rem'
});

const Layout = ({ page, pageName }) => (
  <Container>
    {pageName === 'about' ? <Hero /> : <Header />}
    <BodyContainer>{page}</BodyContainer>
  </Container>
);
export default Layout;
