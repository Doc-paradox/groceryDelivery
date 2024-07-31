import { Button, FormControlLabel, Radio, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const AddressSelection = ({ userId, onAddressSelected, onAddNewAddress }) => {
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showNewAddressForm, setShowNewAddressForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
      addressline: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    });
  
    useEffect(() => {
      const fetchAddresses = async () => {
        try {
          const response = await axios.get(`/USERS/addresses/${userId}`);
          setAddresses(response.data);
        } catch (error) {
          console.error('Error fetching addresses', error);
        }
      };
      fetchAddresses();
    }, [userId]);
  
    const handleNewAddressChange = (e) => {
      setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
    };
  
    const handleAddNewAddress =  async () => {
      if (Object.values(newAddress).every(value => value.trim() !== '')) {
        try {
            const addressWithUserId = {
              ...newAddress,
              USERID: userId
            };
    
            const response = await axios.put('/USERS/addAddress', addressWithUserId);
            
            // Handle successful response
            console.log('Address added successfully:', response.data);
            onAddNewAddress(response.data); // Assuming the backend returns the newly created address
        }catch (error) {
            console.error('Error adding new address:', error);
            alert('Failed to add new address. Please try again.');
          }
      } else {
        alert('Please fill all address fields');
      }
    };
  
    return (
      <div>
        <Button onClick={() => setShowNewAddressForm(false)}>Use Existing Address</Button>
        <Button onClick={() => setShowNewAddressForm(true)}>Add New Address</Button>
  
        {!showNewAddressForm ? (
          <div>
            {addresses.map(address => (
              <FormControlLabel
                key={address.id}
                control={<Radio />}
                label={address.fullAddress}
                onChange={() => setSelectedAddress(address.id)}
              />
            ))}
            <Button onClick={() => onAddressSelected(selectedAddress)}>
              Use Selected Address
            </Button>
          </div>
        ) : (
          <div>
            <Typography variant="h6">Add New Address</Typography>
            <TextField
              name="addressline"
              label="Address Line"
              value={newAddress.addressline}
              onChange={handleNewAddressChange}
              fullWidth
              required
            />
            <TextField
              name="city"
              label="City"
              value={newAddress.city}
              onChange={handleNewAddressChange}
              fullWidth
              required
            />
            <TextField
              name="state"
              label="State"
              value={newAddress.state}
              onChange={handleNewAddressChange}
              fullWidth
              required
            />
            <TextField
              name="country"
              label="Country"
              value={newAddress.country}
              onChange={handleNewAddressChange}
              fullWidth
              required
            />
            <TextField
              name="pincode"
              label="Pincode"
              value={newAddress.pincode}
              onChange={handleNewAddressChange}
              fullWidth
              required
            />
            <Button onClick={handleAddNewAddress}>Add New Address</Button>
          </div>
        )}
      </div>
    );
  };
  
  export default AddressSelection;