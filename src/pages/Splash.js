import React from 'react'

export const Splash = (props) => {
  return (
    <div className={props.fadeOut ? "splash animated fadeOut" : "splash"}>
    <div className="animated fadeIn">
      <img className="splashLogo animated pulse slow infinite" src="logo.png" alt="logo"></img>
      </div>
    </div>
  )
}
