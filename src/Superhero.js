import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Superhero.css';


export default function Superhero(props) {
    const member = props.member
    return (    
        <div className="member">
            <p>{member.mName}, {member.mEmail}, {member.mRole}</p>
        </div>
    )
}