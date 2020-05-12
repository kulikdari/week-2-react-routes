import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/d8726345-f8b6-4817-bad3-c59175cecb51"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
