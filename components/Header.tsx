"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from "@/public/logo.jpg"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import styles from "../styles.module.scss"
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';

const pages = [{ name: '首頁', url: '/' }, { name: '部落格文章', url: '/posts' }, { name: '教練資料', url: '/coaches' }, { name: '影音內容', url: '/videoDirs' }];

export default function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (url:string) => {
        window.location.href = url;
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={muiTheme}>
                <AppBar position="static" sx={{ backgroundColor: "black", flexDirection: "row", justifyContent: "center", width: "100%" }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, justifyContent: "center" }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    sx={{ color: "white" }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
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
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page.name} onClick={()=>handleCloseNavMenu(page.url)}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: "space-around", alignItems: "center", width: "80%" }}>
                                {pages.map((page) => (
                                        <Button
                                            href={page.url}
                                            key={page.name}
                                            sx={{ my: 2, color: 'white', display: 'block', fontSize: "17px", "&:hover": { color: "#c9a063" } }}
                                        >

                                            {page.name}

                                        </Button>
                                ))}
                            </Box>
                            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end", alignItems: "center", width: "20%" }}>
                                <IconButton aria-label="instagram">
                                    <Link href="https://www.instagram.com/the_rights_lifter/">
                                        <InstagramIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                                    </Link>
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <Link href="https://www.facebook.com/rightslifter/?locale=zh_TW">
                                        <FacebookIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                                    </Link>
                                </IconButton>
                                <IconButton aria-label="youtube">
                                    <Link href="https://www.youtube.com/channel/UCrJl_NqIbT_hW4CcWm1T6ng">
                                        <YouTubeIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                                    </Link>
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>


        </ThemeProvider>
    )
}
