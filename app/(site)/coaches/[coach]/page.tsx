"use client"
import { client } from "@/sanity/lib/client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { PortableText } from "@portabletext/react"
import Image from 'next/image';
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import BlogPostCard from "@/components/BlogPostCard";
import Link from "@mui/material/Link";

type Props = {
    params: { coach: string };
}

export default async function Coach({ params }: Props) {
    const slug = decodeURI(params.coach)
    const query = `*[_type=="author" && name=="${slug}"][0]{...,skill[]->,experience[]->,license[]->,prize[]->}{
        author,
        name,
        igUrl,
        fbUrl,
        bio,
        "skill":skill[].title,
        "experience":experience[].title,
        "license":license[].title,
        "prize":prize[].title,
        "mainImage":image.asset->url,
        "posts":*[_type=="post" && author->name=="${slug}"]{...,hashTags[]->,categories[]->,author->}{
            title,
            publishedAt,
            "mainImage":mainImage.asset->url,
            "hashTags":hashTags[].title,
            "categories":categories[].title,
            slug
        }
    }`
    const coach: any = await client.fetch(query)
    console.log(slug)
    return (
        <>
            <div style={{ backgroundColor: "black" }}>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} sx={{ border: "none", backgroundColor: "#6B4240" }}>
                                <br />
                            </Grid>
                            <Grid item xs={1} sx={{ border: "none", backgroundColor: "#6B4240", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                    教練
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ backgroundColor: "#000000", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                    {coach.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={7} sx={{ backgroundColor: "#6B4240", display: "flex", justifyContent: "center" }}>
                                <div>
                                    <IconButton aria-label="instagram">
                                        <Link href={coach.igUrl}>
                                            <InstagramIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                                        </Link>
                                    </IconButton>
                                    <IconButton aria-label="facebook">
                                        <Link href={coach.fbUrl}>
                                            <FacebookIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                                        </Link>
                                    </IconButton>
                                </div>
                            </Grid>


                            <Grid item xs={3} sx={{ backgroundColor: "#000000" }}>
                                <br />
                            </Grid>
                            <Grid item xs={9} sx={{ backgroundColor: "#000000" }}>
                                <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                    <PortableText value={coach.bio} />
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>


                </Container>
            </div>
            <div style={{ backgroundColor: "white" }}>
                <Container maxWidth="xl">
                    <Box sx={{ paddingTop: 4, flexGrow: 1 }}>
                        <Grid container spacing={2} sx={{ backgroundColor: "#FFFFFF" }}>
                            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                                <div style={{ width: "100%" }}>
                                    <Image
                                        src={coach.mainImage}
                                        alt="Picture of coach"
                                        width={300}
                                        height={600}
                                        layout="responsive"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack spacing={2}>

                                    <Typography variant="h6" component="div" sx={{ color: "#000000", backgroundColor: "#DCDDDD" }}>專長</Typography>
                                    {
                                        coach.skill.map((skill: string, index: number) => (<Typography key={index} variant="subtitle1" component="div" sx={{ color: "#000000" }}>{skill}</Typography>))
                                    }
                                    {coach.prizes && <Typography variant="h6" component="div" sx={{ color: "#000000", backgroundColor: "#DCDDDD" }}>獎項</Typography>}
                                    {coach.prizes && coach.prizes.map((prize: string, index: number) => (<Typography key={index} variant="subtitle1" component="div" sx={{ color: "#000000" }}>{prize}</Typography>))}
                                    <Typography variant="h6" component="div" sx={{ color: "#000000", backgroundColor: "#DCDDDD" }}>教練經歷</Typography>
                                    {
                                        coach.experience.map((experience: string, index: number) => (<Typography key={index} variant="subtitle1" component="div" sx={{ color: "#000000" }}>{experience}</Typography>))
                                    }
                                    <Typography variant="h6" component="div" sx={{ color: "#000000", backgroundColor: "#DCDDDD" }}>教練證照</Typography>
                                    {
                                        coach.license.map((license: string, index: number) => (<Typography key={index} variant="subtitle1" component="div" sx={{ color: "#000000" }}>{license}</Typography>))
                                    }
                                </Stack>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, backgroundColor: "#FFFFFF" }}>
                        <Divider textAlign="left" >
                            <Typography variant="h6" component="div" sx={{ color: "#000000" }}>撰寫文章</Typography>
                        </Divider>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "flex-start" }}>
                                {
                                    coach.posts.slice(0, 4).map((post: any) => (
                                        <>
                                            <Grid item xs={3} sx={{ width: "100%" }}>
                                                <BlogPostCard title={post.title} mainImage={post.mainImage} publishedAt={post.publishedAt} auth={post.auth} hashTags={post.hashTags} categories={post.categories} />
                                            </Grid>
                                        </>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        </>
    )
}