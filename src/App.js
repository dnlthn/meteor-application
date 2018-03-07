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
    current_page_name: 'about'
  };
  render() {
    return (
      <NavigationProvider
        value={{
          current_page_name: this.state.current_page_name,
          navigate_to: {
            about: () =>
              this.setState({ page: <About />, current_page_name: 'about' }),
            tech: () =>
              this.setState({ page: <Tech />, current_page_name: 'tech' }),
            feedback: () =>
              this.setState({
                page: <Feedback />,
                current_page_name: 'feedback'
              }),
            resume: () =>
              this.setState({ page: <Resume />, current_page_name: 'resume' })
          }
        }}
      >
        <Layout
          page={this.state.page}
          pageName={this.state.current_page_name}
        />
      </NavigationProvider>
    );
  }
}

export default App;
