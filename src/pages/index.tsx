import { type NextPage } from "next";
import Head from "next/head";
import Script from 'next/script';
import Link from "next/link";
import { NavBar } from "~/components/NavBar";

import { api } from "~/utils/api";
import { useState } from "react";
import { getChatResponse } from "./async (params:any) => {
  api
}";


const Home: NextPage = () => {
  const [showForm, setShowForm] = useState(false)
  const handleFormToggle = () => {
    setShowForm(!showForm)
  }
  
// Get the response from the OpenAI API
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const response = getChatResponse("What is the meaning of life?");



  return (
    <>
    
<Head>
  <title>frontforumfocus</title>
</Head>
<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white font-sans">
  <p className="text-2xl">
    
  </p>
  <h1 className="text-5xl font-bold text-center mt-12 mb-6 tracking-wider">
    frontforumfocus
  </h1>
  <h2 className="text-center text-lg leading-7 mb-16 max-w-2xl">
  <a href="/sdgs-form" className="text-blue-500 hover:text-blue-700">
    Discover the Sustainable Development Goals (SDGs) that Matter Most to You.
  </a>
</h2>
  <div className="home-page-features flex flex-wrap justify-center items-center gap-6 py-10">
    <div className="home-page-feature max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Community Initiatives</h2>
      <p className="text-gray-700 text-lg">
        Join a community of individuals and organizations working towards sustainable development goals.
      </p>
    </div>
    <div className="home-page-feature max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Marketplace</h2>
      <p className="text-gray-700 text-lg">
        Discover and purchase sustainable products and services from verified sellers.
      </p>
    </div>
    <div className="home-page-feature max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Educational Resources</h2>
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
      <path d="M19.249,26.903c-1.14,2.505-3.912,3.703-6.417,2.564c-2.505-1.139-3.703-3.912-2.564-6.417c1.139-2.505,3.912-3.703,6.417-2.564C20.28,21.038,20.389,24.398,19.249,26.903z M24.704,15.824c-1.847,4.038-5.988,6.082-10.025,4.234c-4.037-1.848-6.082-5.988-4.235-10.025c1.848-4.037,5.988-6.082,10.025-4.234C24.232,7.019,26.277,11.17,24.704,15.824z M18.237,0.425C8.443-1.636,0.619,5.301,0.194,15.096c-0.425,9.795,6.154,17.62,15.949,18.045c9.795,0.425,17.62-6.154,18.045-15.949C35.061,9.84,28.282,1.916,18.237,0.425z M21.426,21.147c-0.793,1.731-2.719,2.597-4.45,1.805c-1.731-0.792-2.597-2.719-1.805-4.45c0.792-1.731,2.719-2.597,4.45-1.805C21.788,16.825,22.614,19.416,21.426,21.147z M26.523,10.068c-1.302,2.841-3.891,4.43-6.732,3.129c-2.84-1.302-4.43-3.891-3.129-6.732c1.302-2.84,3.891-4.43,6.732-3.129C27.551,4.215,27.842,7.228,26.523,10.068z" />
      </svg>
      </a>




  </div>
  
  
        
        <p className="mt-6 text-center text-gray-500">Don&apos;t forget to subscribe to our podcast!</p>
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
