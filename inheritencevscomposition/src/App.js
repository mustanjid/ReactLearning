import Emoji from "./composition/Emoji";
import Text from "./composition/Text";
import Bracket from "./composition/Bracket"

function App() {
  return (<Emoji>
    
    { ({addEmoji}) => <Bracket>
        
        { ({ addBracket }) =>  <Text addEmoji={addEmoji} 
        
        addBracket={addBracket} /> }
    
    </Bracket>}
  
  </Emoji>
  )
}

export default App;