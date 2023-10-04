import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {
    firstname: '',
    lastname: '',
    address: '',
    apt: '',
    plan: {},
    email: '',
    phone: '',
  },
  selectAddress: {},
  loading: 'idle',
  error: null
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async (user) => {
    const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}users`, user)
    return data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,  { payload }) => {
      const { name, value } = payload
      state.userData = {...state.userData, [name]: value}
    },
    setAddress: (state,  { payload }) => {
      const { address, city, state: stateAds, postal } = payload
      const newAddress = `${address}, ${city}, ${stateAds} ${postal}`
      state.selectAddress = {...payload}
      state.userData = {...state.userData, address: newAddress}
    },
    removeAddress: (state) => {
      state.selectAddress = {}
      state.userData = {...state.userData, address: ''}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
          state.status = 'loading'
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.status = 'idle',
        state.userData = {...payload}
      })
      .addCase(createUser.rejected, (state, { error }) => {
        state.status = 'failed',
        state.error = error.message
      })

  }
});

export const { setUser, setAddress, removeAddress } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;