import React from "react";
import { Helmet } from "react-helmet";
import "../components/Layout/Layout.css";
import { navigate } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";


export default function Home() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
          <button className="btn btn-light"
            onClick={() =>
              isLoading ? (alert("loading"))
                : 
                <>
                {isAuthenticated ? (navigate("weatherIndex")) :
                  (alert("you must be logged in and authenticated to use this"))
                }
                </>}
              >
            Bored? Check the weather!</button>
        </div>
      </main>
    </>
  );
}
