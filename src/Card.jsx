import React from 'react'
import './style.css'

function Card(props) {
    return(
        <React.Fragment>
            <div className = "all-cards"> 
                <div className = "single-card">
                    <img className = "card-img" src = {props.osImg} alt = "distro-img" style = { {height: '280px'} }/>
                    <div className = "other-card-info">
                        <span className = "distro-name"> {props.osName} </span> <br /> 
                        <span className = "pkg-mngr"> {props.osPkgMngr} </span> <br /> <br />
                        <a href = {props.osURLL} target = "blank">
                            <button class = "card-btn"> Download Now </button>
                      </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card
