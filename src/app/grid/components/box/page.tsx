import React from "react";

interface MyComponentProps {
  id: number;
}

export default function Box(props: MyComponentProps) {
  return (
    <div
      className="border-4 border-[#3d2e0f] relative"
      style={{
        boxShadow: "0 0 10px rgba(255, 255, 163, 0.4)", // Adjust the values as needed
      }}
    >
      <div
        key={props.id}
        className="bg-[#fffba3] border-4 border-[#ab852d] hover:bg-slate-400 h-64 flex"
      >
        <p className="p-1 text-xs sm:text-sm">{props.id}</p>
      </div>
    </div>
  );
}
