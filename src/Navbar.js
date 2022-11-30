import * as React from 'react';
import useToggleState from './hooks/useToggleState';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import MobileMenu from './MobileMenu';
import { useMediaQuery } from '@mui/material'
import './Navbar.css'

const pages = [{
    name: 'Homepage',
    route: '/',
},
{
    name: 'Contact us',
    route: '/slowmad/contact-us'
}];

function ResponsiveAppBar({ classes }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const [MenuNav, toggle] = useToggleState(false);
    const smallScreen = useMediaQuery("(max-width: 768px)");

    return (
        <div>
            {smallScreen ?
                <MobileMenu />
                :
                <AppBar position="static" sx={{
                    position: "absolute",
                    width: "100%",
                    padding: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    boxShadow: "none"
                }}>
                    <Container maxWidth='xl'>
                        <Toolbar disableGutters>
                            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                            <Typography
                                variant='h6'
                                noWrap
                                component='a'
                                href='/'
                                sx={{
                                    display: { xs: 'none', sm: 'flex', md: 'flex' },
                                    textDecoration: 'none'
                                }}
                            >
                                <Link className='logo' to='/'>Slowmad Families</Link>
                            </Typography>
                            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton> */}
                            {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClick={toggle}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        > */}
                            {/* {pages.map(page => (
                                <MenuItem key={page.name} onClick={toggle}>
                                    <Typography textAlign='center'>
                                    </Typography>
                                </MenuItem>
                            ))} */}

                            {/* </Menu> */}
                            {/* </Box> */}
                            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                            {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                textDecoration: 'none'
                            }}
                        >
                            <Link className='logo' to='/'>Slowmad Families</Link>
                        </Typography> */}
                            <Box sx={{
                                flexGrow: 1,
                                display: {
                                    xs: 'none',
                                    sm: 'flex',
                                    md: 'flex',
                                    justifyContent: "flex-end",
                                }
                            }}>
                                <Link className={splitLocation[1] === "" ? "active" : "navbar-links"} to='/'>Homepage</Link>
                                <Link className={splitLocation[1] === "slowmad" ? "active" : "navbar-links"} to='/slowmad/contact-us'>Contact us</Link>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar >
            }
        </div>
    );
}

export default (ResponsiveAppBar);