import React from 'react' 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <p>GetMeAChai - © {currentYear} All rights reserved </p>
      <ul className="flex space-x-4">
        <li>Privacy Policy</li>
        <li>Terms of Service</li> 
      </ul>
    </footer>
  )
}

export default Footer
