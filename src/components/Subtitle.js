import React from "react";

export default function Subtitle(props) {
  return (
    <div className="subtitle" {...props}>
      <h2>{props.children}</h2>
    </div>
  );
}
