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
  Typography,
  Avatar,
  useMediaQuery,
  Container,
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
  { label: 'Works', icon: <WorkIcon /> },
  { label: 'Resume', icon: <DescriptionIcon /> },
  { label: 'Blogs', icon: <ArticleIcon /> },
  { label: 'Contact', icon: <ContactsIcon /> },
]

const Navbar = ({ activeNavItem, setActiveNavItem }) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleNavClick = (label) => {
    setActiveNavItem(label)
    setOpen(false)
  }

  return (
    <Box
      mt={2}
      style={{ position: 'sticky', top: 0, zIndex: 999, margin: '40px' }}
    >
      <AppBar
        position="static"
        sx={{
          borderRadius: 2,
          bgcolor: '#111',
          color: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isMobile ? (
              <>
                {/* Mobile Menu Icon */}
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setOpen(true)}
                  sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>

                {/* Drawer for mobile */}
                <Drawer
                  anchor="left"
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <Box
                    sx={{
                      width: 250,
                      backgroundColor: '#111',
                      height: '100%',
                      p: 2,
                    }}
                  >
                    <List>
                      {navItems.map((item) => (
                        <ListItemButton
                          key={item.label}
                          onClick={() => handleNavClick(item.label)}
                          sx={{
                            mb: 1,
                            borderRadius: 2,
                            background:
                              activeNavItem === item.label
                                ? 'linear-gradient(to right, #ff416c, #ff4b2b)'
                                : 'transparent',
                            color:
                              activeNavItem === item.label ? 'white' : 'gray',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color:
                                activeNavItem === item.label ? 'white' : 'gray',
                            }}
                          >
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Box>
                </Drawer>

                {/* Mobile Branding */}
                <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                  }}
                >
                  DJEBBI
                </Typography>
              </>
            ) : (
              <>
                {/* Desktop Branding */}

                {/* Desktop Nav Buttons */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                  }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      onClick={() => handleNavClick(item.label)}
                      startIcon={item.icon}
                      sx={{
                        color: activeNavItem === item.label ? '#fff' : 'gray',
                        background:
                          activeNavItem === item.label
                            ? 'linear-gradient(to right, #ff416c, #ff4b2b)'
                            : 'transparent',
                        border:
                          activeNavItem === item.label
                            ? '2px solid white'
                            : 'none',
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.1)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar
