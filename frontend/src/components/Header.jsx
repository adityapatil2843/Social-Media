import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <header className="min-h-screen mb-4 bg-cover bg-center flex flex-col items-center w-full overflow-hidden"
      style={{
       backgroundImage: `url('./src/assets/sample_cover.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        this is header
      </header>
    </div>
  )
}

export default Header
