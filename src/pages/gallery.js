import { Table, Card, Button, } from 'flowbite-react';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from '../components/contact.js';
import FooterCustom from '../components/footer.js';
import Navbar from '../components/nav.js'
import Sponsors from '../components/sponsors.js';





function Gallery() {


    return (
        <div className="flex flex-col bg-gray-50">
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Gallery
                        </h2>

                        <p className="max-w-md mx-auto mt-4 text-gray-500">
                            Check out absolute 🔥🔥🔥, gallery of images of game screenshots and images from tournaments that could have been
                        </p>
                    </header>

                    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <a href="#" className="block overflow-hidden group">
                                <img
                                    src="https://prod.assets.earlygamecdn.com/images/csgo-2.jpg?mtime=1678019572"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block overflow-hidden group">
                                <img
                                    src="https://editors.dexerto.com/wp-content/uploads/2022/05/20/Valorant-series.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block overflow-hidden group">
                                <img
                                    src="https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block overflow-hidden group">
                                <img
                                    src="https://rocketleague.media.zestyio.com/Tournaments_Brackets.jpg"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <FooterCustom />

        </div>






    )
}

export default Gallery;