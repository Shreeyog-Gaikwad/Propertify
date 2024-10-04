import React from "react";

const Header = () => {
  return (
    <div className="flex gap-72 justify-center align-middle  text-white py-7">
        <div className="flex gap-2">
            <img className="size-9" src="./public/logo.png" alt="logo" />
            <h1 className="text-4xl">Propertify</h1>
        </div>
      <div className="flex gap-11 items-center">
        <a href="">Residencies</a>
        <a href="">Our Value</a>
        <a href="">Contact Us</a>
        <a href="">Get Started</a>
        <button className="bg-blue-500 py-2 px-4 rounded-xl transition transform hover:bg-blue-600">
          <a href="">Contact</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
