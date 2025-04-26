import React, { useState,useEffect } from 'react';
import { Menu, X, Upload as Diploma, BookOpen, User, Shield } from 'lucide-react';
import Link  from '../ui/Link.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{

  },[])

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Diploma className="h-8 w-8 text-blue-800" />
                <span className="ml-2 text-xl font-bold text-blue-900">EduChain</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/admin" className="border-transparent text-gray-700 hover:text-blue-800 hover:border-blue-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Admin Dashboard
              </Link>
              <Link to="/students" className="border-transparent text-gray-700 hover:text-blue-800 hover:border-blue-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Students
              </Link>
              <Link to="/certificates" className="border-transparent text-gray-700 hover:text-blue-800 hover:border-blue-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Certificates
              </Link>
              <Link to="/verify" className="border-transparent text-gray-700 hover:text-blue-800 hover:border-blue-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Verify
              </Link>
            </div>
          </div>

          <div id='Connect_Contain' className="hidden gap-4 sm:ml-6 sm:flex sm:items-center">
      
          <button id="Connect" className="bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
          onClick={

              async()=>{
              
              if(window.ethereum){
                const ActiveAccount = await window.ethereum.request({method: 'eth_requestAccounts'});
                const Shorten = `${ActiveAccount[0].slice(0,6)}...${ActiveAccount[0].slice(-4)}`
                Connect.innerHTML = Shorten
               
                const Button_Classes = 'bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800'
                const Button_ClassesArray =  Button_Classes.split(" ")
                console.log(...Button_ClassesArray)

                Connect.disabled = true;

                Button.classList.add(...Button_ClassesArray)
                Button.innerHTML = "Disconnect";
                Contain.appendChild(Button) 

              }
              else {
                console.log("There is no EVM Wallet")
              }



          }}
          >
            Connect Wallet
          </button>
            

          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/admin" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-800 hover:text-blue-800">
              Admin Dashboard
            </Link>
            <Link to="/students" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-800 hover:text-blue-800">
              Students
            </Link>
            <Link to="/certificates" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-800 hover:text-blue-800">
              Certificates
            </Link>
            <Link to="/verify" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-800 hover:text-blue-800">
              Verify
            </Link>
            <div className="mt-4 pl-3 pr-4">
              <button className="w-full bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;