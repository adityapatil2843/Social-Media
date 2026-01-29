import React from "react";
import { assets } from "../assets/assets.js";
import { Star } from "lucide-react";
import { SignIn } from "@clerk/clerk-react";

const LLogin = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row">
      {/* Background Image */}
      <img
        src={assets.bgImage}
        alt="Background"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
      />

      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40">
        <img
          src={assets.logo}
          alt="App logo"
          className="h-12 object-contain"
        />

        <div className="flex items-center gap-3 mb-6 max-md:mt-10">
          <img
            src={assets.group_users}
            alt="User group"
            className="h-8 md:h-10"
          />

          <div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-500 fill-amber-500"
                />
              ))}
            </div>
            <p className="text-sm text-gray-700">
              Used by <span className="font-semibold">12k+</span> developers
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent leading-tight">
            More than just friends,
            <br />
            truly connect
          </h1>

          <p className="mt-3 text-lg md:text-3xl text-indigo-900 max-w-md">
            Connect with a global community
          </p>
        </div>
      </div>

      {/* Right Section – Login */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <SignIn />
      </div>
    </div>
  );
};

export default LLogin;
