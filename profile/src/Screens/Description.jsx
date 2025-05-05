import React from 'react'
import { Box, Typography, Grid, Container, Paper, Avatar } from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import CodeIcon from '@mui/icons-material/Code'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import WebIcon from '@mui/icons-material/Web'
import FavoriteIcon from '@mui/icons-material/Favorite'

const services = [
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#c75bff' }} />,
    title: 'Ui/Ux Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod volutpat.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: '#fcb300' }} />,
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod volutpat.',
  },
  {
    icon: <CameraAltIcon sx={{ fontSize: 40, color: '#a48dfc' }} />,
    title: 'Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod volutpat.',
  },
  {
    icon: <CameraAltIcon sx={{ fontSize: 40, color: '#ff4f81' }} />,
    title: 'Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod volutpat.',
  },
  {
    icon: <ManageAccountsIcon sx={{ fontSize: 40, color: '#ff69c0' }} />,
    title: 'Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod volutpat.',
  },
  {
    icon: <WebIcon sx={{ fontSize: 40, color: '#00bfff' }} />,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod volutpat.',
  },
]

const clientLogos = [
  'https://via.placeholder.com/80x40?text=Logo+1',
  'https://via.placeholder.com/80x40?text=Logo+2',
  'https://via.placeholder.com/80x40?text=Logo+3',
  'https://via.placeholder.com/80x40?text=Logo+4',
  'https://via.placeholder.com/80x40?text=Logo+5',
]

const Description = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', color: '#fff', py: 8 }}>
      <Container maxWidth="lg">
        {/* ABOUT ME TITLE */}
        <Box display="flex" alignItems="center" mb={4}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            sx={{
              borderLeft: '4px solid #ff007f',
              pl: 2,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              height: 2,
              flexGrow: 1,
              backgroundColor: '#ff007f',
              ml: 2,
            }}
          />
        </Box>

        {/* ABOUT TEXT */}
        <Typography variant="body1" color="gray" mb={2}>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </Typography>
        <Typography variant="body1" color="gray" mb={5}>
          My aim is to bring across your message and identity in the most
          creative way. I created web design for many famous brand companies.
        </Typography>

        {/* WHAT I DO */}
        <Typography variant="h5" fontWeight="bold" mb={3}>
          What I do!
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  backgroundColor: '#1e1e1e',
                  border: '1px solid #ffffff33',
                  borderRadius: 3,
                  p: 3,
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
                  },
                }}
              >
                <Box mb={2}>{service.icon}</Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="white"
                  gutterBottom
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="gray">
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* MY CLIENTS */}
        <Typography variant="h5" fontWeight="bold" mt={8} mb={3}>
          My Client!
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          {clientLogos.map((logo, index) => (
            <Avatar
              key={index}
              src={logo}
              variant="rounded"
              sx={{
                width: 80,
                height: 40,
                backgroundColor: 'white',
                p: 1,
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Description
