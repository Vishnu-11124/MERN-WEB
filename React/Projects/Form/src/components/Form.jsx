import React, { useState } from 'react'
import { User, Mail, Lock } from 'lucide-react'

const Form = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const[errorUsername, setErrorUsername] = useState('')
    const[errorEmail, setErrorEmail] = useState('')
    const[errorPassword, setErrorPassword] = useState('')
    const[errorConfirmPassword, setErrorConfirmPassword] = useState('')

   
    const validate = (e) =>{
        e.preventDefault();

        (username.length > 7) ? setErrorUsername('') : setErrorUsername('Username must be more than 7 characters');

        (email.includes('@gmail')) ? setErrorEmail('') : setErrorEmail('Invalid email syntax');

        (password.length > 7) ? setErrorPassword('') : setErrorPassword('Password must be more than 7 characters');

        (password!== '' && password === confirmPassword) ? setErrorConfirmPassword('') : setErrorConfirmPassword('Password does not match');
    }

    
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600  to-green-400 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="md:w-1/2 bg-gradient-to-br from-purple-600 to-pink-500 p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
            {/* Animated background circles */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            
            {/* Main content */}
            <div className="relative z-10 text-center">
              {/* Animated user avatars stack */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <User className="w-8 h-8 text-purple-600" />
                </div>
                <div className="absolute top-16 left-8 w-14 h-14 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-lg" style={{animation: 'bounce 2s infinite', animationDelay: '0.2s'}}>
                  <User className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-16 right-8 w-14 h-14 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center shadow-lg" style={{animation: 'bounce 2s infinite', animationDelay: '0.4s'}}>
                  <User className="w-7 h-7 text-white" />
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full flex items-center justify-center shadow-lg" style={{animation: 'bounce 2s infinite', animationDelay: '0.6s'}}>
                  <User className="w-6 h-6 text-white" />
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" style={{animation: 'pulse 3s infinite'}}>
                  <line x1="50%" y1="16" x2="35%" y2="70" stroke="white" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
                  <line x1="50%" y1="16" x2="65%" y2="70" stroke="white" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
                  <line x1="35%" y1="70" x2="50%" y2="140" stroke="white" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
                  <line x1="65%" y1="70" x2="50%" y2="140" stroke="white" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
                </svg>
              </div>
              
              <h2 className="text-4xl font-bold mb-4">Join 10,000+ Users!</h2>
              <p className="text-lg opacity-90 mb-8">Create your account and become part of our growing community.</p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white text-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm opacity-80">Active Users</div>
                </div>
                <div className="bg-white text-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm opacity-80">Accounts Created</div>
                </div>
                <div className="bg-white text-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-sm opacity-80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form section */}
          <div className="md:w-1/2 p-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-500 mb-8">Fill in the details to get started</p>
            
            <div className="space-y-5">
              {/* Username Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                {errorUsername && <p className="mt-2 text-sm text-red-500 flex items-center gap-1">⚠ {errorUsername}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="email" 
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                {errorEmail && <p className="mt-2 text-sm text-red-500 flex items-center gap-1">⚠ {errorEmail}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="password" 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                {errorPassword && <p className="mt-2 text-sm text-red-500 flex items-center gap-1">⚠ {errorPassword}</p>}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="password" 
                    placeholder='Confirm your password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                {errorConfirmPassword && <p className="mt-2 text-sm text-red-500 flex items-center gap-1">⚠ {errorConfirmPassword}</p>}
              </div>

              {/* Submit Button */}
              <button 
                onClick={validate}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account? <span className="text-purple-600 font-medium cursor-pointer hover:underline">Login</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form