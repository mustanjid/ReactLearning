import React from 'react'
/* princiapal component whic is working as a intermediary 
betweeen clickcount and hovercount persentational components */
class Counter extends React.Component {
    state = {
        count: 0,
    }

    incrementCount = () => {
        this.setState( (prevState) => ({ count: prevState.count + 1 }))
    }

    render(){
        const { render } = this.props;
        const {count} = this.state;
        return render(count, this.incrementCount)
    }
}

export default Counter;