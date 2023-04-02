// presentational component
export default function HoverCounter ( {count, incrementCount} ){
        return (
            <div className="app">
                <h2 type="button" onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
}