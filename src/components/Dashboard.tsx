import React from 'react';
import { 
  FileText, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Bell,
  User,
  Search,
  Menu,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Clock,
  Download
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-bold text-black">GST Portal</h1>
              </div>
              
              <nav className="hidden md:flex ml-10 space-x-8">
                <a href="#" className="text-black font-medium">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Returns</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Reports</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Payments</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Help</a>
              </nav>
            </div>

            {/* Search and User Menu */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              
              <button className="relative p-2 text-gray-600 hover:text-black transition-colors">
                <Bell className="w-5 h-5" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
              
              <button 
                onClick={onLogout}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-black transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline">Account</span>
              </button>
              
              <button className="md:hidden p-2 text-gray-600">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12 relative">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 border border-gray-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-8 right-16 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute top-16 right-24 w-2 h-2 bg-gray-400 rounded-full"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Navigating the digital landscape for success
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our comprehensive GST management platform helps businesses streamline their tax compliance and reporting processes with ease and efficiency.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* GST Returns */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">GST Returns</h3>
            <p className="text-gray-600 text-sm mb-4">File your monthly and quarterly GST returns with automated calculations and validations.</p>
            <button className="text-black font-medium text-sm hover:underline">
              File Return →
            </button>
          </div>

          {/* Tax Calculator */}
          <div className="bg-black p-6 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Tax Calculator</h3>
            <p className="text-gray-300 text-sm mb-4">Calculate GST amounts, input tax credits, and net tax liability instantly.</p>
            <button className="text-white font-medium text-sm hover:underline">
              Calculate →
            </button>
          </div>

          {/* Analytics */}
          <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Analytics</h3>
            <p className="text-gray-600 text-sm mb-4">Get detailed insights into your tax patterns and compliance status.</p>
            <button className="text-black font-medium text-sm hover:underline">
              View Reports →
            </button>
          </div>

          {/* Compliance */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 relative">
            <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Compliance</h3>
            <p className="text-gray-600 text-sm mb-4">Stay compliant with automated reminders and deadline tracking.</p>
            <button className="text-black font-medium text-sm hover:underline">
              Check Status →
            </button>
          </div>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-black mb-6">Recent Activity</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-black">GSTR-1 Filed Successfully</p>
                      <p className="text-sm text-gray-600">March 2024 return submitted</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-black">GSTR-3B Due Soon</p>
                      <p className="text-sm text-gray-600">Due date: April 20, 2024</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Download className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Certificate Downloaded</p>
                      <p className="text-sm text-gray-600">GST registration certificate</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">3 days ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-black mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black">File GSTR-1</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
                
                <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black">Pay Tax</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
                
                <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black">Generate Invoice</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
                
                <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black">View Reports</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-black rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-8 w-2 h-2 bg-white rounded-full"></div>
              
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-4">Our support team is available 24/7 to assist you with any queries.</p>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-8 w-2 h-2 bg-gray-300 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-16 w-4 h-4 bg-gray-400 rotate-45 opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-black rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-px h-24 bg-gray-300 rotate-45 opacity-40"></div>
      </div>
    </div>
  );
}