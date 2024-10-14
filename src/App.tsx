import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { clearUserList, getUserList } from "./features/user/userSlice";
import { AppDispatch, RootState } from "./store";
import UserCard from "./components/UserCard";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { userList, isLoading } = useSelector(
    (state: RootState) => state.userList
  );

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
      {/* {JSON.stringify(userList, null, 2)} */}
      {userList?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <div>
        <button
          type="button"
          className="mt-6 p-2 text-sm rounded text-white bg-red-500 capitalize"
          onClick={() => dispatch(clearUserList())}
        >
          Clear All Users
        </button>
      </div>
    </>
  );
}

export default App;
