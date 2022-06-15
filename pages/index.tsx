import React, { useRef } from 'react';
import Script from 'next/script';
// https://bobbyhadz.com/blog/react-document-getelementbyid-returns-null#:~:text=getElementById()%20returns%20NULL%20in%20React%20%23,method%20in%20the%20useEffect%20hook.

function Home() {
  const refMenu = useRef() as React.MutableRefObject<HTMLUListElement>;
  const refHamburger = useRef() as React.MutableRefObject<HTMLDivElement>;
  const onHamburgerClick = () => {
    refMenu.current.classList.toggle('hidden');
    refHamburger.current.classList.toggle('bg-white');
  };
  return (
    <>
      <section className="font-nunito">
        {/* intro section */}
        <div className="lg:h-screen md:h-screen sm:h-screen h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
          {/* navbar */}
          <nav className="w-full fixed top-0 bg-white z-10">
            <div className="container mx-auto py-5 my-3 md:my-10 items-center flex justify-between">
              <div className="flex items-center gap-2">
                <img className="w-8 rounded-full" src="/img/ic-sad.png" alt="" />
                <span className="text-2xl font-bold text-indigo-900">Ady.to</span>
              </div>
              <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
                <li className="hover:text-gray-500">
                  <a href="/#">homepage</a>
                </li>
                <li className="hover:text-gray-500">
                  <a href="/#">about me</a>
                </li>
                <li className="hover:text-gray-500">
                  <a href="/#">service</a>
                </li>
                <li className="hover:text-gray-500">
                  <a href="/#">works</a>
                </li>
                <li className="hover:text-gray-500">
                  <a href="/#">contact</a>
                </li>
              </ul>
              <img className="hidden md:block w-8 cursor-pointer" src="/icon/ic-moon.png" alt="" />

              <div ref={refHamburger} onClick={onHamburgerClick} onKeyDown={onHamburgerClick} className="space-y-1 md:hidden cursor-pointer z-20 " role="button" tabIndex={0}>
                <div className="w-6 h-0.5 bg-black" />
                <div className="w-6 h-0.5 bg-black" />
                <div className="w-6 h-0.5 bg-black" />
              </div>
              <ul id="menu" ref={refMenu} className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
                <li>
                  <a href="/#">homepage</a>
                </li>
                <li>
                  <a href="/#">about me</a>
                </li>
                <li>
                  <a href="/#">service</a>
                </li>
                <li>
                  <a href="/#">works</a>
                </li>
                <li>
                  <a href="/#">contact</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* intro section */}
          {/* image */}
          <img className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover" src="img/man.png" alt="" />

          {/* circle */}
          <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10" />

          {/* animated text */}
          <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/5 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
            <span className="text-gray-600">Frelance</span>
            <p id="text" className="text-red-500" />
          </div>

          {/* texts */}
          <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
            <h1 className="text-4xl font-bold text-indigo-900">Hi, Saya Adi Yulianto</h1>
            <p className="text-gray-400">Saya adalah seorang frelance developer, designer dan ui/ux. Portofolio ini merupakan bagian dari kegiatan yang telah saya lakukan dengan hasil akhir pengalaman saya akan di tampilkan di website.</p>
            <a className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit" href="#contact">Hire Me!</a>
          </div>
        </div>
        {/* about */}
        <div className="px-10">
          <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
            {/* left */}
            <div className="relative">
              <img className="h-1/4 absolute top-0 left-0 -z-10" src="img/dots.png" alt="" />
              <div className="h-full rounded-full overflow-hidden">
                <img src="img/portrait.png" alt="" />
              </div>
            </div>
            {/* right */}
            <div className="my-auto flex flex-col gap-3">
              <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
              <h1 className="text-3xl font-medium">Better Design</h1>
              <h1 className="text-3xl font-medium">Better Experience</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius facere dolore omnis reprehenderit ipsam distinctio quo, dolores sunt sint quae nobis aliquam similique ut provident quam laboriosam nemo voluptas.
              </p>
              <h2 className="text-gray-400 font-medium">HTML</h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                <div className="w-full bg-indigo-600 h-1.5 rounded-md" />
              </div>
              <h2 className="text-gray-400 font-medium">Javascript</h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md" />
              </div>
              <h2 className="text-gray-400 font-medium">React JS</h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* services */}
        <div>
          <div className="container mx-auto">
            {/* top */}
            <div className="flex flex-col gap-3 items-center">
              <h1 className="text-indigo-600 font-bold">SERVICES</h1>
              <h1 className="text-3xl">What do I offer?</h1>
              <p className="w-1/2 text-center text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus facere rerum sunt et officia tempora! Architecto pariatur, perspiciatis dicta esse quo numquam voluptas at facilis natus tenetur illo? Velit?</p>
            </div>
            {/* bottom */}
            <div className="p-5 sm:p-0 flex flex-wrap justify-between">
              {/* card */}
              <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img className="w-10" src="img/icon.png" alt="" />
                <h1 className="font-medium text-lg">UI / UX Design</h1>
                <p className="text-gray-400"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam aliquam accusamus, cupiditate repudiandae ullam totam atque non, provident deleniti officia iusto. Impedit non ratione libero suscipit officia odio temporibus.</p>
                <a className="text-indigo-600 font-semibold text-sm" href="">Read More</a>
              </div>
              {/* card */}
              <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img className="w-10" src="img/icon.png" alt="" />
                <h1 className="font-medium text-lg">UI / UX Design</h1>
                <p className="text-gray-400"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam aliquam accusamus, cupiditate repudiandae ullam totam atque non, provident deleniti officia iusto. Impedit non ratione libero suscipit officia odio temporibus.</p>
                <a className="text-indigo-600 font-semibold text-sm" href="">Read More</a>
              </div>
              {/* card */}
              <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img className="w-10" src="img/icon.png" alt="" />
                <h1 className="font-medium text-lg">UI / UX Design</h1>
                <p className="text-gray-400"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam aliquam accusamus, cupiditate repudiandae ullam totam atque non, provident deleniti officia iusto. Impedit non ratione libero suscipit officia odio temporibus.</p>
                <a className="text-indigo-600 font-semibold text-sm" href="">Read More</a>
              </div>
              {/* card */}
              <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img className="w-10" src="img/icon.png" alt="" />
                <h1 className="font-medium text-lg">UI / UX Design</h1>
                <p className="text-gray-400"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam aliquam accusamus, cupiditate repudiandae ullam totam atque non, provident deleniti officia iusto. Impedit non ratione libero suscipit officia odio temporibus.</p>
                <a className="text-indigo-600 font-semibold text-sm" href="">Read More</a>
              </div>
              {/* card */}
              <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img className="w-10" src="img/icon.png" alt="" />
                <h1 className="font-medium text-lg">UI / UX Design</h1>
                <p className="text-gray-400"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam aliquam accusamus, cupiditate repudiandae ullam totam atque non, provident deleniti officia iusto. Impedit non ratione libero suscipit officia odio temporibus.</p>
                <a className="text-indigo-600 font-semibold text-sm" href="">Read More</a>
              </div>
              {/* card */}
              <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img className="w-10" src="img/icon.png" alt="" />
                <h1 className="font-medium text-lg">UI / UX Design</h1>
                <p className="text-gray-400"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam aliquam accusamus, cupiditate repudiandae ullam totam atque non, provident deleniti officia iusto. Impedit non ratione libero suscipit officia odio temporibus.</p>
                <a className="text-indigo-600 font-semibold text-sm" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Script src="sc.js" /> */}
      {/* <script src="hamburger1.js"></script> */}
      <Script src="autotyping.js" />
    </>
  );
}
export default Home;

// const hamburger = document.getElementById("hamburger")
// const menu = document.getElementById("menu")

// hamburger?.addEventListener("click", () => {
//   menu?.classList.toggle("hidden")
// })
// console.log('test')
