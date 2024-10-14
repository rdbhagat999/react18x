import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUserList, getUserList } from "./features/user/userSlice";
import { clearPostList, getPostList } from "./features/post/postSlice";
import { AppDispatch, RootState } from "./store";
import UserCard from "./components/UserCard";
import PostCard from "./components/PostCard";
import "./App.css";

function LoadingComponent() {
  return (
    <div className="loading min-h-screen flex justify-center items-center">
      <h1 className="text-5xl font-medium">Loading...</h1>
    </div>
  );
}

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { userList, isUserLoading } = useSelector(
    (state: RootState) => state.userList
  );
  const { postList, isPostLoading } = useSelector(
    (state: RootState) => state.postList
  );

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  // if (isUserLoading || isPostLoading) {
  //   return (
  //     <div className="loading min-h-screen flex justify-center items-center">
  //       <h1 className="text-5xl font-medium">Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <>
      <h1 className="text-3xl text-gray-700 font-bold underline">
        Hello world!
      </h1>
      {/* {JSON.stringify(userList, null, 2)} */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isUserLoading ? (
          <LoadingComponent />
        ) : (
          <div>
            <h2 className="my-1 p-1 text-2xl">User list</h2>
            {userList?.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}

            <button
              type="button"
              className="mt-6 p-2 text-sm rounded text-white bg-red-500 capitalize"
              onClick={() => dispatch(clearUserList())}
            >
              Clear All Users
            </button>
          </div>
        )}

        {isPostLoading ? (
          <LoadingComponent />
        ) : (
          <div>
            <h2 className="my-1 p-1 text-2xl">Post list</h2>
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
      </div>
    </>
  );
}

export default App;
