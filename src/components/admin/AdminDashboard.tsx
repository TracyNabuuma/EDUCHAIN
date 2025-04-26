import React from 'react';
import { 
  Award, 
  Users, 
  BookOpen, 
  Clock, 
  ArrowUp, 
  ArrowDown,
  BarChart3,
  Activity
} from 'lucide-react';

// Mock data - in a real app, this would come from an API
const stats = [
  { 
    name: "Total Certificates", 
    value: "1,284", 
    change: "+12%", 
    isIncrease: true,
    icon: <Award className="h-6 w-6 text-blue-600" />
  },
  { 
    name: "Active Students", 
    value: "3,842", 
    change: "+8%", 
    isIncrease: true,
    icon: <Users className="h-6 w-6 text-emerald-600" />
  },
  { 
    name: "Verification Requests", 
    value: "482", 
    change: "+24%", 
    isIncrease: true,
    icon: <BookOpen className="h-6 w-6 text-amber-600" />
  },
  { 
    name: "Avg. Verification Time", 
    value: "1.2s", 
    change: "-0.3s", 
    isIncrease: false,
    icon: <Clock className="h-6 w-6 text-indigo-600" />
  }
];

// Mock recent certificate data
const recentCertificates = [
  { id: "0x8f7e...2c91", student: "Sarah Johnson", type: "Bachelor's Degree", date: "2 hours ago", status: "Issued" },
  { id: "0x3a1c...9d45", student: "Michael Chen", type: "Master's Degree", date: "6 hours ago", status: "Pending" },
  { id: "0x6b2d...7f32", student: "Emily Rodriguez", type: "Certificate Course", date: "1 day ago", status: "Issued" },
  { id: "0x4e9a...1b87", student: "David Kim", type: "Diploma", date: "2 days ago", status: "Issued" },
];

const AdminDashboard = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Admin Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-md bg-gray-50">
                  {stat.icon}
                </div>
                <div className={`flex items-center text-sm ${stat.isIncrease ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                  {stat.isIncrease ? 
                    <ArrowUp className="h-4 w-4 ml-1" /> : 
                    <ArrowDown className="h-4 w-4 ml-1" />
                  }
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.name}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Activity Chart */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 xl:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Certificate Activity</h2>
              <div className="flex space-x-2">
                <select className="text-sm border border-gray-300 rounded-md p-1">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last year</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-center h-64">
              {/* This would be a real chart in a production app */}
              <div className="text-center text-gray-500 flex flex-col items-center">
                <BarChart3 className="h-16 w-16 text-gray-300 mb-4" />
                <p>Certificate issuance chart would appear here</p>
                <p className="text-sm mt-2">Using actual issuance data</p>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
                Issue New Certificate
              </button>
              <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">
                Add New Student
              </button>
              <button className="w-full bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition">
                View Verification Requests
              </button>
              <button className="w-full bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition">
                Generate Reports
              </button>
            </div>
          </div>
        </div>
        
        {/* Recent Certificates */}
        <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Certificates</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate ID</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentCertificates.map((cert, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">{cert.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cert.student}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{cert.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{cert.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full 
                        ${cert.status === 'Issued' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                        {cert.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-right">
            <a href="#" className="text-blue-600 hover:text-blue-900 text-sm font-medium">View All Certificates →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;