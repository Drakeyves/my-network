import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@firebase/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  userRole: 'admin' | 'user' | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  userRole: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setUserRole: (state, action: PayloadAction<'admin' | 'user' | null>) => {
      state.userRole = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.userRole = null;
    },
  },
});

export const { setUser, setUserRole, clearAuth } = authSlice.actions;
export default authSlice.reducer;