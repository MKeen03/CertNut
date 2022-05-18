import * as React from 'react';
import { Box } from '@mui/system';
 
 
    export default function Welcome() {
      return (
      
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              minWidth: 300,
              marginLeft: '400px',
              marginRight:'300px',
              marginTop: '100px',
              height: '700px',
            }}
          >
            <Box sx={{ width: 1,
            padding: '10px',
              alignContent: 'center',
             color: 'text.secondary', fontSize: 34}}>Welcome to </Box>
            <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'bold', }}>
              Cert Nut
            </Box>
            <Box
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
              }}
            >
              CertNut is here to help you study! We are in the process of adding multiple options to help prepare you for specific Certifications!
             
              CertNut is  AD driven website. We'd greatly appreciate you turning off ad-blocker.
            </Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
              Click on the Certifications on the left side of the page to get started!
            </Box>
          </Box>
       
      );
    }


