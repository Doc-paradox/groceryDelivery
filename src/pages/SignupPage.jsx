// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';



// const SignupPage = () => {
//   const [userrole, setUserRole] = useState('');
//   const [useremail, setUserEmail] = useState('');
//   const [userpassword, setUserPassword] = useState('');
//   const [username,setUserName] = useState('');
//   const [userphone,setUserPhone] = useState('');
//   const [isPhoneValid, setIsPhoneValid] = useState(true);

//   const navigate = useNavigate();

//   const userTypes = ['user', 'vendor', 'delivery']
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userDetails ={
//       username:username,
//       useremail:useremail,
//       userpassword:userpassword,
//       userrole:userrole,
//       userphone:userphone,
//     }
//     try {
//       const response = await axios.post('/USERS/addUser', userDetails
//         // {userrole: userrole,useremail: useremail,userpassword: userpassword, } 
//     );

//       const data = response.data;
      
//       if (response.status === 200) {
//         const { userid } = response.data;
//         localStorage.setItem('userid', parseInt(userid));
//         console.log(userid);
//         alert(`Add your address`);
//         try{
//           navigate('/address',{state:{userrole}});
//         }catch(error){
//           alert("Cannot redirect to address form ");
//           console.log("Error in redirecting to address form",error);
//         }
      
//         // Redirect to login page or dashboard after successful signup
//         // if (userrole === 'vendor' || userrole === 'delivery') {
//         //   // navigate('/login');
//         //   navigate('/address',{state:{userrole}});
//         // } else {
//         //   navigate('/login');
//         //   alert("Sign up successful")
//         // }
//       } else {
//         console.error('Signup failed', data);
//       }
//     } catch (error) {
//       console.error('Error during signup', error);
//     }
//   };

//   const validatePhone = (phone) => {
//     const isValid = /^\d{10}$/.test(phone);
//     setIsPhoneValid(isValid);
//     return isValid;
//   };
  

//   return (
//     <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh' }}>

//       <Box component="form" onSubmit={handleSubmit} sx={{
//         maxWidth: 500,
//         // margin: 'auto', 
//         padding: 5,
//         // marginTop:'13%',
//         borderColor: 'black',
//         // border:'1px solid',
//         borderRadius: '5%',
//         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
//       }}>
//         <Typography variant="h5" component="h1" gutterBottom>
//           Sign Up
//         </Typography>
//         <FormControl component="fieldset">
//           <FormLabel component="legend">User Type</FormLabel>
//           <RadioGroup aria-label="user-type" name="user-type" value={userrole} onChange={(e) => setUserRole(e.target.value)}
//             sx={{ display: 'flex', flexDirection: 'row' }}>
//             {userTypes.map((type) => (
//               <FormControlLabel key={type} value={type} control={<Radio />} label={type} />
//             ))}
//           </RadioGroup>
//         </FormControl>
//         <TextField
//           fullWidth
//           label="Username"
//           variant="outlined"
//           margin="normal"
//           value={username}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           variant="outlined"
//           margin="normal"
//           value={useremail}
//           onChange={(e) => setUserEmail(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           variant="outlined"
//           margin="normal"
//           value={userpassword}
//           onChange={(e) => setUserPassword(e.target.value)}
//         />
//         {/* <TextField
//           fullWidth
//           label="Phone"
//           type="phone"
//           variant="outlined"
//           margin="normal"
//           value={userphone}
//           onChange={(e) => setUserPhone(e.target.value)}
//         /> */}
//         <TextField
//   fullWidth
//   label="Phone"
//   type="tel"
//   variant="outlined"
//   margin="normal"
//   value={userphone}
//   onChange={(e) => {
//     const value = e.target.value.replace(/\D/g, '');
//     setUserPhone(value);
//     validatePhone(value);
//   }}
//   error={!isPhoneValid}
//   helperText={!isPhoneValid ? "Phone number must be 10 digits" : ""}
//   inputProps={{ maxLength: 10 }}
// />

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 2, mb: 2 }}
//          >
//           Sign Up 
//         </Button>
//         <small>Already have an account? <Link to="/login">Log in</Link></small>
//       </Box>
//     </Box>
//   );
// };

// export default SignupPage;

import React, { useState } from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddressPage from './AddressPage';

const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    useremail: '',
    userpassword: '',
    userrole: '',
    userphone: ''
  });
  const [addressDetails, setAddressDetails] = useState({
    addressline: '',
    city: '',
    state: '',
    pincode: '',
    country: ''
  });
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const steps = ['User Details', 'Address Details'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAddressDetailsChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userAddressData = {
      userModel: userDetails,
      addressModel: addressDetails
    };
    try {
      const response = await axios.post(`/USERS/addUser`, userAddressData);
      if (response.status === 200) {
        const { userrole } = response.data;
        // localStorage.setItem('userid', userid);
        alert('Signup successful!');
        if (userrole === 'vendor') {
          navigate('/vendor');
        } else if (userrole === 'delivery') {
          navigate('/delivery');
        } else {
          navigate('/user');
        }
      } else {
        console.error('Signup failed', response.data);
      }
    } catch (error) {
      console.error('Error during signup', error);
    }
  };

  const validatePhone = (phone) => {
    const isValid = /^\d{10}$/.test(phone);
    setIsPhoneValid(isValid);
    return isValid;
  };

  return (
    <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh', }}>
      <Box sx={{ maxWidth: 600, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',borderRadius: '10px',minWidth:200,width:600 }}>
        <Stepper alternativeLabel activeStep={activeStep} sx={{mt:3}}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 ? (
          <Box component="form" onSubmit={(e) => { e.preventDefault(); handleNext(); }} sx={{ padding: 5,display:'flex',flexGrow:1,flexWrap:'wrap',flexBasis:'100%',flexDirection:'column' }}>
            <Typography variant="h5" component="h1" gutterBottom>
              Sign Up
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">User Type</FormLabel>
              <RadioGroup
                aria-label="user-type"
                name="userrole"
                value={userDetails.userrole}
                onChange={handleUserDetailsChange}
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                {['user', 'vendor', 'delivery'].map((type) => (
                  <FormControlLabel key={type} value={type} control={<Radio />} label={type} />
                ))}
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              label="Username"
              name="username"
              variant="outlined"
              margin="normal"
              value={userDetails.username}
              onChange={handleUserDetailsChange}
            />
            <TextField
              fullWidth
              label="Email"
              name="useremail"
              variant="outlined"
              margin="normal"
              value={userDetails.useremail}
              onChange={handleUserDetailsChange}
            />
            <TextField
              fullWidth
              label="Password"
              name="userpassword"
              type="password"
              variant="outlined"
              margin="normal"
              value={userDetails.userpassword}
              onChange={handleUserDetailsChange}
            />
            <TextField
              fullWidth
              label="Phone"
              name="userphone"
              type="tel"
              variant="outlined"
              margin="normal"
              value={userDetails.userphone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                handleUserDetailsChange({ target: { name: 'userphone', value } });
                validatePhone(value);
              }}
              error={!isPhoneValid}
              helperText={!isPhoneValid ? 'Phone number must be 10 digits' : ''}
              inputProps={{ maxLength: 10 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
              disabled={!userDetails.username || !userDetails.useremail || !userDetails.userpassword || !userDetails.userrole || !isPhoneValid}
            >
              Next
            </Button>
            <small>Already have an account? <Link to="/login">Log in</Link></small>
          </Box>
        ) : (
          <AddressPage onBack={handleBack} handleAddressDetailsChange={handleAddressDetailsChange} handleSubmit={handleSubmit} addressDetails={addressDetails} />
        )}
      </Box>
    </Box>
  );
};

export default SignupPage;
