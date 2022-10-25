import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Enter(props) {
  const { user, username } = useContext(UserContext);
  // const username = null;
  // const [user] = useAuthState(auth);
  console.log(user);
  console.log(username);

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

function UsernameForm() {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(Usercontext);
  return (
    !username && (
      <section>
        <h3>Choose Username</h3>
        <form onSubmit={onSubmit}>
          <input
            name="username"
            placeholder="username"
            value={formValue}
            onChange={onChange}
          />

          <button type="submit" className="btn-green" disabled={!isValid}>
            Choose
          </button>
          <h3>Debug State</h3>
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div>
        </form>
      </section>
    )
  );
}
