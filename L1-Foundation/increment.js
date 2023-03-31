// console.log(React)
// console.log(ReactDOM)

// //select the container
// const domContainer = document.querySelector()

// //React element - have features to create several elements
// const myElement = React.createElement("div", null, "Hello React First!") //takes 3 params - what element, data of element, content
// const myElement2 = React.createElement("div", null, React.createElement("p", null, "created this para by react create element feature"))

// const arrayElement = React.createElement("div", null, 
//     [
//         React.createElement("p", null, "created this para by react create element feature"),
//         React.createElement("p", null, "created this para by react create element feature")
//     ]
// )

//to show use render method of react dom
// render takes 2 params, 1- what to print 2- where to print

//ReactDOM.render(arrayElement, domContainer)

//React provides element creation way by the following Javascript XML - JSX, but to work need transpiler called babel
//must include babel script tag after react dom script tag. also change the type of js file to text/babel

// const anElement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increament +</button>
//         </div>
//     </div>
// )

const domContainer = document.querySelector("#root")
const Increment = () =>{
    const [counter, setCounter] = React.useState(0) //returns an array
    return (
        <div>
            {/* interpolation */}
        <h1 id="display">{ counter }</h1>
        <div>
            <button id="button" onClick = { () => setCounter(counter+1) }>Increament +</button>
            {/* to make funcationable then must assign arrow sign */ }
        </div>
        </div>
    )
}


ReactDOM.render(<Increment />, domContainer)