import React from 'react'
import Cards from '../Components/Cards'
import Navbar from '../Components/Navbar'
import Sidebar from './Sidebar'
import "../Styles/Dashboard.css"
const Dashboard = () => {
  return (
      <>
     <div>
         <Navbar/>
         <Cards/>
     </div>
      </>
   
  )
}

export default Dashboard