"use client"
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <ThemeProvider theme={muiTheme}>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "center" }}>
                    Copyright © {new Date().getFullYear()} weightliftingcollege. All rights reserved.
                </Typography>
            </Container>
        </ThemeProvider>
    )

}