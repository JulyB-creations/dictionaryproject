import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
  return (
    <div clasName="Synonyms">
      <strong>Synonyms:<br/></strong>
    <ul className="Synonym-list">
      {props.synonyms.map(function(synonyms, index){
        return (
          <li key={index}>
            {synonyms}
          </li>
        );
      })}
    </ul> 
    </div>   
  )} else {
    return null   
  }
}