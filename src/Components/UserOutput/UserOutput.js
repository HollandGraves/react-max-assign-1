import React from 'react'
import UserOutputStyles from './UserOutput.css'


const userOutput = (props) => {
    return(
        <div className="userOutput">
            <br />
            <br />
            <p>
                {props.username}
                <br />
                <br />
                One paragragh 
            </p>
            <p>
                Two paragragh
            </p>
        </div>
    );
};

export default userOutput;