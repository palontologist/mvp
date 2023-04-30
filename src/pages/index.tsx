import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { NavBar } from "~/components/NavBar";

import { api } from "~/utils/api";
const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });


  return (
    <>
    
<Head>
  <title>frontforumfocus</title>
</Head>
<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white font-sans">
  <p className="text-2xl">
    {hello.data ? hello.data.greeting : "Loading tRPC query ..."}
  </p>
  <h1 className="text-5xl font-bold text-center mt-12 mb-6 tracking-wider">
    frontforumfocus
  </h1>
  <p className="text-center text-lg leading-7 mb-16 max-w-2xl">
    A platform connecting individuals and organizations working on sustainable development goals through community initiatives, marketplace, and educational resources
  </p>

  <div className="home-page-features flex flex-wrap justify-center items-center gap-6 py-10">
    <div className="home-page-feature max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Community Initiatives</h2>
      <p className="text-gray-700 text-lg">
        Join a community of individuals and organizations working towards sustainable development goals.
      </p>
    </div>
    <div className="home-page-feature max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <p className="text-gray-700 text-lg">
        Discover and purchase sustainable products and services from verified sellers.
      </p>
    </div>
    <div className="home-page-feature max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Educational Resources</h2>
      <p className="text-gray-700 text-lg">
        Access a range of educational resources on sustainable development goals and best practices.
      </p>
    </div>
  </div>
  <div className="social-links flex justify-center my-10">
  <a
    href="https://youtube.com/@frontforumfocus"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-4 text-white hover:text-gray-300"
  >
    <span className="sr-only">YouTube</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.784 6.25a2.98 2.98 0 00-2.096-2.096C17.052 3.38 12 3.38 12 3.38s-5.052 0-7.688.774A2.98 2.98 0 002.216 6.25C1.44 8.884 1.44 12 1.44 12s0 3.116.776 5.75a2.98 2.98 0 002.096 2.096C6.948 20.62 12 20.62 12 20.62s5.052 0 7.688-.774a2.98 2.98 0 002.096-2.096c.775-2.634.775-5.75.775-5.75s0-3.116-.776-5.75zm-11.784 8.75V9.25l6.25 3.25-6.25 3.5z" />
    </svg>
  </a>

  <a
    href="https://open.spotify.com/show/your-spotify-channel"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-4 text-white hover:text-gray-300"
  >
    <span className="sr-only">Spotify</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.012 18.155c.813.524 1.764.81 2.767.81 1.109 0 2.217-.344 3.16-.994l.3-.18.498.81c1.212 1.97 3.416 2.59 5.387 1.373 1.97-1.212 2.59-3.416 1.373-5.387-.138-.224-.3-.426-.474-.617-.06-.06-.12-.12-.18-.18l.18-.12c1.568-1.184 1.92-3.517.736-5.085-1.184-1.568-3.517-1.92-5.085-.736-1.568 1.184-1.92 3.517-.736 5.085.143.218.306.42.474.617.06.06.12.12.18.18l-.18/>
      <
      </a>




  </div>
  
  
        
        <p className="mt-6 text-center text-gray-500">Don't forget to subscribe to our podcast!</p>
        { /* Footer */ }
  <footer className="bg-green-700 w-full py-6 px-4">
    <p className="text-white text-center">
      &copy; 2023 frontforumfocus. All Rights Reserved.
    </p>
    
  </footer>


</main>



        
      
    </>
  );
};

export default Home;
