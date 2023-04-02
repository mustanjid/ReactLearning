import withCounter from './HOC/withCounter'

const ClickCounter = (props) => {
    const { count, incrementCount} = props;
    return (
        <div>
           <button type="button" onClick={incrementCount}> Click {count} times</button> 
        </div>
    )
}

export default withCounter(ClickCounter)

// without using higher order components
// import React from "react";

// export default class ClickCounter extends React.Component{
//     state = {
//         count: 0,
//     }

//     incrementCount = () => {
//         this.setState( (prevState) => ({ count: prevState.count + 1 }))
//     }
    
//     render(){
//         const {count} = this.state
//         return (
//             <div className="app">
//                 <button type="button" onClick={this.incrementCount}>Click {count} times</button>
//             </div>
//         )
//     }
// }