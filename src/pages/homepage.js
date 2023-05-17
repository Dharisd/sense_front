import { Table, Card, Button,  } from 'flowbite-react';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from '../components/contact.js';
import FooterCustom from '../components/footer.js';
import Navbar from '../components/nav.js'
import Sponsors from '../components/sponsors.js';





function HomePage() {


  return (
    <div className="flex flex-col bg-gray-50">

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              MNU E-SPORTS 2023
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">

              Welcome to the MNU Esports Competition! Get ready to experience the thrill of intense gaming battles, camaraderie among fellow gamers, and the chance to showcase your skills on the grandest stage. Whether you're a seasoned pro or a rising star, our esports tournament offers a platform for players of all levels to compete,
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="/join"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Join now
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://prod.assets.earlygamecdn.com/images/csgo-2.jpg?transform=article3x_webp"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>



      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section>
        <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div
            className="flex flex-col lg:items-center lg:gap-x-16"
          >
            <div
              className="mx-auto max-w-lg mb-8 text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
            >
              <h2 className="text-3xl text-gray-900 font-bold sm:text-4xl">We have all your favourite games</h2>

              <p className="mt-4 text-gray-600">
                Yes, We are not limiting to just one or two games, We are doing 3, Valorant CS GO and even Rocket League
              </p>


            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              <a href="#" class="group relative block bg-black">
                <img
                  alt="Developer"
                  src="https://assetsio.reedpopcdn.com/valorant-jett-and-phoenix-wallpaper-b.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp"
                  class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Shooter
                  </p>

                  <p class="text-xl font-bold text-white sm:text-2xl">Valorant</p>

                  <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p class="text-sm text-white">
                      Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#" class="group relative block bg-black">
                <img
                  alt="Developer"
                  src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1683566799"
                  class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Shooter
                  </p>

                  <p class="text-xl font-bold text-white sm:text-2xl">Counter Strike GO</p>

                  <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p class="text-sm text-white">

                      Counter-Strike: Global Offensive is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series.
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#" class="group relative block bg-black">
                <img
                  alt="Developer"
                  src="https://rocketleague.media.zestyio.com/rocketpassylogostime.jpg?width=1440&optimize=high"
                  class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Racing 
                  </p>

                  <p class="text-xl font-bold text-white sm:text-2xl">Rocket League</p>

                  <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p class="text-sm text-white">
                      Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for PlayStation 4 and Windows in July 2015, with ports for Xbox One and Nintendo Switch being released later on
                      </p>
                    </div>
                  </div>
                </div>
              </a>






            </div>
          </div>
        </div>
      </section>
      <Sponsors></Sponsors>
      <Contact></Contact>
      <FooterCustom/>

    </div>






  )
}

export default HomePage;