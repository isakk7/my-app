
import React, { useState } from 'react'
import '../styles/main.scss'
import me from '../assets/mee.png'
// import * as Icon from 'react-bootstrap-icons';
import { SiClickup, SiDropbox,SiElastic,  } from "react-icons/si";

const Main = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                           
                            <h1>Isaac Adan Lopez</h1>
                            <h5>Soy una persona que le gusta mucho la tecnologia, y me gustaria aprender mucho mas una vez terminada la carrera.
                                </h5>
                    </div>
                    <div className='button'>
                    <button onClick={()=> setCount ((current) => current +1 )}>Contador de visitas </button>
                    </div>
                    <h2>Contador: {count}</h2>
                </div>


                <div className="main__img">
                    <img src={me} alt="" />
                </div>


            </div>
            <div className="buttons">
                        <button ><SiClickup />ClickUp</button>
                        <button><SiDropbox/>Dropbox</button> 
                        <button>PAYCHEX</button>
                        <button><SiElastic/>elastic</button>
                        <button>STRIPE</button>
  
                    </div>
                   

        </div>
    )
}


export default Main
