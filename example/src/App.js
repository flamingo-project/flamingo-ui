import React from 'react'

import { Fade, Button,Type } from 'flamingo-ui'
import 'flamingo-ui/dist/index.css'

const App = () => {
  return (
    <div className="m-16">
      <Fade from="t" >
        <Button className="uppercase" bgColor="red-500" value="asd" duration="0.8" onClick={() => alert("asd")}/>
      </Fade>
      <Type value="Flamingo Project - I LOVE YOU" />
    </div>
  )
}

export default App
