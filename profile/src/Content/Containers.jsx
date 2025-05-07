import React from 'react'
import Description from '../Screens/Description'
import Project from '../Screens/Project'
import { Box } from '@mui/material'

const Containers = ({ activeNavItem }) => {
  return (
    <div className="col-md-8">
      {activeNavItem === 'Home' && <Description />}
      {activeNavItem === 'Works' && <Project />}
    </div>
  )
}

export default Containers
