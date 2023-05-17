import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Navbar  from '../components/nav.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });


      console.log(response.status)

      if (response.status === 201) {
        const { access_token } = await response.json();
        console.log(access_token)
        localStorage.setItem('token', access_token);
        console.log('Login successful');
        // Redirect to the registration requests page or perform any other necessary action
        navigate("/dash")
        
      }
      else if (response.status == 401){
        console.error('Incorrect username or password');
        setErrorMessage("Incorrect username or password")


      }
      
      else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login');
    }
  };

  return (
    
    <div>
      <div>
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Pattern"
        src="https://prod.assets.earlygamecdn.com/images/csgo-2.jpg?transform=article3x_webp"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>

        </a>
        {errorMessage && <p className='rounded-lg text-red-500'>{errorMessage}</p>}

        <h1
          className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
         Welcome to our login 🔥
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          Yes, this is the login page 
        </p>



        <form  className="mt-8 grid grid-cols-6 gap-6">




          <div className="col-span-6 ">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} required
            className="w-full border border-gray-200  rounded-lg border-gray-200 p-3 text-sm"
            />
          </div>

          <div className="col-span-6 ">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
            type="password" 
            name="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            className="w-full border border-gray-200  rounded-lg border-gray-200 p-3 text-sm"
            />
          </div>




        </form>
        <div className="col-span-6 mt-6 sm:flex sm:items-center sm:gap-4">
            <button
              onClick={handleLogin}
              className="inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-600"
            >
              Login
            </button>
          </div>
      </div>
    </main>
  </div>
</section>
    </div>

    </div>
  
  
  );
};

export default Login;
