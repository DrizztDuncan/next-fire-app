import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Enter(props) {
  const user = null;
  const username = null;

  // const { user, username } = useContext(UserContext);
  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />

  return (
    // if the user sign out, show the sign in button
    // if the user sign in but miss the user name show the username form
    // if the user is signed in and have the username, allow the user to sign-out
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    // ↓↓↓↓ trigger a pop-up model in the browser itself than the user signs in with their google account
    // in which point they're authenticated with application
    // TIP: handle errors with try/catch
    await auth.signInWithPopup(googleAuthProvider);
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
}

// sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {}
