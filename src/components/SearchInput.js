import React from 'react';
const SearchInput = ({handleInput}) =>{
  return(
    <>
        <input placeholder="Type name" 
          onChange={(e)=>handleInput(e.target.value)}
        />
    </>
  )
}

export default SearchInput;