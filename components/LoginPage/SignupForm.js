import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    contactInformation: "",
    bloodType: "",
    profilePicture: "profile.png"
  });
  
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        profilePicture: file.name
      });
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const EyeIcon = ({ show }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {show ? (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </>
      ) : (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );

  // Upload icon component
  const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  );

  return (
    <div className="selection:bg-indigo-500 selection:text-white min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            Create account
          </h1>

          <form className="space-y-6" action="" method="POST">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center gap-2">
  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 relative">
    {previewImage ? (
      <img src={previewImage} alt="Profile preview" className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-sm">No image</span>
      </div>
    )}
  </div>
  <label className="cursor-pointer flex items-center justify-center px-4 py-2 bg-red-800 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-200">
    <UploadIcon />
    <span className="ml-2">Upload Image</span>
    <input
      type="file"
      accept="image/*"
      onChange={handleProfilePictureChange}
      className="hidden"
    />
  </label>
</div>

            <div className="space-y-6">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                  placeholder="john@doe.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>

              <div className="relative">
  <input
    id="password"
    type={showPassword ? "text" : "password"}
    name="password"
    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 pr-10"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
  />
  <label
    htmlFor="password"
    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
  >
    Password
  </label>
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
    aria-label={showPassword ? "Hide password" : "Show password"}
  >
    <EyeIcon show={showPassword} />
  </button>
</div>

              <div className="relative">
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                  placeholder="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
                <label
                  htmlFor="dateOfBirth"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Date of Birth
                </label>
              </div>

              <div className="relative">
                <input
                  id="contactInformation"
                  name="contactInformation"
                  type="tel"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                  placeholder="Contact Information"
                  value={formData.contactInformation}
                  onChange={handleChange}
                />
                <label
                  htmlFor="contactInformation"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Contact Information
                </label>
              </div>

              <div className="relative">
                <label
                  htmlFor="bloodType"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm"
                >
                  Blood Type
                </label>
                <select
                  id="bloodType"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 bg-transparent appearance-none"
                >
                  <option value="">SELECT</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>

            <input
              type="submit"
              value="Sign up"
              className="mt-10 px-8 py-4 uppercase rounded-full bg-red-800 hover:bg-red-700 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-600 focus:ring-opacity-80 cursor-pointer
"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;