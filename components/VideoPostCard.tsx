"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';

export default function VideoPostCard(props: any) {
    const { title, mainImage, hashTags, categories,url } = props
    return (
        <ThemeProvider theme={muiTheme}>
            <Card sx={{ minWidth: 120, margin: "10px",width:"100%" }}>
                <CardActionArea>
                <Link href={`${url}`} target="_blank" key={title} style={{ display: "flex", justifyContent: "center" }}> 
                    <CardMedia
                        component="img"
                        width="200"
                        height="150"
                        image={mainImage}
                        alt="green iguana"
                        sx={{objectFit:"cover"}}
                    />
                    </Link>
                    <Typography variant="subtitle2" component="div" sx={{position: "absolute",padding:"5px",borderRadius:"20%",backgroundColor:"rgba(0,0,0,0.4)" ,color: "white",top: 5,left: "5%"}}>{categories}</Typography>
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}