import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import type { PayloadAction } from "@reduxjs/toolkit";

const POST_LIST_URL =
  "https://dummyjson.com/posts/?limit=10&skip=5&select=id,title,email,body,userId,views";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  views: number;
}

export interface IPostState {
  postList: IPost[];
  isPostLoading: boolean;
}

const initialState: IPostState = {
  postList: [] as IPost[],
  isPostLoading: true,
} satisfies IPostState;

export const getPostList = createAsyncThunk(
  "posts/getPostList",
  async (name, thunkAPI) => {
    console.log("name", name);
    console.log("thunkAPI", thunkAPI);
    console.log("thunkAPI.getState()", thunkAPI.getState());

    try {
      const resp = await axios(POST_LIST_URL);
      return resp.data?.posts as IPost[];
    } catch (error: unknown) {
      // console.log(error);
      // return thunkAPI.rejectWithValue("something went wrong");
      return thunkAPI.rejectWithValue((error as Error)?.message);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPostList: (state) => {
      state.postList = [];
    },
    removePostById: (state, action) => {
      const postId = action.payload;
      state.postList = state.postList.filter((post) => post.id !== postId);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPostList.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(getPostList.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.postList = action.payload;
      })
      .addCase(getPostList.rejected, (state) => {
        state.isPostLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearPostList, removePostById } = postSlice.actions;

export default postSlice.reducer;
