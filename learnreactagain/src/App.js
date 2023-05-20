import Gallery from "./components/Gallery";
import Button from "./components/Button";
import ShowGallery from "./components/state/ShowGallery"
import ArrayInReact from "./components/ArrayInReact"
import SliceArray from "./components/SliceArray"
import Form from './components/ReactingToInputWithState/ReactingToInputWithState'
import AForm from './components/ReactingToInputWithState/AForm'
import StateStructure from './components/StateStructure/statestructure'
import FeebBackForm from './components/StateStructure/FeedBackForm'
import AvoidDuplication from './components/StateStructure/AvoidDuplication'
import AvoidNested from './components/StateStructure/AvoidNested/AvoidingNested'
import Accordion from "./components/SharingStateBetweenComponents/Childs/Accordion"
import SyncedInputs from "./components/SharingStateBetweenComponents/Syncedinputs ";
import FilteredList from "./components/SharingStateBetweenComponents/FilteringList/FilteringList";
import StateIsTiedToAPosition from './components/PreservingAndResettingState/Stateistiedtoaposition/Stateistiedtoaposition'

function App() {
  return (
    <>
      {/* <Gallery /> */}
      {/* <Button /> */}
      {/* <ShowGallery />
      <br />
      <ArrayInReact />
      <br />
      <SliceArray />
      <br />
      <br /> */}
      <Form />
      <br />
      <br />
      <AForm />
      <br />
      <h2>Changing State Structure</h2>
      <StateStructure />
      <br />
      <FeebBackForm  />
      <br />
      <AvoidDuplication />
      <br />
      {/* <AvoidNested /> */}
      <br />
      <Accordion />
      <br />
      <SyncedInputs />
      <br />
      <br />
      <FilteredList />
      <br />
      <StateIsTiedToAPosition/>
    </>
  );
}

export default App;
