import { GetServerSideProps } from "next";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: "jeff" }}>
      <Navbar />
      <Component {...pageProps} />
      {/* ↓↓↓ invisible by default than provide overlay when triggered */}
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
