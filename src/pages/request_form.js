import { Table, Card, Button } from 'flowbite-react';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterCustom from '../components/footer.js';
import Navbar from '../components/nav.js'







function RequestForm() {
  {
    const [formData, setFormData] = useState({
      name: '',
      nid: '',
      dob: '',
      email: '',
      faculty: '',
      phone_number: '',
      payment_slip: null,
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [errorPhoneMessage, setPhoneErrorMessage] = useState('');

    const [successMessage, setSuccessMessage] = useState('');


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData({ ...formData, payment_slip: file });
    };




    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        // Perform form validation here
        if (!formData.name || !formData.nid || !formData.dob || !formData.email || !formData.faculty || !formData.phone_number || !formData.payment_slip) {
          setErrorMessage('Please fill in all the required fields correctly');
          return;
        }

        if (formData.phone_number.length != 7) {
          const phone_number = formData.phone_number
          console.log(phone_number.length)
          setPhoneErrorMessage('Phone number must be of 7 characters');
        }

        //convert date to tdatetime because of somethings done in backend
        const date_of_birth = new Date(formData.dob).toISOString()
        console.log(date_of_birth)

        // Prepare form data for API request
        const data = new FormData();
        data.append('name', formData.name);
        data.append('nid', formData.nid);
        data.append('dob', date_of_birth);
        data.append('email', formData.email);
        data.append('faculty', formData.faculty);
        data.append('phone_number', formData.phone_number);
        data.append('paymentSlip', formData.payment_slip);

        // Send the form data to the API endpoint
        const response = await fetch('http://127.0.0.1:3000/registration-request/create', {
          method: 'POST',
          body: data,
        });



        if (response.status === 201) {
          // Display success message
          setSuccessMessage('Registration request submitted successfully!');
        }
        else if (response.status === 409) {
          throw new Error('Email has already requested join');
        }
        else {
          throw new Error('An error occurred.');
        }

        console.log(response.data);
        // Reset form data and error message after successful submission
        setFormData({
          name: '',
          nid: '',
          dob: '',
          email: '',
          faculty: '',
          phone_number: '',
          payment_slip: null,
        });
        setErrorMessage('');
      } catch (error) {
        // Handle error if API request fails
        console.error(error);
        setErrorMessage(error.message);

      }
    };

    return (

      <div class="bg-gray-100">
        <section class="bg-gray-100">
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
           
          <div className="text-center mb-8 ">
                <h2 className="text-3xl font-extrabold text-teal-600 sm:text-5xl">
                  Join the hardest competition rn!
                </h2>



              </div>
           
            <div class="flex justify-center">



              <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">

                <form action="" className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="name">Name</label>
                      <input
                        className="w-full rounded-lg border border-gray-200  p-3 text-sm"
                        placeholder="Name"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="email">NID</label>
                      <input
                        className="w-full border border-gray-200 rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="National Identity Number"
                        type="text"
                        id="nid"
                        name="nid"
                        value={formData.nid}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">Email</label>
                      <input
                        className="w-full border border-gray-200  rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}


                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">Phone</label>
                      <input
                        className="w-full border border-gray-200  rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        value={formData.phone_number}
                        name="phone_number"
                        onChange={handleInputChange}

                      />
                    </div>

                    <div>
                      <label className="p-3 text-sm  gray-200" >Birthday</label>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="Birthday"
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}


                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <input
                        className="peer sr-only"
                        id="option1"
                        type="radio"
                        tabindex="-1"
                        name="faculty"
                        value="fest"
                        onChange={handleInputChange}

                      />

                      <label
                        htmlFor="option1"
                        className="block w-full rounded-lg border border-gray-200 p-3 hover:border-teal-600 peer-checked:border-teal-600 peer-checked:bg-teal-600 peer-checked:text-white"
                        tabindex="0"
                      >
                        <span className="text-sm font-medium"> FEST </span>
                      </label>
                    </div>

                    <div>
                      <input
                        className="peer sr-only"
                        id="option2"
                        type="radio"
                        tabindex="-1"
                        name="faculty"
                        value="business school"
                        onChange={handleInputChange}
                      />

                      <label
                        htmlFor="option2"
                        className="block w-full rounded-lg border border-gray-200 p-3 hover:border-teal-600 peer-checked:border-teal-600 peer-checked:bg-teal-600 peer-checked:text-white"
                        tabindex="0"
                      >
                        <span className="text-sm font-medium "> Business school </span>
                      </label>
                    </div>

                    <div>
                      <input
                        className="peer sr-only"
                        id="option3"
                        type="radio"
                        tabindex="-1"
                        name="faculty"
                        value="central"
                        onChange={handleInputChange}

                      />

                      <label
                        htmlFor="option3"
                        className="block w-full rounded-lg border border-gray-200 p-3 hover:border-teal-600 peer-checked:border-teal-600 peer-checked:bg-teal-600 peer-checked:text-white"
                        tabindex="0"
                      >
                        <span className="text-sm font-medium"> Central </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">Payment Slip</label>

                    <input type="file" name="payment_slip" onChange={handleFileChange} required />

                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-teal-600 px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Register
                    </button>
                  </div>
                </form>





                <div className='mt-4'>
                {errorMessage && <p className='rounded-lg border border-red-200 p-3 text-red-500'>{errorMessage}</p>}
                {errorPhoneMessage && <p className='rounded-lg border border-red-200 p-3 text-red-500'>{errorPhoneMessage}</p>}
                {successMessage && <p className='rounded-lg border border-teal-600 text-teal-600 p-3'>{successMessage}</p>}
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterCustom/>
      </div>
    );
  };
}

export default RequestForm;