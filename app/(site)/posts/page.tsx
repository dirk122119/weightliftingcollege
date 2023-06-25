"use client"
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BlogPostCard from '@/components/BlogPostCard';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

type Props = {
    params?: {
        num?: string;
    };
    searchParams?: {
        search?: string;
    };
};

const query = groq`*[_type=="post"]{
    ..., hashTags[]->,categories[]->,author->
   }{
    title,
    publishedAt,
    "mainImage":mainImage.asset->url,
    "auth":author.name,
    "hashTags":hashTags[].title,
    "categories":categories[].title,
    }`

export default async function PostArchive(props: Props) {

    const posts: any = await client.fetch(query)
    const allClasses: string[] = posts.map(post => post.categories).flat()
    const tagSet: string[] = [...new Set(allClasses)]


    return (
        <ThemeProvider theme={muiTheme}>
            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white", width: "100vw",height:"100vh" }}>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1, padding: "20px" }}>
                        <Chip
                            label="全部文章"
                            component="a"
                            href="posts"
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
                                    href={`/posts?search=${tag}`}
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

                            {!props.searchParams?.search && posts.map((post) => (
                                <>
                                    <Grid item xs={6} md={3} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <BlogPostCard title={post.title} mainImage={post.mainImage} publishedAt={post.publishedAt} auth={post.auth} hashTags={post.hashTags} categories={post.categories} />
                                    </Grid>
                                </>
                            ))}
                            {props.searchParams?.search && posts.filter((post) => (post.categories.includes(props.searchParams?.search))).map((post) => (
                                <>
                                    <Grid item xs={6} md={3} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <BlogPostCard title={post.title} mainImage={post.mainImage} publishedAt={post.publishedAt} auth={post.auth} hashTags={post.hashTags} categories={post.categories} />
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