import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';


const Dashboard = () => {
  const [registrationRequests, setRegistrationRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rejectionReasons, setRejectionReasons] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentRequestId, setCurrentRequestId] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      //navigate('/login'); // Redirect to login page if token is missing
      console.log("error")
    } else {
      fetchRegistrationRequests(token);
    }
  }, [navigate]);

  const fetchRegistrationRequests = async (token) => {
    try {
      console.log(token)
      const response = await fetch('http://127.0.0.1:3000/registration-request', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRegistrationRequests(data);
      } else {
        navigate('/login'); // Redirect to login page if token is incorrect
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const acceptRequest = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://127.0.0.1:3000/registration-request/${id}/accept`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },

      });
      // Update the registration request locally
      setRegistrationRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id ? { ...request, accepted: true } : request
        )
      );
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };




  const handleRejectionReasonChange = (id, value) => {
    setRejectionReasons((prevReasons) => ({
      ...prevReasons,
      [id]: value,
    }));
  };

  // Function to reject request
  const rejectRequest = (id) => {
    setCurrentRequestId(id);
    setShowModal(true);
  };

  // Function to handle modal submission
  const handleModalSubmit = async (id) => {
    const reason = rejectionReasons[currentRequestId];
    if (!reason) {
      // Rejection reason is required
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await fetch(`http://127.0.0.1:3000/registration-request/${id}/reject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rejected_reason: reason }),
      });
      // Update the registration request locally
      setRegistrationRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id
            ? { ...request, accepted: false, rejected_reason: reason }
            : request
        )
      );
      // Clear the rejection reason for the current request
      setRejectionReasons((prevReasons) => {
        const updatedReasons = { ...prevReasons };
        delete updatedReasons[id];
        return updatedReasons;
      });
    } catch (error) {
      console.error(error);
      // Handle error
    }
    setShowModal(false);
  };



  const handleViewImage = (image) => {
    console.log(image)
    setModalImage(image);
    setShowImageModal(true);
  };

  const handleImageCloseModal = () => {
    setModalImage(null);
    setShowImageModal(false);

  };


  const handleDownload = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://127.0.0.1:3000/export',{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'registration_requests.csv';
      link.click();
  
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };


  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8'>

        {registrationRequests.length === 0 ? (
          <p>No registration requests found.</p>
        ) : (
          <div className=''>
            <div className='mb-4 '>
            <a
              onClick={handleDownload}
              class="inline-block  rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
              href="localhost:3000/export"
            >
              Export
            </a>
            </div>

            <div className='border border-gray-200'>

              <div className=" overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Date of Birth
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Email
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Phone number
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Faculty
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Accepted
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Slip
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Action
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Rejection Reason
                      </th>

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {registrationRequests.map((request) => (
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {request.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{formatDate(request.dob)}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{request.email}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{request.phone_number}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{request.faculty}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{request.accepted ? 'Yes' : 'No'} </td>




                        <td className="whitespace-nowrap px-4 py-2">
                          <a
                            onClick={() => handleViewImage(request.payment_slip)}
                            className="inline-block rounded bg-teal-600 px-4 py-2 text-xs font-medium text-white hover:bg-teal-700"
                          >
                            View

                          </a>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                          {!request.accepted && !request.rejected_reason && (
                            <div className='flex flex-col'>
                              {/* Accept button */}



                              <a
                                onClick={() => acceptRequest(request.id)} className="inline-block rounded border border-green-600 px-8 py-3 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring active:bg-green-500"

                              >
                                Accept
                              </a>




                              <a
                                onClick={() => rejectRequest(request.id)} className="inline-block rounded border border-red-600 px-8 py-3 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"

                              >
                                Reject
                              </a>


                            </div>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{request.rejected_reason} </td>
                      </tr>
                    ))}


                  </tbody>
                </table>

              </div>
            </div>
          </div>
        )}
        {showModal && (
          <div className="fixed inset-0 border border-gray-200 flex items-center justify-center z-50">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-lg font-medium mb-4">Rejection Reason</h2>
              <input
                type="text"
                value={rejectionReasons[currentRequestId] || ''}
                onChange={(e) =>
                  handleRejectionReasonChange(
                    currentRequestId,
                    e.target.value
                  )
                }
                placeholder="Enter rejection reason"
                className="border border-gray-300 px-3 py-2 mb-4"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => handleModalSubmit(currentRequestId)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}




        {showImageModal && (
          <div className="fixed inset-0 border border-gray-200 flex items-center justify-center z-50 max-w-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <span className="close" onClick={handleImageCloseModal}>
                &times;
              </span>
              <img src={`http://127.0.0.1:3000/images/${modalImage}`} className="object-scale-down h-96" alt="Payment Slip" />
            </div>
          </div>
        )}



      </div>
    </div>
  );
};



export default Dashboard;








