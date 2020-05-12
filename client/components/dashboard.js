import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title"> Dashboard </div>
      <Link to="/dashboard/profile/d8726345-f8b6-4817-bad3-c59175cecb51"> Go To Profile </Link>
      <Link to="/dashboard/main"> Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
