import React from 'react'
import png from '../assets/man_image.png'
import '../App.css'

const Main = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <h1>An inspiring design delivered to your inbox every morning</h1>
                            <p>
                                Our team scouts the internet for the best designs, illustrations
                                and art and delivers a truly inspiring one every day to your inbox
                            </p>
                            <h4>Show me how it looks</h4>
                            <form>
                                <input
                                    className="input"
                                    type="text"
                                    name="email"
                                    placeholder="Your e-mail address"
                                />
                                <button type="submit" className="btn">Register Now</button>
                            </form>
                            <span>Free - No Spam - No Data Sharing</span>
                        </div>
                        <div className="image">
                            <img src={png} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main