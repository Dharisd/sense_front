function Contact() {
    return (
        <section>
            <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div
                    className="flex flex-col lg:items-center lg:gap-x-16"
                >
                    <div
                        className="mx-auto max-w-lg mb-8 text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                    >
                        <h2 className="text-3xl text-gray-900 font-bold sm:text-4xl">Contact us </h2>

                        <p className="mt-4 text-gray-600">
                            Dont hesitate to contact us if you have any further queries or suggestions
                        </p>


                    </div>




  <div class="mx-auto w-full max-w-lg ">

    <form action="" class="mt-10">
    


      <input type="hidden"/> 
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="relative z-0">
          <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0 text-sm   focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div class="relative z-0">
          <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0 text-sm   focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div class="relative z-0 col-span-2">
          <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0 text-sm   focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" class="mt-5 rounded-md bg-teal-600 px-10 py-2 text-white">Send Message</button>
    </form>
  </div>



                </div>
            </div>
        </section>
    )
}

export default Contact;