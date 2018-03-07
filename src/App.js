import React, { Component } from 'react';
import { Provider as NavigationProvider } from './context/navigation';
import Layout from './pages/layout';

import About from './pages/about';
import Tech from './pages/tech';
import Feedback from './pages/feedback';
import Resume from './pages/resume';

class App extends Component {
  state = {
    page: <About />,
    showHero: true
  };
  render() {
    return (
      <NavigationProvider
        value={{
          current_page_name: this.state.current_page_name,
          navigate_to: {
            about: () => this.setState({ page: <About />, showHero: true }),
            tech: () => this.setState({ page: <Tech />, showHero: false }),
            feedback: () =>
              this.setState({
                page: <Feedback />,
                showHero: false
              }),
            resume: () => this.setState({ page: <Resume />, showHero: false })
          }
        }}
      >
        <Layout {...this.state} />
      </NavigationProvider>
    );
  }
}

export default App;
