import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const [{ children }] = AppRoutes;

  // function ActiveLink(props: { to: string }) {
  //   return (
  //     <NavLink
  //       style={({ isActive }) => {
  //         return {
  //           color: isActive ? "#1d2d44" : "",
  //         };
  //       }}
  //       {...props}
  //     />
  //   );
  // }

  // <nav className="flex bg-indigo-500 text-gray-50 gap-4 justify-center">
  //   <ActiveLink to={"/"}>Home</ActiveLink>

  //   {children.length
  //     ? children.map((value, i) => (
  //         <ActiveLink key={i} to={value.path || ""}>
  //           {value.RouteName}
  //         </ActiveLink>
  //       ))
  //     : null}
  // </nav>;

  return (
    <>
      <nav className="my-4">
        <ul className="flex justify-center items-center gap-4">
          <li>
            <NavLink className={"text-red-500"} to={`/`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-red-500"} to={`/posts`}>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-red-500"} to={`/users`}>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
