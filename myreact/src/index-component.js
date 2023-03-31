import React from 'react';
import ReactDOM from 'react-dom';

//React is a vanilla Javascript only
// element only in react - its js object


const elementWithoutFunc = (
    <h1 className='heading'>
        <span>Hello {new Date().toLocaleString()}</span>
    </h1>
)


//make it functional and return - this is called component in react
function Clock({ locale }){ //functional - component
   return (
    // element
        <h1 className='heading'>
            <span>Hello {new Date().toLocaleString(locale)}</span>
        </h1>
    )
}

//ReactDOM.render(clock(), document.getElementById("root"))
//ReactDOM.render(<clock />, document.getElementById("root"))
//ReactDOM.render(<Clock locale="bn-BD"/>, document.getElementById("root"))

//class component without React parent class in react
class ClockClass{
   print(){
    return (
        <h1 className='heading'>
            <span>Hello {new Date().toLocaleString()}</span>
        </h1>
    )
   } 
}
const ClockComponent = new ClockClass();
//ReactDOM.render(ClockComponent.print(), document.getElementById("root"))

//class component with React parent class - also called stateful component
class ClockWithReactClass extends React.Component {
    render(){
        return (
            <h1 className='heading'>
                <span>Hello - {this.props.children} 
                {new Date().toLocaleString(this.props.locale)}
                </span>
            </h1>
        )
    }
}

ReactDOM.render(<ClockWithReactClass locale = "bn-BD">test</ClockWithReactClass>, document.getElementById('root'))