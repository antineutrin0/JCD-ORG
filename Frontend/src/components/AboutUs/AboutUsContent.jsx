import React from "react";
import { Container, Typography, Card, CardContent, Grid, CardMedia } from "@mui/material";

const AboutUsContent = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Bangladesh Chhatra Dal
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Mission
              </Typography>
              <Typography variant="body1">
                JCD aims to protect student rights, uphold democratic values, and contribute to the socio-political development of Bangladesh. The organization works to ensure quality education, free speech, and active student participation in national issues.
              </Typography>
            </CardContent>
          </Card>
          
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Vision
              </Typography>
              <Typography variant="body1">
                JCD envisions a democratic, progressive Bangladesh where students play a crucial role in shaping the nation's future. The organization believes in fostering leadership, national unity, and political awareness among youth.
              </Typography>
            </CardContent>
          </Card>
        
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                History
              </Typography>
              <Typography variant="body1">
                Established in 1979, JCD has been actively engaged in student politics, playing a significant role in movements for democracy, free elections, and educational reforms. The organization has contributed to many historical events in Bangladesh.
              </Typography>
            </CardContent>
          </Card>
          <CardMedia
            component="img"
            image="https://theprint.in/wp-content/uploads/2024/01/2024-01-07T153944Z_1956366033_RC2JW4AFOIX7_RTRMADP_3_BANGLADESH-ELECTION.jpeg"
            alt="JCD Rally"
            sx={{ width: "60%", height: "auto", mt: 2 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Leadership
              </Typography>
              <Typography variant="body1">
                JCD is led by dedicated student leaders who advocate for the rights of students and democratic governance. The leadership structure ensures student representation and active participation in the national political landscape.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUsContent;
