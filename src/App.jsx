import React from 'react'
import Card from './Card.jsx'
import Database from './Database.js'

function App() {
    return(
        <React.Fragment>
            {
                Database.map( (value, index) => {
                    return(
                        <Card
                            key = {value.id}
                            osImg = {value.osImg}
                            osURLL = {value.osURL}
                            osPkgMngr = {value.osPkgMngr}
                            osName = {value.osName}
                        />
                    );
                })
            }
        </React.Fragment>
    );
}

export default App
