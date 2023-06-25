"use client"
import * as React from 'react';
import { Padding } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { PortableText, PortableTextComponents } from "@portabletext/react"
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

type Props = {
    params: { post: string };
}



export default async function Post({ params }: Props) {
    const slug = decodeURI(params.post)
    const query = `*[_type=="post" && title=="${slug}"][0]{
        ..., hashTags[]->,categories[]->,author->
        }{
        title,
        publishedAt,
        "mainImage":mainImage.asset->url,
        "auth":author.name,
        "hashTags":hashTags[].title,
        "categories":categories[].title,
        body
        }`
    const post: any = await client.fetch(query)

    return (
        <div style={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Box sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    {post &&
                        <Stack spacing={2} >
                            <div>
                                <Typography variant="h4" component="div" sx={{ color: "#000000", maxWidth: "100%" }}>{post.title}</Typography>
                                <Typography variant="h6" component="div" sx={{ color: "#000000", maxWidth: "100%" }}>{post.auth}教練</Typography>

                                <Typography variant="body1" component="div" sx={{ color: "#000000" }}>
                                    {post.hashTags.map((tag: any, index: number) => (
                                        <span key={index} style={{ marginRight: '10px' }}>#{tag}</span>
                                    ))}
                                </Typography>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center",width:"100%" }}>
                                <Image
                                    src={post.mainImage}
                                    alt="Picture of post"
                                    layout='responsive'
                                    width={300}
                                    height={200}
                                    style={{objectFit: "cover"}}
                                />
                            </div>
                            <div style={{ color: "black",width:"100%" }}>
                                <PortableText value={post.body} />
                            </div>
                        </Stack>
                    }
                </Box>
            </Container>
        </div>
    )
}