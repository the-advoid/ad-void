import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <pre>
            ___        __   _    __        _      __
           /   |  ____/ /  | |  / /____   (_)____/ /
          / /| | / __  /   | | / // __ \ / // __  / 
         / ___ |/ /_/ /    | |/ // /_/ // // /_/ /  
        /_/  |_|\__,_/     |___/ \____//_/ \__,_/                                       
        </pre>   
      </div>
    </div>
  )
}

export default App
