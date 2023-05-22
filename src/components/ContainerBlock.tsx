import Head from "next/head";
import { useRouter } from "next/router";
import userData from "../constatnts/data";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { inter300 } from "./fonts";
import cn from "classnames"

export default function ContainerBlock({ children, ...customMeta }: any) {
  const router = useRouter();

  const meta = {
    title: userData.about.title,
    description: userData.about.description,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="relative">

      <div className="absolute -z-10 h-screen w-screen overflow-hidden ">
        <div className="invisible absolute top-[50vh] left-[50vw] -z-10 h-5/6 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 skew-y-6 rounded-full bg-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-400 via-neutral-900 to-neutral-900 opacity-20 blur-3xl motion-safe:animate-rotate dark:visible xl:w-5/6 origin-center" />
      </div>


      <div
        className={cn(
          inter300.className,
          "mx-auto flex min-h-screen min-w-fit flex-col 6"
        )}
      >
        <Head>
          <title>{meta.title}</title>

        </Head>
        <Navbar />

        {children}

        <Footer />
      </div>


    </div>




  );
}
