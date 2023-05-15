import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function ListLink({ links, onDeleteLink }) {
    const navigate = useNavigate();

    const filteredLinks = links.filter((link) => {
        return link.url.toLowerCase().includes(query.toLowerCase());
    });

    const handleLinkClick = (event, url) => {
        event.preventDefault();
        navigate(url);
    };

    return(
        <div>
            <ul>
                {filteredLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} onClick={(event) => 
                        handleLinkClick(event, link.url)} >{link.url}</a>
                        <button onClick={() => onDeleteLink(index)}>Delete</button>
                  </li>  
                ))}
            </ul>
        </div>
    )
};

export default ListLink;