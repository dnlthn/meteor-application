import React, { Component } from 'react';
import { Provider as NavigationProvider } from './context/navigation';
import Layout from './pages/layout';

import About from './pages/about';
import Tech from './pages/tech';
import Feedback from './pages/feedback';
import Resume from './pages/resume';

class App extends Component {
  state = {
    page: <About />
  };
  render() {
    return (
      <NavigationProvider
        value={{
          navigate_to: {
            about: () => this.setState({ page: <About /> }),
            tech: () => this.setState({ page: <Tech /> }),
            feedback: () => this.setState({ page: <Feedback /> }),
            resume: () => this.setState({ page: <Resume /> })
          }
        }}
      >
        <Layout page={this.state.page} />
      </NavigationProvider>
    );
  }
}

export default App;
