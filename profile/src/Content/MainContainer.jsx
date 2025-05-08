import React, { useState } from 'react'
import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Navbar from '../layout/Navbar'
import AboutMe from '../Screens/AboutMe.jsx'
import Containers from './Containers.jsx'
import { motion } from 'framer-motion'

// Define styled Item component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '25px',
}))

const MainContent = () => {
  const [activeNavItem, setActiveNavItem] = useState('description')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md')) // Mobile detection

  return (
    <Container fixed maxWidth="xl" sx={{ mt: 10 }}>
      {/* Display Navbar on mobile */}
      {isMobile && (
        <Navbar
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
      )}
      <Box sx={{ flexGrow: 1 }} p={2} mt={2}>
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <motion.div
              className="box"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            >
              <Item sx={{ bgcolor: '#2C3E50', color: 'white' }}>
                <AboutMe />
              </Item>
            </motion.div>
          </Grid>

          {/* Right Column */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              height: activeNavItem === 'contact' ? '35rem' : 'auto',
            }}
          >
            {/* Navbar for larger screens */}
            {!isMobile && (
              <Item sx={{ mb: 2, bgcolor: '#2C3E50', color: 'white' }}>
                <Navbar
                  activeNavItem={activeNavItem}
                  setActiveNavItem={setActiveNavItem}
                />
              </Item>
            )}

            {/* Main Content */}
            <Item sx={{ bgcolor: '#2C3E50', color: 'white' }}>
              <Containers activeNavItem={activeNavItem} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default MainContent
