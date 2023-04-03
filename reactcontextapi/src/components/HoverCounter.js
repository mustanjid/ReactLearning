// presentational component
export default function HoverCounter ( {count, incrementCount, theme} ){
        const style = theme === 'dark' ? {
            backgroundColor: '#000000',
            color: '#ffffff'
        } : null;

        return (
            <div className="app">
                <h2 type="button" style={style} onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
}