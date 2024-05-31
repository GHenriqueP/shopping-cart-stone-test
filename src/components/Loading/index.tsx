import React from "react";
import LoopIcon from "@mui/icons-material/Loop";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoopIcon className="text-green-700 animate-spin" sx={{ fontSize: 70 }} />
    </div>
  );
}

export default Loading;
