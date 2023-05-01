import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/auth.api.js";

const initialState = {
  value: {
    user: {
      id: null,
      email: null,
      token: null,
      photo: null,
      status: null,
      info: null,
    },
    loading: false,
  },
};

export const signIn = createAsyncThunk("auth/signIn", async (parameters, asyncThunk) => {
  try {
    const res = await login({
      email: parameters.email,
      password: parameters.password,
    });

    return res;
  } catch (error) {
    console.log("signIn createAsyncThunk -> error", error);
    return rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    resetAuthData: () => initialState,

    setAuthData: (state, action) => {
      state.value.user.token = action.payload.token;
      state.value.user.email = action.payload.email;
    },

    resetError: (state, action) => {
      state.value.error = false;
      state.value.errorMessage = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, { payload }) => {
      state.value.authenticating = true;
      state.value.error = null;
      state.value.errorCode = null;
      state.value.errorMessage = null;
    });

    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      if (payload.error) {
        state.value.error = true;
        state.value.errorCode = payload.error;
        state.value.errorMessage = payload.errorMessage;
      } else {
        state.value.user.token = payload.token;
        state.value.user.email = payload.email;
        state.value.user.role = payload.role;
        state.value.user.photo = payload.photo;
        state.value.user.id = payload.id;
        state.value.error = false;
        state.value.errorMessage = null;
      }
      state.value.authenticating = false;
    });

    builder.addCase(signIn.rejected, (state, { payload }) => {
      console.log("signIn.rejected", payload);

      state.value.authenticating = false;
      state.value.error = true;
      state.value.errorMessage = payload ? payload.error.message : "NO ERROR DESCRIPTION";
    });
    
  },
});

export const { resetAuthData, resetError, setAuthData } = authSlice.actions;

export default authSlice.reducer;
