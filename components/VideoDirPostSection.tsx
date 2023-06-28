"use client"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import VideoDirPostCard from "@/components/VideoDirPostCard"

const query = groq`*[_type=="videoDir"]{
    ..., hashTags[]->,categories[]->,relatedVideos[]->
   }{
  title,
    "mainImage":mainImage.asset->url,
    "hashTags":hashTags[].title,
    "categories":categories[].title,
   }`

export default async function VideoDirPostSection() {

    const videoDirs: any = await client.fetch(query)

    return (
        <ThemeProvider theme={muiTheme}>
            <div style={{ backgroundColor: "white", color: "black" }}>
                <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
                    <Box sx={{ flexGrow: 1, padding: "20px" }}>
                        <Grid container spacing={2} sx={{justifyContent: "center" }}>
                            <Grid item xs={12} md={6} sx={{ maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Typography variant="h3" component="div" sx={{ color: "text.primary", fontWeight: "700" }}>影片內容</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
                                <Grid container spacing={2} sx={{ width: "100%" }} >
                                        {videoDirs.slice(0,4).map((videoDir: any) => (
                                            <>
                                                <Grid item xs={6} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                                    <VideoDirPostCard title={videoDir.title} mainImage={videoDir.mainImage} hashTags={videoDir.hashTags} categories={videoDir.categories} />
                                                </Grid>
                                            </>
                                        ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    )
}