import { Link, useLoaderData } from "react-router-dom";

export default function User() {
  const user = useLoaderData();

  if (!user) return <h2>User not found</h2>;

  return (
    <div className="Main user-page">
      <div>
        <Link to="/users">Back</Link>
      </div>
      <p><b>User:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Address:</b> {user.address?.street}, {user.address?.suite},{" "}
      {user.address?.city}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Company:</b> {user.company?.name}</p>
    </div>
  );
}