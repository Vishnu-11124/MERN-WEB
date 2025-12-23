import React from 'react'
import { useForm } from 'react-hook-form'


const App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleFormData = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
          React Form
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
              <input 
                {...register("firstName", {required: "First Name is required", minLength:{value: 3, message: "First Name must be at least 3 characters long"}})} 
                className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
                  errors.firstName 
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200'
                }`}
              />
              {errors.firstName && <p className="text-red-600 text-sm mt-1 font-medium">{errors.firstName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Middle Name</label>
              <input 
                {...register("middleName", {required: "Middle Name is required"})} 
                className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
                  errors.middleName 
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200'
                }`}
              />
              {errors.middleName && <p className="text-red-600 text-sm mt-1 font-medium">{errors.middleName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
              <input 
                {...register("lastName", {required: "Last Name is required"})} 
                className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
                  errors.lastName 
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200'
                }`}
              />
              {errors.lastName && <p className="text-red-600 text-sm mt-1 font-medium">{errors.lastName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input 
                {...register("email", {required: "Email is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address"}})} 
                className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200'
                }`}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1 font-medium">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
              <input 
                {...register("phone", {required: "Phone is required", pattern: {value: /^\d{10}$/, message: "Invalid phone number"}})} 
                className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
                  errors.phone 
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200'
                }`}
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1 font-medium">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input 
                type="password"
                {...register("password", {required: "Password is required", minLength:{value: 8, message: "Password must be at least 8 characters long"}})} 
                className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
                  errors.password 
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200'
                }`}
              />
              {errors.password && <p className="text-red-600 text-sm mt-1 font-medium">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Confirm Password</label>
              <input 
                type="password"
                {...register("confirmPassword", {required: "Confirm Password is required", validate: value => value === watch("password") || "Passwords do not match"}) }
                className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
                  errors.confirmPassword 
                    ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200'
                }`}
              />
              {errors.confirmPassword && <p className="text-red-600 text-sm mt-1 font-medium">{errors.confirmPassword.message}</p>}
            </div>

            <div className="pt-4">
              <button 
                type='submit'
                onClick={handleSubmit(handleFormData)}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App