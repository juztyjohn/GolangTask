import { number } from 'prop-types';
import React from 'react'

export const Pagenum = ({postsPerPage, totalPosts , paginate}) => {
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul>
            {pageNumbers.map(number =>(
                <li key={number} >
                    <a onClick={()=> paginate(number)}  >
                        {number}
                        </a> 
                </li>
            ))}
        </ul>
    </nav>
  )
}
