import React from 'react'

const Header = ({headerTitle}) => {
  return (
    <h2 className="Header text-center">
    {
      headerTitle
    }
    </h2>
  )
}

export default Header;