import { useState } from 'react'
import solidRockLogo from './assets/logoSRD_svg.svg'
import rock from './assets/rock.svg'
import './App.css'

function App() {

  return (
    <div className='parkingContainer'>
      <div className='parkingLogoContainer'>
        <a href={`https://www.solidrockdesigns.io`}>
          <img src={solidRockLogo} className="parkingLogoImage" />
        </a>
      </div>
      <div className="parkingImageContainer">
        <h1 className="underTextH1">
            <span>Under</span> {" "}
            <span className="text-gradient">Construction</span> {" "}
        </h1>
        <div className="underTextP">
          <p>We are working on a brilliant site.
           please check back soon!</p>
        </div>

        <img src={rock} className='rockImage'/>
        <div className="parkingImageGradient1 absolute z-[0] w-[40%] h-[35%] top-0 my_orange__gradient" />
        <div className="parkingImageGradient2 absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 my_blue__gradient" />
        <div className="parkingImageGradient3 absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        
      </div>
      
    </div>
  )
}

export default App
