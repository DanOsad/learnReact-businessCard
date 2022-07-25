import React from "react"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"

export default function Main() {
    return (
        <div className="mainSection">
            <Info />
            <About />
            <Interests />
        </div>
    )
}