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
    <div
    className={cn(
      inter300.className,
      "mx-auto flex min-h-screen min-w-fit flex-col"
    )}
  >
      <Head>
        <title>{meta.title}</title>
    
      </Head>
        <Navbar />
        
        <div>{children}</div>
        <Footer/>
        
    </div>
    
    </div>

  


  );
}
