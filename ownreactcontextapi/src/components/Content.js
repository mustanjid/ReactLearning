import CounterWithChildren from './CountereWithChildren'
import HoverCounter from './HoverCounter'
import ThemeContext from '../contexts/themeContext';

export default function Content(){
    return(
        <div>
            <h1>This is a content</h1>
            <CounterWithChildren>
            {(counter, incrementCount) => 
                (
                    <ThemeContext.Consumer> 

                        { ({theme}) =>  (

                        <HoverCounter 
                        count={counter} 
                        incrementCount={incrementCount}
                        theme={theme} 
                        />
                     
                     )} 
                     
                     </ThemeContext.Consumer>
                )
            }
            </CounterWithChildren>
        </div>
    )
}