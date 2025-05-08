import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'

import {
  Button,
  ListItemIcon,
  ListItemButton,
  Divider,
  ListItemText,
  ListItem,
  Typography,
  List,
  Avatar,
  Box,
  Card,
  Menu,
  MenuItem,
  IconButton,
  Stack,
  Paper,
} from '@mui/material'

import WordIcon from '@mui/icons-material/Description'
import PDFIcon from '@mui/icons-material/PictureAsPdf'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PinDropIcon from '@mui/icons-material/PinDrop'
import CakeIcon from '@mui/icons-material/Cake'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

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

// import { saveAs } from 'file-saver'

// import cv from '../file/DjebbiSafwen.pdf'
// import cvdocs from '../file/DjebbiSafwen.docx'

const style = {
  width: '100%',
  bgcolor: '#2C3E50',
}

const AboutMe = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const downloadFile = (file, fileName) => {
  //   fetch(file)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       saveAs(blob, fileName)
  //     })
  //     .catch((error) => {
  //       console.error('Error downloading the file:', error)
  //     })
  // }

  // const handleDownloadPDF = () => {
  //   downloadFile(cv, 'DjebbiSafwen.pdf')
  //   handleClose()
  // }

  // const handleDownloadWord = () => {
  //   downloadFile(cvdocs, 'DjebbiSafwen.docx')
  //   handleClose()
  // }

  const handleWhatsAppCall = () => {
    let phoneNumber = '+21626706437'
    // Construct the WhatsApp call link
    const whatsappCallLink = `https://wa.me/${phoneNumber}`

    // Open the WhatsApp call link in a new tab/window
    window.open(whatsappCallLink, '_blank')
  }
  return (
    <Box sx={{ position: 'relative', paddingY: 7, width: '40vh' }}>
      <Avatar
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
      >
        'Avatar'
      </Avatar>

      <Box sx={{ zIndex: 1, margin: 2 }}>
        <List sx={style} component="div" aria-label="mailbox folders">
          <ListItem
            sx={{ color: '#ECF0F1', bgcolor: '#34495E', borderRadius: '4px' }}
          >
            <ListItemText
              sx={{
                color: '#5c6bc0',
                display: 'flex',
                justifyContent: 'center',
              }}
              primary={
                <Typography variant="h6" fontWeight="bold" color="white">
                  "name"
                </Typography>
              }
            />
          </ListItem>
          <Divider sx={{ marginTop: '10px', borderColor: '#D74B76' }} />
          <ListItem
            divider
            sx={{
              bgcolor: '#222',
              borderRadius: '4px',
              margin: '10px 10px 10px 0',
            }}
          >
            <ListItemText
              sx={{
                color: '#E2DFD0',
                display: 'flex',
                justifyContent: 'center',
              }}
              style={{ fontFamily: 'cursive' }}
              primary={
                <Typewriter
                  options={{
                    strings: ['web', 'design', 'dataweb'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              }
            />
          </ListItem>
          <Divider sx={{ borderColor: '#D74B76' }} />
          {/* Social Buttons */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            mb={2}
            mt={2}
          >
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
        </List>
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                boxShadow: '0 0 12px #ff416c',
              },
            }}
            // fullWidth
            endIcon={<CloudDownloadIcon />}
            onClick={handleClick}
          >
            Télécharger CV
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleDownloadPDF}>
              <ListItemIcon>
                <PDFIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Download as PDF" />
            </MenuItem>
            <MenuItem onClick={handleDownloadWord}>
              <ListItemIcon>
                <WordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Download as Word" />
            </MenuItem> */}
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutMe
