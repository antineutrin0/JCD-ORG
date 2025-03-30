import React from 'react';
import { Box, Container, Grid, Link, Typography, List, ListItem,ListItemText, ListItemIcon } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#01523c', color: '#fff', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Site Navigation - Column 1 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Site Navigation</Typography>
            <List>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Home
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    About
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Services
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Contact
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          {/* Site Navigation - Column 2 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            <List>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Careers
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Blog
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Press
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Privacy Policy
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          {/* Site Navigation - Column 3 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Support</Typography>
            <List>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Help Center
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    FAQs
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Terms & Conditions
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Refund Policy
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Support</Typography>
            <List>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Help Center
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    FAQs
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Terms & Conditions
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Refund Policy
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Support</Typography>
            <List>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Help Center
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    FAQs
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Terms & Conditions
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0px', margin: '5px' }}>
                <ListItemText>
                  <Link href="#" color="inherit" underline="hover">
                    Refund Policy
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <List className='flex  justify-start'>
              <ListItem sx={{ padding: '0px' }}>
                <ListItemIcon>
                  <FacebookIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Link href="https://facebook.com" color="inherit" underline="hover" />
              </ListItem>
              <ListItem sx={{ padding: '0px'}}>
                <ListItemIcon>
                  <TwitterIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Link href="https://twitter.com" color="inherit" underline="hover" />
              </ListItem>
              <ListItem sx={{ padding: '0px', }}>
                <ListItemIcon>
                  <InstagramIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Link href="https://instagram.com" color="inherit" underline="hover" />
              </ListItem>
              <ListItem sx={{ padding: '0px'}}>
                <ListItemIcon>
                  <LinkedInIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Link href="https://linkedin.com" color="inherit" underline="hover" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 2, borderTop: '2px solid #4caf50', pt: 2 }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}
