import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
  return (
    <section className='error-page'>
      <div className='error-container'>
        <h1>oops! it's dead end</h1>
        <Link to="/" className='btn'>back to home</Link>
      </div>
    </section>
  )
}

export default Error
