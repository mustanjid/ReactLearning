import Emoji from "./composition/Emoji"
import Bracket from "./composition/Bracket"
import Text from "./composition/Text"

function App() {
  return (
      <Emoji>
          { ({ addEmoji }) => (
              <Bracket>
                  { ({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
              </Bracket>
          )}
      </Emoji>
  );
}

export default App;