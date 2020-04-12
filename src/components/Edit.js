import React from 'react';
//import { connect } from 'react-redux';
export const Edit = (props)=>
{   console.log("Item to be edited.......",props.item);
  if(props.item!==undefined){  
  return(
        <div>
         <hr/>
          <h1 className="text-danger text-center">Edit Expenses</h1>
            <hr/>
               <h1>Type</h1>
               <input onChange={props.editValue} id='expense' type='text' defaultValue={props.item.expense}/>
               <h1>Description</h1>
               <input onChange={props.editValue} id='description' type='text' defaultValue={props.item.description}/>
               <h1>Amount</h1>
               <input onChange={props.editValue} id='amount' type='text' defaultValue={props.item.amount}/>
             <hr/>
        <button onClick={()=>{props.Update()}} className="form-control rounded-0 btn-secondary fas fa-folder-plus">UPDATE</button>
        </div>
    )
  }
  else{
    return(
      <div>
        
      </div>
    )
  }
} 
// const mapStateToProps=(state)=>{
//   console.log("Central state object",state.obj);
//   return{
//     obj:state.obj
//   }
// }
// const fn=connect(mapStateToProps);
// export default fn(Edit);