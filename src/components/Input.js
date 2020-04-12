import React from 'react';
export const Input = (props)=>
{
    return(
        <div>
         <hr/>
          <h1 className="text-danger text-center">Expenses</h1>
            <hr/>
               <h1>Type</h1>
               <input onChange={props.takeinput} id='expense' type='text' placeholder='Enter Type Here'/>
               <h1>Description</h1>
               <input onChange={props.takeinput} id='description' type='text' placeholder='Enter Description Here'/>
               <h1>Amount</h1>
               <input onChange={props.takeinput} id='amount' type='text' placeholder='Enter Amount Here'/>
             <hr/>
        <button onClick={props.Add} className="form-control rounded-0 btn-secondary fas fa-folder-plus">ADD</button>
        </div>
    )
} 