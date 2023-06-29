"use client"
import * as React from 'react';
import { Padding } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import VideoPostCard from "@/components/VideoPostCard"

type Props = {
    params: { videoDir: string };
}



export default async function Post({ params }: Props) {
    const slug = decodeURI(params.videoDir)
    const query = groq`*[_type=="videoDir" &&title=="${slug}"][0]{
        relatedVideos[]->{
            title,
            "mainImage":mainImage.asset->url,
            videoUrl,
            "categories":categories[]->title,
          }
        }`
    const videos: any = await client.fetch(query)

    return (
        <ThemeProvider theme={muiTheme}>
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white", width: "100vw",height:"100vh" }}>
            <Container maxWidth="xl">

                <Box sx={{ flexGrow: 1, padding: "20px" }}>

                    <Grid container spacing={2} >

                        {videos["relatedVideos"].map((video:any) => (
                            <>
                                <Grid item xs={6} md={3} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <VideoPostCard title={video.title} mainImage={video.mainImage} hashTags={video.hashTags} categories={video.categories} url={video.videoUrl} />
                                </Grid>
                            </>
                        ))}

                    </Grid>
                </Box>
            </Container>
        </div>
    </ThemeProvider>
    )
}