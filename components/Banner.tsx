"use client"
import Container from '@mui/material/Container';
import Image from 'next/image';
import banner from "@/public/banner2.png";
import logo from "@/public/logo.jpg";
import bannerStyles from "@/style/bannerStyles.module.css"
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';
import Box from '@mui/material/Box';

export default function Banner(){
    return (
        <ThemeProvider theme={muiTheme}>
           <div style={{ backgroundColor: "black", color: "white" }}>
        <Container maxWidth="xl" sx={{display:"flex",justifyContent: "center"}}>
          <Box sx={{width:"100%"}}>
            <Image
              src={banner}
              alt="Picture of the banner"
              layout='responsive'
              style={{
                objectFit: 'cover',
              }}
            />
            </Box>
        </Container>
        </div>
        </ThemeProvider>
    )
}