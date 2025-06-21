import React from 'react';
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#014733', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          {/* Navigation */}
          <Grid item xs={12} sm={6} md={3} sx={{ px: 3 }}>
            <Typography variant="h6" gutterBottom>
              Navigation
            </Typography>
            <List>
              {['Home', 'About', 'Our Leader', 'Constitution'].map((text, i) => (
                <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                  <ListItemText>
                    <Link href="#" color="inherit" underline="hover">
                      {text}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3} sx={{ px: 3 }}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <List>
              {['31 Points', '19 Points', 'Vision 2030'].map((text, i) => (
                <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                  <ListItemText>
                    <Link href="#" color="inherit" underline="hover">
                      {text}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Latest */}
          <Grid item xs={12} sm={6} md={3} sx={{ px: 3 }}>
            <Typography variant="h6" gutterBottom>
              Latest
            </Typography>
            <List>
              {['Press Releases', 'News', 'Notices', 'Activities'].map((text, i) => (
                <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                  <ListItemText>
                    <Link href="#" color="inherit" underline="hover">
                      {text}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3} sx={{ px: 3 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <List>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon>
                  <FacebookIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Link href="https://facebook.com" color="inherit" underline="hover">
                  Facebook
                </Link>
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon>
                  <TwitterIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Link href="https://twitter.com" color="inherit" underline="hover">
                  Twitter
                </Link>
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon>
                  <InstagramIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Link href="https://instagram.com" color="inherit" underline="hover">
                  Instagram
                </Link>
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon>
                  <LinkedInIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Link href="https://linkedin.com" color="inherit" underline="hover">
                  LinkedIn
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box sx={{ borderTop: '1px solid #4caf50', mt: 4, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
