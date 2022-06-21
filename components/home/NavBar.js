import { signOut } from "firebase/auth";
import { auth } from "../logics/firebase";

function NavBar ({user}) {
    return(
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-cyan-700 font-bold mr-6">ShipCart 🛒</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user ? <img src={user.photoURL} alt="avatar" className="rounded-full" /> : <img src="https://via.placeholder.com/150" alt="avatar" className="rounded-full" />}
        </div>
      </label>
      <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a className="text-red-500" onClick={()=>{
          signOut(auth);
        }}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
}

export default NavBar;