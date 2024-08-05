// import React from 'react';
// import { TextField, InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import { styled } from '@mui/system';

// const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiOutlinedInput-root': {
//     boxShadow: theme.shadows[1],
//     borderRadius: '1rem',
//     transition: 'all 0.3s ease-in-out',
//     width: '14rem',
//     '&:hover': {
//       width: '16rem',
//     },
//     '&.Mui-focused': {
//       width: '16rem',
//       borderColor: theme.palette.primary.main,
//       borderWidth: '2px',
//     },
//   },
//   '& .MuiInputBase-input': {
//     padding: '10px 14px',
//   },
//   '& .MuiInputAdornment-positionEnd': {
//     marginRight: '0.5rem',
//   },
// }));

// const SearchBar = () => {
//   return (
//     <CustomTextField
//       placeholder="Search..."
//       variant="outlined"
//       name="search"
//       type="search"
//       InputProps={{
//         endAdornment: (
//           <InputAdornment position="end">
//             <SearchIcon />
//           </InputAdornment>
//         ),
//       }}
//     />
//   );
// };

// export default SearchBar;
import React, { useState, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  
  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/getAllproduct'); // Adjust the endpoint as needed
        setAllProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const results = allProducts.filter(item => 
        item.productname.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <Box sx={{ width: '30vw', maxWidth: '100%',}}> {/* Adjust width */}
      <TextField
        fullWidth
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: searchTerm && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2, backgroundColor: '#f0f0f0',borderRadius:1  }}
      />
      {searchResults.length > 0 && (
        <Box sx={{ position: 'absolute', zIndex: 1000, top: '90%', left: 690, width: '30vw',backgroundColor: '#f0f0f0',padding:'10px',borderRadius:2 }}> {/* Adjust positioning */}
          <Grid container spacing={1}>
            {searchResults.map((result) => (
              <Grid item xs={12} key={result.id}>
                <Card sx={{ display: 'flex', mb: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100, objectFit: 'cover' }}
                    image={result.image}
                    alt={result.productname}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{result.productname}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.description}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      ${result.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button variant="outlined" fullWidth sx={{ mt: 2,borderRadius:6,backgroundColor:'#b4e639',color:'white',fontSize:'1.3rem',fontWeight:'bold',
          '&:hover': {
            color:'black',
            backgroundColor:'white'
          }
           }}>
            View All Results
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;

