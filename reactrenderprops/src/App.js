import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import CountereWithChildren from './components/CountereWithChildren'
import CounterWithRender from './components/CounterWithRender'

function App() {
  return (
    <div className='app'>
      {/* react render props - take controls of what to render with building logics */}
      {/* <User render={ (isLoggedIn)=> isLoggedIn? "Arif": "Guest" } /> */}

      <h1>CounterWithRender</h1>
      <CounterWithRender render={ (counter, incrementCount) => (
        <ClickCounter count={counter} incrementCount={incrementCount} />
      )}/>

      {/* render props in a manual mode */}
      <CounterWithRender render={ (counter, incrementCount) => (
        <HoverCounter count={counter} incrementCount={incrementCount} />
      )}/>

      {/* render props in automatic mode without using func name like render = {} */}
      <h1>CountereWithChildren</h1>
      <CountereWithChildren>
        {(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </CountereWithChildren>

    </div>
  )
}

export default App;
