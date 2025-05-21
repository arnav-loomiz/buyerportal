import React from "react";

export default function Home() {
  return (
    <div className="ml-[200px]  p-10 min-h-screen  flex items-start font-[NSregular]">
      {/* Left Side */}
      <div className="flex flex-col space-y-6 ">
        {/* Welcome Text */}
        <div>
          <h1 className="text-4xl font-semibold text-[#194185] font-[Smedium]">Welcome !</h1>
          <p className="text-sm text-gray-500 mt-1">
            View progress on your current order
          </p>
        </div>

        {/* Upcoming Box */}
        <div className="bg-gray-200 rounded-xl p-4 w-fit">
          <p className="text-gray-700 font-medium text-lg">Upcoming,</p>
          <div className="flex items-end mt-1">
            <span className="text-[42px] font-bold text-[#1b2a41] leading-none">24</span>
            <span className="ml-1 text-sm text-gray-700 mb-1">hours</span>
          </div>
          <p className="text-sm text-gray-600 mt-1 leading-snug">
            remaining before shipment of <br />
            order <strong>100057</strong>
          </p>
        </div>

        {/* Schedule */}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-700 mb-2">Schedule</h3>
          <ul className="space-y-4 text-sm text-gray-800">
            <li>
              <span className="font-bold text-lg mr-2">20</span>
              Production · <strong>Order 100057</strong>
              <div className="ml-6 text-xs text-gray-500">Quantity : 500 Pieces</div>
            </li>
            <li>
              <span className="font-bold text-lg mr-2">25</span>
              Shipment · <strong>Order 9057</strong>
              <div className="ml-6 text-xs text-gray-500">Quantity : 250 Pieces</div>
            </li>
            <li>
              <span className="font-bold text-lg mr-2">31</span>
              Shipment · <strong>Order 100057</strong>
              <div className="ml-6 text-xs text-gray-500">Quantity : 500 Pieces</div>
            </li>
            <li>
              <span className="font-bold text-lg mr-2">05</span>
              Payment · <strong>Order 100057</strong>
              <div className="ml-6 text-xs text-gray-500">Quantity : 500 Pieces</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="ml-30 mt-20   rounded-xl p-6 text-center">
        <p className="text-sm text-gray-400 mb-2">Track Order No.</p>
        <h2 className="text-[38px] font-semibold text-gray-800">100057</h2>
        <p className="text-sm text-gray-600 mt-2">
          red velvet, round neck T-Shirts
        </p>
        <p className="text-sm text-gray-400 mt-1">Quantity : 500 Pieces</p>
      </div>
    </div>
  );
}