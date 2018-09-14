import React from 'react'



const userInput = (props) => {
    return(
        <div>
        
            <input 
                type="text" 
                onChange={props.update} 
                placeholder='type and update Matt!'
                style={props.style}
            />
        </div>
    );
};

export default userInput;