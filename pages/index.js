import Head from "next/head";
import Image from "next/image";
import HomeScreen from "./home";
import Vendor from "../components/vendor/vendor";
import { useEffect } from "react";
import { auth } from "../components/logics/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        Router.push("/home");
      } else {
        Router.push("/login");
      }
    });
  }, []);

  return (
    <>
        <div>Loading...</div>
    </>
  );
}
