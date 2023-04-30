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
</main>



        
      
    </>
  );
};

export default Home;
