import React from 'react'
import {
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  Stack,
  Paper,
} from '@mui/material'
import {
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Cake,
  Download,
} from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball' // placeholder for Dribbble

const socialButtons = [
  { icon: <Facebook />, color: '#4267B2' },
  { icon: <Twitter />, color: '#1DA1F2' },
  { icon: <SportsBasketballIcon />, color: '#ea4c89' }, // Dribbble
  { icon: <LinkedIn />, color: '#0077B5' },
]

const AboutMe = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#111',
        borderRadius: 3,
        pt: 10, // Padding top to make room for floating image
        px: 2,
        pb: 3,
        maxWidth: 1000,
        mx: 'auto',
        textAlign: 'center',
        overflow: 'visible',
      }}
    >
      {/* Floating Profile Image */}
      <Avatar
        src="https://i.imgur.com/2Fxrh0u.png"
        alt="Monalisa Ashley"
        sx={{
          width: 120,
          height: 120,
          position: 'absolute',
          top: -60,
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: 3,
          border: '4px solid #111',
        }}
      />

      {/* Name & Title */}
      <Typography variant="h6" fontWeight="bold" color="white" mt={2}>
        Monalisa Ashley
      </Typography>
      <Typography
        variant="body2"
        color="gray"
        sx={{
          background: '#222',
          borderRadius: 1,
          px: 1.5,
          py: 0.5,
          display: 'inline-block',
          my: 1,
        }}
      >
        Ui/Ux Designer
      </Typography>

      {/* Social Buttons */}
      <Stack direction="row" justifyContent="center" spacing={1} mb={2}>
        {socialButtons.map((item, index) => (
          <IconButton
            key={index}
            sx={{
              color: '#fff',
              backgroundColor: item.color,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: `0 0 8px ${item.color}`,
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>

      {/* Info Cards */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: '#222',
          p: 2,
          borderRadius: 3,
          color: '#fff',
          mb: 2,
        }}
      >
        {[
          {
            icon: <Phone sx={{ color: '#ff4081' }} />,
            title: 'Phone',
            value: '+123 456 7890',
          },
          {
            icon: <LocationOn sx={{ color: '#00e676' }} />,
            title: 'Location',
            value: 'Hong kong china',
          },
          {
            icon: <Email sx={{ color: '#f06292' }} />,
            title: 'Email',
            value: 'example@mail.com',
          },
          {
            icon: <Cake sx={{ color: '#9575cd' }} />,
            title: 'Birthday',
            value: 'May 27, 1990',
          },
        ].map((item, index) => (
          <Box key={index} display="flex" alignItems="center" py={1}>
            {item.icon}
            <Box ml={2} textAlign="left">
              <Typography fontSize={12} color="gray">
                {item.title}
              </Typography>
              <Typography fontSize={14} fontWeight="bold">
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>

      {/* Download Button */}
      <Button
        variant="contained"
        startIcon={<Download />}
        sx={{
          background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
            boxShadow: '0 0 12px #ff416c',
          },
        }}
        fullWidth
      >
        Download CV
      </Button>
    </Box>
  )
}

export default AboutMe
