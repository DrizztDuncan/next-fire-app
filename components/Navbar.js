import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

// top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <Link href="/">
          <button className="btn-logo">FEED</button>
        </Link>

        {/* { user is signed-in and has username } */}
        {/* react fragment is this empty HTML element and in JSX it allows you to 
        have multiple elements here without the need of actual parent element */}
        {username && (
          <>
            <li className="push-left">
              <Link href={"/admin"}>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* { user is not signed-in and has not username } */}
        {!username && (
          <>
            <li>
              <Link href="/enter">
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
