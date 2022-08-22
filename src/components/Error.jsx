import { useState, useEffect } from "react";
function Error({ mensaje }) {
  return (
    <div className="bg-red-800 text-white text-center font-bold p-3 mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
}
export default Error;
