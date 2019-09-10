import React from 'react'
import Text1 from '../assets/bodyModel_text1.png'
import Text2 from '../assets/bodyModel_text2.png'

import Text3 from '../assets/bodyModel_text3.png'
import Text4 from '../assets/bodyModel_text4.png'



import './BodyModel.css'


function BodyModel(){


    return(
    <div className='body-model-container'>
        <h1 className='body-model-title'>- SPECS -</h1>
        <div className = 'body-images-container'>
        <div className = 'left-body-model'>
            <div>

                <img className='body-text' src={Text1} />
               


            </div>
        </div>
        <div className = 'right-body-model'>
          <div>
            <img className='body-text' src={Text2} />
          </div>

        </div>
        </div>
    </div>
    )
}

export default BodyModel;