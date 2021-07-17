/* import React from "react";

function create() {
  return (
    <div>
      <p>You're lost</p>
    </div>
  );
}

export default create; */
import React from "react";

export default function NotFound() {
  if (typeof window !== "undefined") {
    window.location = "/";
  }

  return null;
}
