import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPostList, getPostList } from "../features/post/postSlice";
import { AppDispatch, RootState } from "../store";
import LoadingComponent from "./LoadingComponent";
import PostCard from "./PostCard";

export default function PostList() {
  const dispatch = useDispatch<AppDispatch>();

  const { postList, isPostLoading } = useSelector(
    (state: RootState) => state.postList
  );

  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  return (
    <>
      {isPostLoading ? (
        <LoadingComponent text="posts" />
      ) : (
        <div>
          <h2 className="my-1 p-1 text-2xl font-medium">Post list</h2>
          {postList?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          <button
            type="button"
            className="mt-6 p-2 text-sm rounded text-white bg-red-500 capitalize"
            onClick={() => dispatch(clearPostList())}
          >
            Clear All Posts
          </button>
        </div>
      )}
    </>
  );
}
