export default function Button(){
    function handleClick(){
        alert('Clicked me')
    }

    function AlertButton ({msg, children}){
        return (
            <button onClick={ () => alert(msg)}>
                {children}
            </button>
        )
    }


    // passing event handlers as prop
    function PlayButton ({movieName}){
        function handleClick(){
            alert(`Playing ${movieName}`)
        }
        return (
            <button onClick={handleClick}>
                Play {movieName}
            </button>
        )
    }

    //event propagation
    function Btn({onClick, children}){
        return(
            <button onClick={e=> {e.stopPropagation(); onClick()}}>
                {children}
            </button>
        )
    }

    function Toolbar(){
        return(
            <div className="Toolbar" onClick={() => {
                alert('You clicked on the toolbar!');
              }}>
                <Btn onClick={() => alert('Playing!')}>
                  Play Movie
                </Btn>
                <Btn onClick={() => alert('Uploading!')}>
                  Upload Image
                </Btn>
              </div>
        )
    }

    return (
        <>
           <button onClick={handleClick}>
                I will do
            </button>
            <br />
            <button onClick={()=> alert('Clicked me too')}>
                I will do
            </button>
            <br />
            <AlertButton msg={"I appeared after click"}>
                Play movie
            </AlertButton>
            <br />
            <PlayButton movieName={"3 Idiots"} />
            <br />
            <Toolbar/>
        </>
    )
}