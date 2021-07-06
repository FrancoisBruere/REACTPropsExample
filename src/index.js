import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="bla" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="John"
      img="data:image/jpeg;base64,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"
      tel="+123 450 999"
      email="JC@9999.com"
    />
  </div>,
  document.getElementById("root")
);
