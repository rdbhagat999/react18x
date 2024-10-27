import { useDispatch } from "react-redux";
import { IPost, removePostById } from "../features/post/postSlice";
import { AppDispatch } from "../store";

export default function PostCard({ post }: { post: IPost }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mt-2 flex justify-center items-center gap-4">
      <h1 className="capitalize">Title: {post?.title}</h1>
      <button
        type="button"
        className="py-1 px-2 text-sm rounded text-white bg-red-500 capitalize"
        onClick={() => dispatch(removePostById(post.id))}
      >
        X
      </button>
    </div>
  );
}
