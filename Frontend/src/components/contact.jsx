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
  Paper,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

export default function ContactPage() {
  const theme = useTheme();

  return (
    <Box sx={{ 
      py: 8, 
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        {/* Page Header with Dark Green h3 */}
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom 
          fontWeight={700}
          sx={{
            color: '#1B5E20', // Dark green color
            mb: 2
          }}
        >
          Contact Us
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          sx={{ 
            mb: 6, 
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          We'd love to hear from you. Please fill out the form or connect through our social channels.
        </Typography>

        {/* Map Section - Previous Good Version */}
        <Box sx={{ width: '80%', mb: 6, mx: 'auto' }}>
          <Typography 
            variant="h5" 
            align="center" 
            gutterBottom
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600
            }}
          >
            Our Location
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: 350,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 3,
              border: '1px solid rgba(0,0,0,0.1)'
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
        </Box>

        {/* Modern Contact Form */}
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mb: 6 }}>
          <Paper 
            elevation={4} 
            sx={{ 
              p: 4,
              borderRadius: 3,
              background: 'white',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.05)'
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom 
              align="center"
              sx={{
                color: '#1B5E20',
                fontWeight: 600,
                mb: 3
              }}
            >
              Send Us a Message
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField 
                fullWidth 
                label="Your Name" 
                margin="normal" 
                variant="outlined" 
                sx={{ mb: 3 }}
              />
              <TextField 
                fullWidth 
                label="Your Email" 
                margin="normal" 
                type="email" 
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={6}
                margin="normal"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Contact Info & Social Links - Previous Good Version */}
        <Box sx={{ width: '80%', maxWidth: 1000, mx: 'auto' }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRadius: 3,
                  background: 'white',
                  minHeight: 200
                }}
              >
                <Typography 
                  variant="h5" 
                  align="center" 
                  gutterBottom
                  sx={{
                    color: '#1B5E20',
                    fontWeight: 600
                  }}
                >
                  Contact Info
                </Typography>
                <List sx={{ mt: 2 }}>
                  <ListItem sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <EmailIcon color="primary" fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" fontWeight={500}>
                          admin@yourcompany.com
                        </Typography>
                      }
                      secondary="We usually respond within 24 hours"
                      sx={{ textAlign: 'center' }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            {/* Connect with Us */}
            <Grid item xs={12} md={5}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRadius: 3,
                  background: 'white',
                  minHeight: 200
                }}
              >
                <Typography 
                  variant="h5" 
                  align="center" 
                  gutterBottom
                  sx={{
                    color: '#1B5E20',
                    fontWeight: 600
                  }}
                >
                  Connect with Us
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 4,
                    mt: 3
                  }}
                >
                  <Link href="https://facebook.com" target="_blank" color="inherit" 
                    sx={{ 
                      '&:hover': { 
                        transform: 'scale(1.2)', 
                        transition: '0.3s',
                        color: '#1877F2'
                      } 
                    }}
                  >
                    <FacebookIcon fontSize="large" />
                  </Link>
                  <Link href="https://twitter.com" target="_blank" color="inherit"
                    sx={{ 
                      '&:hover': { 
                        transform: 'scale(1.2)', 
                        transition: '0.3s',
                        color: '#1DA1F2'
                      } 
                    }}
                  >
                    <TwitterIcon fontSize="large" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank" color="inherit"
                    sx={{ 
                      '&:hover': { 
                        transform: 'scale(1.2)', 
                        transition: '0.3s',
                        color: '#E1306C'
                      } 
                    }}
                  >
                    <InstagramIcon fontSize="large" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" color="inherit"
                    sx={{ 
                      '&:hover': { 
                        transform: 'scale(1.2)', 
                        transition: '0.3s',
                        color: '#0077B5'
                      } 
                    }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </Link>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}