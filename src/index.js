import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Pages/Header/Header";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Welcome from "./Pages/Welcome/Welcome";
import "./global.css";
// import users from './data/users.json'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import StateHook from "./Pages/StateHookPage/StateHook";
import Community from "./Pages/Community/Community";
import Resources from "./Pages/Resources/Resources";
import About from "./Pages/About/About";
import ErrorPage from "./Pages/Error/Error";
import Users from "./Pages/Users/Users";
import User from "./components/User";
import MyPage from "./Pages/MyPage/MyPage";

const Root = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Welcome />} />
      <Route path="/statehooks" element={<StateHook />} />
      <Route path="/community" element={<Community />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" loader={usersReturn} element={<Users />} />
      <Route path="users/:id" loader={loader} element={<User />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

async function loader({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  return res.json();
}

function usersReturn() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
