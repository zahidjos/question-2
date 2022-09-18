import React from 'react';
import './AddNumber.css'

const AddNumber = (props) => {
    const{setNumber}=props;
        return (
        <div className='add_number'>
           <button onClick={()=>setNumber(number=>number+5)}>ADD 5</button>
        </div>
    );
};

export default AddNumber;