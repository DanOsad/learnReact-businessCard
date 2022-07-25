import React from "react"
import profilePhoto from "../images/profile.webp"

export default function Profile() {
    return (
        <>
            <img src={profilePhoto} alt="Dan Osadtsuk Headshot" className="profile-img" />
        </>
    )
}