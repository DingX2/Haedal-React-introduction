import React from "react";
import "./css/OneButton.css";

const OneButton = (props) => (
  <>
    <a href={`${props.url}`}>
        <div 
        id={props.id} 
        className="OneButton" 
        style={{ 
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover"
        }}>
            <div className="contentText">
                <p> {props.content} </p>
            </div>

            <div className="viewMore">
                <p>view more</p>
            </div>
        </div>
    </a>
  </>
);

export default OneButton;
