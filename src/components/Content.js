import React from 'react';

function Content() {
  return (
    <main className="w-full bg-blue-50 ml-4">
      <div className="w-full px-4 py-6">
        <div className="flex flex-col md:flex-row items-center py-2 px-4 rounded mb-0 mt-3">
          <span className="text-white bg-blue-700 font-semibold px-3 rounded-full ml-3">#1</span>
          <span className="ml-3 text-gray-400 font-semibold">School Billing ERP</span>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold text-black ml-0 md:ml-7 mt-0">
              Streamline your<br /> school's <span className="text-blue-600">financial<br /> management</span>
            </h1>
            <p className="mt-4 md:mt-8 ml-0 md:ml-6 text-gray-700">
              Efficient billing, seamless payments, and<br /> comprehensive reporting for modern educational<br /> institutions.
            </p>
            <div className="mt-4 md:mt-7 flex items-center ml-0 md:ml-6">
              <div className="flex w-full md:w-2/3 relative">
                <input
                  type="email"
                  placeholder="Enter your email to get started"
                  className="p-4 pr-40 rounded-full border w-full"
                />
                <button 
                  aria-label="Request a demo" 
                  className="bg-blue-700 text-white p-2 pl-5 pr-5 border-none rounded-full absolute right-2 top-1/2 transform -translate-y-1/2">
                  Request Demo
                </button>
              </div>
            </div>
            <p className="mt-4 md:mt-6 text-gray-600 ml-0 md:ml-8">Trusted by 0000+ schools</p>
          </div>
          
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end overflow-hidden relative">
            <div className="relative w-full h-full">
              <img
                src="https://www.spinxdigital.com/app/uploads/2022/09/7-Smart-Ways-to-Get-More-Leads-for-Your-Web.jpg"
                alt="School Billing Dashboard"
                className="rounded-lg shadow-lg transform scale-100 md:scale-105 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
