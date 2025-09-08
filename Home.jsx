import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Home() {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
      {auth.currentUser ? (
        <div>
          <p>Logged in as: {auth.currentUser.email}</p>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 mt-2">
            Logout
          </button>
        </div>
      ) : (
        <p>Please login or signup</p>
      )}
    </div>
  );
}

export default Home;
