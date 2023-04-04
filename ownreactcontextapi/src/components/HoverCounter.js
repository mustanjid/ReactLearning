// presentational component
export default function HoverCounter ( {count, incrementCount, theme} ){
        const style = theme === 'dark' ? {
            backgroundColor: '#000000',
            color: '#ffffff'
        } : null;

        return (
            <div>
                <h2 style={style} onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
}