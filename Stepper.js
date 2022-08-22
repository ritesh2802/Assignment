// import React from 'react';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import User from "./User";
// import StepButton from '@mui/material/StepButton';


// import DoDisturbOnTwoToneIcon from '@mui/icons-material/DoDisturbOnTwoTone';
// import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';




// function stepper() {
//   return (
    
//     <div style={{ margin: 100 }}>
//     <Stepper activeStep={1} alternativeLabel>
//       <Step >
//       <StepLabel > Telephonic round</StepLabel>
         
//       </Step>
//       <Step style={{color:"yellow"}} >
//         <StepLabel StepIconComponent={AccessTimeTwoToneIcon} onClick={()=>handleDisplay(id)}>OnSite</StepLabel>
//       </Step>
//       <Step >
//         <StepLabel StepIconComponent={DoDisturbOnTwoToneIcon}>Low Level Design</StepLabel>
//       </Step>
//       <Step >
//         <StepLabel StepIconComponent={DoDisturbOnTwoToneIcon}>Hiring Manager</StepLabel>
//       </Step>
//     </Stepper>
//     <div style={{border:"1px solid gray",marginTop:"6rem",marginLeft:"20rem",boxShadow:"2px 2px gray", width:"50%",textAlign:"center"}}>
//       <h3  style={{textAlign:"center"}} >  Telephonic Round</h3>
    
//     <TableContainer>
//       <Table size='small'>
      

//         <TableBody>
//           <TableRow>
           
//             <TableCell align="left">Time</TableCell>
            
//             <TableCell align="right">{User.time}</TableCell>
//           </TableRow>
//           <TableRow>
           
//            <TableCell align="left">panel</TableCell>
           
//            <TableCell align="right">{User.panel}</TableCell>
//          </TableRow>
//          <TableRow>
           
//            <TableCell align="left">Video conferencing link</TableCell>
           
//            <TableCell align="right">{User.video}</TableCell>
//          </TableRow>
      
          
             
//         </TableBody>
//       </Table>
//     </TableContainer>


//   </div>
//   </div>

//   )
// }

// export default stepper

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import User from "./User";


import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Telephonic round', 'On site', 'Low level design','hiring manager'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  

  


  


  const handleStep = (step) => () => {
    setActiveStep(step);
    console.log(step);
    
    
  };


  // {
  //   console.log(activeStep.label)
  //   {
  //   if(activeStep==0){
  //     return(
  //       <>
  //       <Box sx={{ width: '100%',margnTop:"4rem" }}>
  //       <Stepper nonLinear activeStep={activeStep} alternativeLabel>
  //           {steps.map((label, index) => (
  //             <Step key={label}>
  //               <StepButton color="inherit" onClick={handleStep(index)}>
  //                 {label}
    
                  
         
  //               </StepButton>
  //             </Step>
  //           ))}
  //         </Stepper>
    
          
  //       </Box>
        
  //        <TableContainer component={Paper} sx={{ width: 650 ,display:"flex",alignItems:"center",justifyContent:"center"}}>
  //       <Table sx={{ width: 650 }} aria-label="simple table">
  //         <TableHead>
  //           <TableRow>
  //             <TableCell sx={{textAlign:"center"}}><h1>{User.telephonicRound.label}</h1></TableCell>
            
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
          
  //             <TableRow>
                
  //               <TableCell align="left">time</TableCell>
  //               <TableCell align="right">{User.telephonicRound.time}</TableCell>
  
              
                
                
  //             </TableRow>
  //             <TableRow>
  //             <TableCell align="left">panel</TableCell>
  //             <TableCell align="right">{User.telephonicRound.panel}</TableCell>
  //             </TableRow>
  //             <TableRow>
  //             <TableCell align="left">video</TableCell>
  //             <TableCell align="right">{User.telephonicRound.video}</TableCell>
  //             </TableRow>
            
  //         </TableBody>
  //       </Table>
  //     </TableContainer>
  //     </>
  //       )
  //   }
  //   else if(activeStep==1){
  //     return(

       
  //     )
  //   }
  //   else if(activeStep==2){
  //     return(
  //       <TableContainer component={Paper} sx={{ width: 650 ,display:"flex",alignItems:"center",justifyContent:"center"}}>
  //       <Table sx={{ width: 650 }} aria-label="simple table">
  //         <TableHead>
  //           <TableRow>
  //             <TableCell sx={{textAlign:"center"}}><h1>{User.LowlevelDesign.label}</h1></TableCell>
            
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
          
  //             <TableRow>
                
  //               <TableCell align="left">time</TableCell>
  //               <TableCell align="right">{User.LowlevelDesign.time}</TableCell>
  
              
                
                
  //             </TableRow>
  //             <TableRow>
  //             <TableCell align="left">panel</TableCell>
  //             <TableCell align="right">{User.LowlevelDesign.panel}</TableCell>
  //             </TableRow>
  //             <TableRow>
  //             <TableCell align="left">video</TableCell>
  //             <TableCell align="right">{User.LowlevelDesign.video}</TableCell>
  //             </TableRow>
            
  //         </TableBody>
  //       </Table>
  //     </TableContainer>
  //       )
  //   }
  // }
  

 const handleTable =()=>{
  
  if(activeStep==0){
    return User.telephonicRound;
  }
  else if(activeStep==1){
    return User.OnsiteRound;
  }
  else if(activeStep==2){
    return User.LowlevelDesign;
  }
  else{
    return User.HiringManager;
  }

}

  

  

  return (
    <>
  
    <Stepper sx={{margnTop:"6rem"}}nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}

              
     
            </StepButton>
          </Step>
        ))}
      </Stepper>

      
    
  
        
      <TableContainer component={Paper} sx={{ width: 650 ,marginLeft:"18rem",marginTop:"4rem"}}>
      <Table sx={{ width: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{textAlign:"center"}}><h1>{handleTable().label}</h1></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow>
              
              <TableCell align="left">time</TableCell>
              <TableCell align="right">{handleTable().time}</TableCell>

            
              
              
            </TableRow>
            <TableRow>
            <TableCell align="left">panel</TableCell>
            <TableCell align="right">{handleTable().panel}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell align="left">video</TableCell>
            <TableCell align="right">{handleTable().video}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}

