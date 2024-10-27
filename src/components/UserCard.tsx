import { useDispatch } from "react-redux";
import { IUser, removeUserById } from "../features/user/userSlice";
import { AppDispatch } from "../store";

export default function UserCard({ user }: { user: IUser }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mt-2 flex justify-center items-center gap-4">
      <h1 className="capitalize">Username: {user?.username}</h1>
      <button
        type="button"
        className="py-1 px-2 text-sm rounded text-white bg-red-500 capitalize"
        onClick={() => dispatch(removeUserById(user.id))}
      >
        X
      </button>
    </div>
  );
}
