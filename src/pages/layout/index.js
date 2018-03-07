import React from 'react';
import glamorous from 'glamorous';

import Header from '../../components/header';
import Hero from '../../components/hero';

const Container = glamorous.div({
  width: '1000px',
  background: '#ffffff',
  borderRight: '1px solid #DAE1E7',
  borderLeft: '1px solid #DAE1E7',
  borderBottom: '1px solid #DAE1E7',
  marginTop: '10px'
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
