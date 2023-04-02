import withCounter from './HOC/withCounter'

const HoverCounter = (props) => {
    const { count, incrementCount} = props;
    return (
        <div>
           <h1 type="button" onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    )
}
export default withCounter(HoverCounter)

// without using higher order components
// import React from "react";

// export default class HoverCounter extends React.Component{
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
//                 <h1 type="button" onMouseOver={this.incrementCount}>Hovered {count} times</h1>
//             </div>
//         )
//     }
// }