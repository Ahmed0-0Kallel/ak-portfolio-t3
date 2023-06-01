/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import userData from '../constatnts/data';
import { inter300, inter700 } from "../components/fonts";
import cn from "classnames";
import Navbar from "../components/NavBar";
import Layout from "../components/Layout";
import { GitHubIcon, LinkedInIcon, RightChevronIcon, YouTubeIcon } from "../components/Icons"
import Footer from "../components/Footer";
import axios from 'axios';
import { useEffect, useState } from 'react';

// Define interface for GithubCommit object
interface GithubCommit {
  name:string
  sha: string;
  commit: {
    author: {
      date: string;
    };
  };
}


// Function to get the last commit for a given GitHub repo
const getLastCommit = async (repoOwner: string, repoName: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/commits`
    );

    let lastCommit = response.data[0];
    lastCommit = { ...lastCommit, name: repoName };
    console.log(lastCommit)
    return lastCommit;
  } catch (error) {
    console.error('Error fetching last commit:', error);
    return null;
  }
};




// IconLink component for rendering external link icons
function IconLink({
  Icon,
  href,
  className,
}: {
  Icon: React.FC<{ className?: string }>;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row items-center gap-2 dark:hover:bg-transparent dark:hover:text-white",
        className
      )}
    >
      <Icon className="m-1 inline h-6 w-6" />
    </Link>
  );
}

// Home component for the main page

const Home: NextPage = () => {
  const [lastCommit, setLastCommit] = useState<GithubCommit | null>(null);

  useEffect(() => {
    const fetchLastCommit = async () => {
      const commit = await getLastCommit('ahmedkall', 'ak-portfolio-t3');
      console.log(commit)
      setLastCommit(commit);
    };

    fetchLastCommit();
  }, []);

  return (
    <>
      <Head>
        <title>{userData.name}</title>
        <meta name="description" content={userData.projectDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative">
      // Background gradient
        <div className="absolute -z-10 h-screen w-screen overflow-hidden">
          <div className="invisible absolute top-[50vh] left-[50vw] -z-10 h-5/6 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 skew-y-6 rounded-full bg-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-400 via-neutral-900 to-neutral-900 opacity-20 blur-3xl motion-safe:animate-light-up dark:visible xl:w-5/6 " />
        </div>


        <div
          className={cn(
            inter300.className,
            "mx-auto flex min-h-screen min-w-fit flex-col"
          )}
        >
          <Navbar />

          <div className='flex grow items-center justify-center'>


            <Layout className="relative flex h-full w-full flex-col items-center justify-center px-6">
              <div className="relative">
                <div
                  className={cn(
                    inter700.className,
                    "relative -my-3 h-full w-fit whitespace-nowrap bg-gradient-to-br from-black via-transparent to-transparent bg-400% bg-clip-text py-3  text-4xl leading-5 text-transparent motion-safe:animate-background-pan dark:from-white dark:via-black xs:text-5xl sm:-mb-2 sm:pb-2 sm:text-6xl"
                  )}
                >
                  Ahmed Kallel
                </div>

                <div className="motion-safe:animate-fade-up">
                  <Balancer
                    ratio={1}
                    as="div"
                    className="mt-6 w-0 min-w-full text-base text-black dark:text-neutral-300 sm:text-xl"
                  >
                    Final year computer science student. Working as a chatbot developer. Interested in fullstack and blockchain development.
                  </Balancer>
                    // Display last commit information if available
                    {lastCommit && (
                      <div className="flex h-8 max-w-2xl flex-row gap-2 xs:h-full my-2">
                        <GitHubIcon className="inline h-4 w-4 flex-shrink-0 sm:m-[0.125rem]" />
                        Pushed {lastCommit.sha.slice(0, 7)} to {lastCommit.name}{' '}
                        {`${Math.floor((Date.now() - new Date(lastCommit.commit.author.date).getTime()) / (1000 * 60 * 60))} hours ago`}
                      </div>
                    )}
                  <div className="mt-8 flex flex-row items-center gap-3 text-sm text-black dark:text-neutral-400">
                    <IconLink
                      href={userData.socialLinks.github}
                      Icon={GitHubIcon}
                    />
                    <IconLink
                      href={userData.socialLinks.linkedin}
                      Icon={LinkedInIcon}
                    />
                    <IconLink
                      href={userData.socialLinks.youtube}
                      Icon={YouTubeIcon}
                    />
                    <Link
                      href=""
                      className="ml-2 flex w-fit flex-row items-center gap-1 rounded-full border-1 border-black px-4 py-2 transition-all duration-200 hover:bg-black hover:text-white dark:border-neutral-400 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white"
                    >
                      <span className="whitespace-nowrap text-sm">My resume</span>
                      <RightChevronIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Layout>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};




export default Home;
