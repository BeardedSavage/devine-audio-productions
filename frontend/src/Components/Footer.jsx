import React from "react";

function Footer() {
    return (
        <div className="footerContainer">
            <footer>
                <div>
                    <h3>Here are our socials</h3>
                </div>
                <div>
                    <p>&copy; Devine Audio Productions {new Date().getMonth()}/{ new Date().getDay() }/{ new Date().getFullYear() }</p>
                </div>
                <div>
                    <a href="">
                        <img src="/public/facebook.png" alt="facebook" />
                    </a>
                    <a href="">
                        <img src="/public/instagram.png" alt="instagram" />
                    </a>
                    <a href="">
                        <img src="/public/youtube.png" alt="youtube" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;