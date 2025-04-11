"use client";

const GlobalError = () => {
  return (
    <html lang="en">
      <body>
        <h2>Something went wrong !!</h2>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </body>
    </html>
  );
};

export default GlobalError;