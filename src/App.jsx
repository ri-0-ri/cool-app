import {LeftPane} from "../src/mainapp/components/left-side/left-pane"
import './App.css'
import {MiddlePane} from '../src/mainapp/components/middle/middle-pane'
import {RightPane} from '../src/mainapp/components/right-side/right-pane'

function App() {

  return (
    <main>
      <LeftPane/>
      <MiddlePane/>      
      <RightPane/>
    </main> 
  )
}

export default App
