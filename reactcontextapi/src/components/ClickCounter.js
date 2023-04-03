// presentational component
export default function ClickCounter({count, incrementCount}) {
    return (
        <div className="app">
            <button type="button" onClick={incrementCount}>Click {count} times</button>
        </div>
    )
}