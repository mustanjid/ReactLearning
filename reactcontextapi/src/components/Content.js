import CounterWithChildren from './CountereWithChildren'
import HoverCounter from './HoverCounter'

export default function Content({theme}){
    return(
        <div>
            <h1>This is a content</h1>
            <CounterWithChildren>
                {(counter, incrementCount) => {
                    return <Consumer> { (value) =>  <HoverCounter count={counter} incrementCount={incrementCount}
                     theme={theme} />} </Consumer>
                }}
            </CounterWithChildren>
        </div>
    )
}