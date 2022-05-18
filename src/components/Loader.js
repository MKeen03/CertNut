import React from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import vars from "../utility/vars";


const Loader = () => {
  return (
    <>
       <Box sx={{ml: `${vars.drawerWidth + 650}px` , mt: '500px', width: '100%' }}>
      <CircularProgress size={150}/>
    </Box>
    </>
  );
};

export default Loader;
