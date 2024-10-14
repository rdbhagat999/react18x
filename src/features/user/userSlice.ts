import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import type { PayloadAction } from "@reduxjs/toolkit";

const USER_LIST_URL =
  "https://dummyjson.com/users/?limit=10&skip=5&select=id,username,email,password,gender,role";

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  gender: string;
  role: string;
}

export interface IUserState {
  userList: IUser[];
  isUserLoading: boolean;
}

const initialState: IUserState = {
  userList: [] as IUser[],
  isUserLoading: true,
} satisfies IUserState;

export const getUserList = createAsyncThunk(
  "users/getUserList",
  async (name, thunkAPI) => {
    console.log("name", name);
    console.log("thunkAPI", thunkAPI);
    console.log("thunkAPI.getState()", thunkAPI.getState());

    try {
      const resp = await axios(USER_LIST_URL);
      return resp.data?.users as IUser[];
    } catch (error: unknown) {
      // console.log(error);
      // return thunkAPI.rejectWithValue("something went wrong");
      return thunkAPI.rejectWithValue((error as Error)?.message);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUserList: (state) => {
      state.userList = [];
    },
    removeUserById: (state, action) => {
      const userId = action.payload;
      state.userList = state.userList.filter((user) => user.id !== userId);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserList.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.userList = action.payload;
      })
      .addCase(getUserList.rejected, (state) => {
        state.isUserLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearUserList, removeUserById } = userSlice.actions;

export default userSlice.reducer;
