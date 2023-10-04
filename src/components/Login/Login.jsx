import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
    };
    
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
        })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
            console.log(error)
        })
    }

  return (
    <div>
      <div>
              { 
                  user?
                  <button onClick={handleSignOut}>Sign Out</button>:
                      <>
                          <button onClick={handleGoogleSignIn}>Google Login</button>
                          <button onClick={handleGithubSignIn}>Github SignIn</button>
                      </>
              }
              
      </div>
      {user && (
        <div>
                  <h3>User: {user.displayName} </h3>
                  <h2>Email: {user.email} </h2>
                  <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
