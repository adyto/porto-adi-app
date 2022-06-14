import type { NextPage } from 'next'
import React, { useEffect, useRef } from "react"
import Script from "next/script"

import Head from 'next/head'
// https://bobbyhadz.com/blog/react-document-getelementbyid-returns-null#:~:text=getElementById()%20returns%20NULL%20in%20React%20%23,method%20in%20the%20useEffect%20hook.

const Home: NextPage = () => {
  const refMenu = useRef() as React.MutableRefObject<HTMLUListElement>
  const onHamburgerClick = () => {
    refMenu.current.classList.toggle("hidden")
  }
  console.log('test111')
  return (
    <>
      <Head>
        <title>Tailwind Portofolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className='font-nunito'>
        {/* intro section */}
        <div className="lg:h-screen md:h-screen sm:h-screen h-screen bg-gradient-to-t from-indigo-200">
          {/* navbar */}
          <nav className="w-full fixed top-0 bg-white">
            <div className="container mx-auto py-5 items-center flex justify-between">
              <div className="flex items-center gap-2">
                <img className="w-8 rounded-full" src="/img/ic-sad.png" alt="" />
                <span className="text-2xl font-bold text-indigo-900">Ady.to</span>
              </div>
              <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
                <li className="hover:text-gray-500">
                  <a href="#">homepage</a>
                </li>
                <li className="hover:text-gray-500">
                  <a href="#">about me</a>
                </li>
                <li className="hover:text-gray-500">
                  <a href="#">service</a>
                </li>
                <li className="hover:text-gray-500">
                  <a href="#">works</a>
                </li>
                <li className="hover:text-gray-500">
                  <a href="#">contact</a>
                </li>
              </ul>
              <img className="hidden md:block w-8 cursor-pointer" src="/icon/ic-moon.png" />
              <div id="hamburger" onClick={onHamburgerClick} className="space-y-1 md:hidden cursor-pointer z-20">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
              <ul id="menu" ref={refMenu} className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
                <li>
                  <a href="#">homepage</a>
                </li>
                <li>
                  <a href="#">about me</a>
                </li>
                <li>
                  <a href="#">service</a>
                </li>
                <li>
                  <a href="#">works</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      {/* <Script src="sc.js" /> */}
      {/* <script src="hamburger1.js"></script> */}
    </>
  )
}

// const hamburger = document.getElementById("hamburger")
// const menu = document.getElementById("menu")

// hamburger?.addEventListener("click", () => {
//   menu?.classList.toggle("hidden")
// })
// console.log('test')

export default Home
