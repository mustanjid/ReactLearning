import React from 'react';
import ClickCounter from './components/ClickCounter'
import Section from './components/Section';
import CountereWithChildren from './components/CountereWithChildren'

export default class App extends React.Component {
  state = {
    theme: 'dark'
  }
  render(){
    const {theme} = this.state;
    return (
      <div className='app'>
  
        <CountereWithChildren>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </CountereWithChildren>

        <Provider value={}>
            <Section theme={theme}/>
        </Provider>

      </div>
    )
  }
}

