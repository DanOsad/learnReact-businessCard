import React from "react"

export default function Info() {
    return (
        <div id="info-section">
            <div id="info-personal">
                <h2 id="info-name">Dan Osadtsuk</h2>
                <h4 id="info-title">Full Stack Developer</h4>
                <a href="http://term.osadtsuk.com/" id="info-link">osadtsuk.com</a>
            </div>
            <div id="info-btns">
                <a href="mailto:dan@osadtsuk.com">
                    <button type="button" id="email-btn">
                    <i class="fa-solid fa-envelope fa-sm"></i>
                    <span>Email</span>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/dan-osadtsuk/">
                    <button type="button" id="linkedin-btn">
                    <i class="fa-brands fa-linkedin fa-sm"></i>
                    <span>LinkedIn</span>
                    </button>
                </a>
            </div>
        </div>
    )
}