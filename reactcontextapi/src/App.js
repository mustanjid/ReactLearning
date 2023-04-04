import React from 'react';
import ClickCounter from './components/ClickCounter'
import Section from './components/Section';
import CountereWithChildren from './components/CountereWithChildren'
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component {
  state = {
    theme: 'light'
  }
  render(){
    const {theme} = this.state;
    return (
      <div>
  
        <CountereWithChildren>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </CountereWithChildren>

        <ThemeContext.Provider value={ {theme: theme} }>
            <Section />
        </ThemeContext.Provider>

      </div>
    )
  }
}

