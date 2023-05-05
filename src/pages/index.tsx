/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import userData from '../constatnts/data';
import { inter300 } from "../components/fonts";
import cn from "classnames";
import Navbar from "../components/NavBar";



const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>{userData.name}</title>
        <meta name="description" content={userData.projectDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href={userData.avatarUrl} />*/}
      </Head>
      <div
        className={cn(
          inter300.className,
          "mx-auto flex min-h-screen min-w-fit flex-col"
        )}
      >
        <Navbar/>
      </div>

    </>
  );
};

export default Home;
