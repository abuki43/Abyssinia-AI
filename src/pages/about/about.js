import React from 'react'
import "./about.css"
import Navbar from '../../components/Navbar/Navbar'

function About() {
    return (
        <>
        <div className='nav-container'>
            <Navbar />
        </div>
        <section class="about">
            <div class="container">
                <h2>About Our AI Chatbot</h2>
                <p class="description">
                    Our AI chatbot is designed to provide intelligent and personalized responses to your queries. It utilizes  natural language processing algorithms to understand and answer your questions accurately and efficiently. We integrate Chat-GPT API to enhance the chatbot's capabilities and ensure up-to-date information. Try it out and experience the power of AI-driven conversations!</p>
                <div class="social-media">
                    <a href="#" class="social-link">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://t.me/ABking1" className="social-link">
                        <i class="fab fa-telegram"></i>
                    </a>
                    <a href="https://www.instagram.com/abuki431/" class="social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </section></>
    )
}

export default About