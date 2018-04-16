import React from "react";

const FriendCard = props => (
    <div className="card">
      <div className="img-container" onClick={() => props.addCounter(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
        </ul>
      </div>
    </div>
  );
  
  export default FriendCard;