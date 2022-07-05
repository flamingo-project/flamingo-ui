import React from 'react'

import { Fade, Button } from 'flamingo-ui'
import 'flamingo-ui/dist/index.css'

const App = () => {
  return (
    <div className="m-16">
      <Fade from="t" >
        <Button bgColor="red-500" value="asd" duration="0.8" onClick={() => alert("asd")}/>
      </Fade>
      
    </div>
  )
}

export default App
