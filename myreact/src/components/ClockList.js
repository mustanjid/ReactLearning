import Clock from './Clock'

export default function ClockList({ quantities = [1, 2, 3] }){
    
    return (
        <div>
            { quantities.map ( () => 
                <Clock key={Math.random()}/> 
            )}
        </div>
    )
}