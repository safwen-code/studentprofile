import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AboutMe from '../Screens/AboutMe'
import Navbar from '../layout/Navbar'

const MainContainer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at left, #2d0b3f, #121212)',
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* LEFT SIDEBAR */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#0f0f0f',
              borderRadius: 3,
              p: 3,
              height: '100%',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <AboutMe />
          </Box>
        </Grid>

        {/* RIGHT SECTION */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {/* FLOATING NAVBAR */}
            <Box
              sx={{
                backgroundColor: '#0f0f0f',
                borderRadius: 3,
                p: 1,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                // maxWidth: 400,
                mx: 'auto',
              }}
            >
              <Navbar />
            </Box>

            {/* MAIN CONTENT CARD */}
            <Box
              sx={{
                backgroundColor: '#0f0f0f',
                borderRadius: 3,
                p: 4,
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
              }}
            >
              <Container />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainContainer
