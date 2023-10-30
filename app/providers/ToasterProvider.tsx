"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              backgroundColor: "#4caf50",
              color: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default ToasterProvider;
