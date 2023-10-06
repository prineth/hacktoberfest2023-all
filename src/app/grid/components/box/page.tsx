import React from "react";

interface MyComponentProps {
  id: number;
}

export default function Box(props: MyComponentProps) {
  return (
    <div
      className="rounded-lg border-4 border-[#3d2e0f] relative"
      style={
        {
          // Adjust the values as needed
        }
      }
    >
      <div
        key={props.id}
        className="rounded-md bg-[#0f0913] hover:bg-[#55386843] border-4 border-[#ab852d] h-64 flex"
      >
        <div className="flex flex-col align-middle justify-center items-center">
          {/* Github profile pic */}
          <img
            className="inline-block h-20 w-20 rounded-full ring-0 ring-white"
            src="https://avatars.githubusercontent.com/u/70090385?v=4"
            alt=""
          ></img>
          {/* Name */}
          <p className="text-white">Prineth Fernando</p>
          {/* Github link*/}
        </div>
      </div>
    </div>
  );
}
