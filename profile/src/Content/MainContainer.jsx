import React, { useState } from 'react'
import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Navbar from '../layout/Navbar.jsx'
import AboutMe from '../Screens/AboutMe.jsx'
import Containers from './Containers.jsx'
import { motion } from 'framer-motion'

// Styled card
const StyledCard = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0F0F0F',
  border: '1px solid white',
  borderRadius: '20px',
  padding: theme.spacing(2),
  color: 'white',
  boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.05)',
}))

const MainContainer = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container
      fixed
      maxWidth="xl"
      sx={{
        background: 'linear-gradient(to right, #1f1f1f, #121212)',
        color: '#fff',
        py: 8,
        minHeight: '100vh',
      }}
    >
      {/* Always show Navbar at the top */}
      <Box mb={4}>
        <StyledCard>
          <Navbar
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
          />
        </StyledCard>
      </Box>

      <Box sx={{ flexGrow: 1 }} p={2}>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              <StyledCard>
                <AboutMe />
              </StyledCard>
            </motion.div>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={8}>
            <StyledCard>
              <Containers activeNavItem={activeNavItem} />
            </StyledCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default MainContainer
