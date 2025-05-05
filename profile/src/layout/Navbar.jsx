import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import DescriptionIcon from '@mui/icons-material/Description'
import WorkIcon from '@mui/icons-material/Work'
import ArticleIcon from '@mui/icons-material/Article'
import ContactsIcon from '@mui/icons-material/Contacts'
import { useTheme } from '@mui/material/styles'

const navItems = [
  { label: 'Home', icon: <HomeIcon /> },
  { label: 'Resume', icon: <DescriptionIcon /> },
  { label: 'Works', icon: <WorkIcon /> },
  { label: 'Blogs', icon: <ArticleIcon /> },
  { label: 'Contact', icon: <ContactsIcon /> },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleNavClick = (index) => {
    setActive(index)
    setOpen(false)
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#111',
          boxShadow: 'none',
          borderRadius: 3,
          mt: 2,
          mx: 'auto',
          maxWidth: 600,
          px: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobile ? (
            <>
              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Box
                  sx={{
                    width: 250,
                    backgroundColor: '#111',
                    height: '100%',
                    p: 2,
                  }}
                >
                  <List>
                    {navItems.map((item, index) => (
                      <ListItemButton
                        key={index}
                        onClick={() => handleNavClick(index)}
                        sx={{
                          mb: 1,
                          borderRadius: 2,
                          background:
                            active === index
                              ? 'linear-gradient(to right, #ff416c, #ff4b2b)'
                              : 'transparent',
                          color: active === index ? 'white' : 'gray',
                        }}
                      >
                        <ListItemIcon
                          sx={{ color: active === index ? 'white' : 'gray' }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                width: '100%',
                justifyContent: 'center',
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleNavClick(index)}
                  startIcon={item.icon}
                  sx={{
                    color: active === index ? '#fff' : 'gray',
                    background:
                      active === index
                        ? 'linear-gradient(to right, #ff416c, #ff4b2b)'
                        : 'rgba(255,255,255,0.05)',
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
