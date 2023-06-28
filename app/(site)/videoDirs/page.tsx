"use client"
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import VideoPostCard from "@/components/VideoDirPostCard"

type Props = {
    params?: {
        num?: string;
    };
    searchParams?: {
        search?: string;
    };
};

const query = groq`*[_type=="videoDir"]{
    ..., hashTags[]->,categories[]->,relatedVideos[]->
   }{
  title,
    "mainImage":mainImage.asset->url,
    "hashTags":hashTags[].title,
    "categories":categories[].title,
   }`

export default async function VideoDirArchive(props: Props) {

    const videoDirs: any = await client.fetch(query)
    const allClasses: string[] = videoDirs.map((videoDir:any) => videoDir.categories).flat()
    const tagSet: string[] = [...new Set(allClasses)]
    console.log(tagSet)

    return (
        <ThemeProvider theme={muiTheme}>
            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white", width: "100vw",height:"100vh" }}>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1, padding: "20px" }}>
                        <Chip
                            label="全部分類"
                            component="a"
                            href="videoDirs"
                            variant="outlined"
                            clickable
                            sx={{ marginRight: "10px" }}
                        />
                        {
                            tagSet.map((tag, index: number) => (
                                <Chip
                                    key={index}
                                    label={tag}
                                    component="a"
                                    href={`/videoDirs?search=${tag}`}
                                    variant="outlined"
                                    clickable
                                    sx={{ marginRight: "10px" }}
                                />

                            ))
                        }

                    </Box>
                    <Box sx={{ flexGrow: 1, padding: "20px" }}>
                        {!props.searchParams?.search &&
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#6B4240" }}>
                                全部文章
                            </Typography>
                        }
                        {props.searchParams?.search &&
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#6B4240" }}>
                                {props.searchParams?.search}
                            </Typography>
                        }
                        <Grid container spacing={2} >

                            {!props.searchParams?.search && videoDirs.map((videoDir:any) => (
                                <>
                                    <Grid item xs={6} md={3} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <VideoPostCard title={videoDir.title} mainImage={videoDir.mainImage} hashTags={videoDir.hashTags} categories={videoDir.categories} />
                                    </Grid>
                                </>
                            ))}
                            {props.searchParams?.search && videoDirs.filter((videoDir:any) => (videoDir.categories.includes(props.searchParams?.search))).map((videoDir:any) => (
                                <>
                                    <Grid item xs={6} md={3} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <VideoPostCard title={videoDir.title} mainImage={videoDir.mainImage} hashTags={videoDir.hashTags} categories={videoDir.categories} />
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