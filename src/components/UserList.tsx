import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList, clearUserList } from "../features/user/userSlice";
import { AppDispatch, RootState } from "../store";
import UserCard from "./UserCard";
import LoadingComponent from "./LoadingComponent";

export default function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  const { userList, isUserLoading } = useSelector(
    (state: RootState) => state.userList
  );

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <>
      {isUserLoading ? (
        <LoadingComponent text="users" />
      ) : (
        <div>
          <h2 className="my-1 p-1 text-2xl font-medium">User list</h2>
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
    </>
  );
}
