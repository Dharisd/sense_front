function Sponsors() {
    return (
        <section>
            <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div
                    className="flex flex-col lg:items-center lg:gap-x-16"
                >
                    <div
                        className="mx-auto max-w-lg mb-8 text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                    >
                        <h2 className="text-3xl text-gray-900 font-bold sm:text-4xl">Our Sponsors</h2>

                        <p className="mt-4 text-gray-600">
                            All this made possible by the extremely generous contributions by our beloved sponsors
                        </p>


                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">




                        <article
                            class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                        >
                            <img
                                alt="Office"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Emblem_of_Maldives.svg/531px-Emblem_of_Maldives.svg.png?20140722110714"
                                class="h-56 w-full object-contain"
                            />

                            <div class="p-4 sm:p-6">
                                <a href="#">
                                    <h3 class="text-lg font-medium text-gray-900">
                                        Maldivian Goverment
                                    </h3>
                                </a>

                                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Our Sincere gratitude to our beloved president for providing us access to GPUS
                                </p>


                            </div>
                        </article>

                        <article
                            class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                        >
                            <img
                                alt="Office"
                                src="https://www.dhiraagu.com.mv/clients/Dhiraagu_CA2BB809-3A22-485B-A518-DA6B6DE653A5/contentMS/img/SM%20Thumb%20-%20Personal.jpg"
                                class="h-56 w-full object-cover"
                            />

                            <div class="p-4 sm:p-6">
                                <a href="#">
                                    <h3 class="text-lg font-medium text-gray-900">
                                        Dhiraagu 
                                    </h3>
                                </a>

                                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Our Sincere gratitude to our beloved ISP for lowering ping by 10ms.
                                </p>

                            </div>
                        </article>

                        <article
                            class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                        >
                            <img
                                alt="Office"
                                src="https://i2-prod.mirror.co.uk/incoming/article28934029.ece/ALTERNATES/n615/0_GettyImages-1246165130.jpg"
                                class="h-56 w-full object-cover"
                            />

                            <div class="p-4 sm:p-6">
                                <a href="#">
                                    <h3 class="text-lg font-medium text-gray-900">
                                        Messi 
                                    </h3>
                                </a>

                                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Our Sincere gratitude to our beloved Messi for exisiting.
                                </p>

                            </div>
                        </article>








                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors;