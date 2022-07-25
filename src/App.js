import React from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Profile from "./components/Profile"

export default function App() {
    return (
        <div className="container">
            <Profile />
            <Main />
            <Footer />
        </div>
    )
}
