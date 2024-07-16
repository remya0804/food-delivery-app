import React from 'react'

import './AppDownload.css'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'

const AppDownload = () => {

  return (

    <div className="app-download" id='app-download'>

      <p>For better experience download <br /> Yumyum Express</p>

      <div className="download-platforms">

        <img src={playstore} alt="" />
        <img src={appstore} alt="" />
      </div>


    </div>
  )
}

export default AppDownload