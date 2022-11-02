import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

type Image = { file: string }

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
  image?: Image
}
type InitialState = { loading: boolean, posts: Post[], post: Post | null, error?: string }


const initialState: InitialState = {
  loading: false,
  posts: [],
  post: null,
  error: ""
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data)
})

export const fetchPost = createAsyncThunk('post/fetchPost', async (id: string) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.data)
})

export const fetchPostImage = createAsyncThunk('post/fetchPostImage', async () => {
  return await axios.get(`https://aws.random.cat/meow`).then(response => response.data)
})

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
      state.loading = false,
        state.posts = action.payload,
        state.error = ""
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false,
        state.posts = [],
        state.error = action.error.message
    })
    // Post
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPost.fulfilled, (state, action: PayloadAction<Post>) => {
      state.loading = false,
        state.post = action.payload,
        state.error = ""
    })
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false,
        state.post = null,
        state.error = action.error.message
    })
    // Image
    builder.addCase(fetchPostImage.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPostImage.fulfilled, (state, action: PayloadAction<Image>) => {
      state.loading = false,
        state.post!.image = action.payload,
        state.error = ""
    })
    builder.addCase(fetchPostImage.rejected, (state, action) => {
      state.loading = false,
        state.post!.image!.file = "",
        state.error = action.error.message
    })
  }
})

export default postSlice.reducer