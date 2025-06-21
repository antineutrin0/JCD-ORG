import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom fontWeight={700}>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
          We'd love to hear from you. Please fill out the form or connect through our social channels.
        </Typography>

      <div className='flex-col items-center justify-center'>
          <Grid container spacing={4} alignItems="flex-start">
          {/* Google Map */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: 350,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 2,
              }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9029171852517!2d90.3915484154316!3d23.750903294442837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89440b9b4d3%3A0x4cbf9bb8afcbb228!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1680000000000"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField fullWidth label="Your Name" margin="normal" variant="outlined" />
              <TextField fullWidth label="Your Email" margin="normal" type="email" variant="outlined" />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
              />
              <Box sx={{ textAlign: 'right' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Info & Social Links */}
        <Box sx={{ mt: 6 }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Admin Email */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" align="center" gutterBottom>
                Contact Info
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="admin@yourcompany.com"
                      secondary="We usually respond within 24 hours"
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>

            {/* Social Media Links */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" align="center" gutterBottom>
                Connect with Us
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 3,
                  mt: 1,
                }}
              >
                <Link href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { transform: 'scale(1.2)', transition: '0.3s' } }}>
                  <FacebookIcon fontSize="large" />
                </Link>
                <Link href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { transform: 'scale(1.2)', transition: '0.3s' } }}>
                  <TwitterIcon fontSize="large" />
                </Link>
                <Link href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { transform: 'scale(1.2)', transition: '0.3s' } }}>
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" color="inherit" sx={{ '&:hover': { transform: 'scale(1.2)', transition: '0.3s' } }}>
                  <LinkedInIcon fontSize="large" />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
      </Container>
    </Box>
  );
}
