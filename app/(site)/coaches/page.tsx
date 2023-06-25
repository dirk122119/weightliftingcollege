"use client"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@/style/muiTheme';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import CoachIntroductionCard from '@/components/CoachIntroductionCard';


const query = groq`*[_type=="author"]{
    name,
    "mainImage":image.asset->url,
    fbUrl,
    igUrl
  }`

export default async function CoachArchive() {

    const coaches: any = await client.fetch(query)
        return (
            <ThemeProvider theme={muiTheme}>
                <div style={{ backgroundColor: "white", color: "black",width:"100vw",display:"flex",alignItems:"center" }}>
                    <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1, padding: "20px" }}>
                        <Grid container spacing={2} sx={{justifyContent: "center" }}>
                            {coaches.map((coach: any) => (
                                <>
                                    <Grid item xs={6} md={3} sx={{ maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <CoachIntroductionCard name={coach.name} mainImage={coach.mainImage} fbUrl={coach.fbUrl} igUrl={coach.igUrl} />
                                    </Grid>
                                </>
                            ))
                            }
                        </Grid>
                    </Box>
                    </Container>
                </div>
            </ThemeProvider>
        )
    
}