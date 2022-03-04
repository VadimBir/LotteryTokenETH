import React from "react";
import { useMoralis } from "react-moralis";

function AppAuth(){
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    console.log("user", isAuthenticated)
    return <div>
        {isAuthenticated ? (
        <>
          <button onClick={logout}>Logout</button>
              <h2>Welcome {user.get("username")}</h2>
          <h2>Your wallet address is {user.get("ethAddress")}</h2>
        </>
      ) : (
        <button
          onClick={() => {
            authenticate({ provider: "metamask" });
          }}
        >
          Sign in with MetaMask
        </button>
      )}
    </div>;






}

export default AppAuth;
