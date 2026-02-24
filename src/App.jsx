import './App.css'
import { TwoPanelSection } from './components/Section'

function App() {

  return (
    <div className="w-full m-auto bg">
      <div className="flex flex-col w-full m-auto justify-center">
        <div className="flex m-auto"> Larissa & Ivano </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row m-auto">
            <div className="m-2">Where & When</div>
            <div className="m-2">Travel & Accomodations</div>
            <div className="m-2">Fun Things To Do</div>
            <div className="m-2">RSVP</div>
          </div>
        </div>
        <TwoPanelSection
          leftContent={
            <div>
              Hello to my beautiful wife
            </div>
          }
          rightContent={
            <img className="w-fit" src='/kitty.jpeg'></img>
          }

          ></TwoPanelSection>
      </div> 
    </div>
  )
}

export default App
