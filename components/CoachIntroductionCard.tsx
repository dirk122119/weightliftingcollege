"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';
import Link from '@mui/material/Link';

export default function CoachIntroductionCard(props: any) {
    const { name, mainImage, fbUrl, igUrl } = props
    return (
        <ThemeProvider theme={muiTheme}>
            <Card sx={{ minWidth: 120, maxWidth: 400, margin: "10px" }}>
                <CardActionArea>
                    <Link href={`/coaches/${name}`} target="_blank" key={name} style={{ display: "flex", justifyContent: "center" }}>
                        <CardMedia
                            component="img"
                            width="300"
                            image={mainImage}
                            alt="coach image"
                        />
                    </Link>
                    <Typography variant="subtitle2" component="div" sx={{ position: "absolute", padding: "5px", borderRadius: "20%", backgroundColor: "rgba(0,0,0,0.4)", color: "white", top: 5, left: "5%" }}>教練</Typography>
                </CardActionArea>
                <CardContent sx={{ paddingBottom: 0, "&:last-child": { paddingBottom: 0 } }}>
                    <Typography gutterBottom variant="h5" component="p" noWrap sx={{ display: "flex", justifyContent: "center" }}>
                        {name}教練
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <IconButton aria-label="instagram" sx={{ paddingx: 0 }}>
                            <Link href={fbUrl}>
                                <InstagramIcon sx={{ color: "black", fontSize: 30, "&:hover": { color: "#c9a063" } }} />
                            </Link>
                        </IconButton>


                        <IconButton aria-label="facebook" sx={{ paddingX: 0 }}>
                            <Link href={igUrl}>
                                <FacebookIcon sx={{ color: "black", fontSize: 30, "&:hover": { color: "#c9a063" } }} />
                            </Link>
                        </IconButton>
                    </Box>

                </CardContent>
            </Card>
        </ThemeProvider>
    );
}