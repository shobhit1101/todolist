import React from 'react';
import {connect} from 'react-redux';
const Output = (props)=>
{ console.log("props",props);
    return(
        <div>
            <hr/>
            <h1 className="text-center rounded-0">Existing Records</h1>
            <hr/>
            <div>
             <table className="table table-bordered table-sm">
                <thead className="thead-light">
                 <tr>
                   <th scope="col">S.No.</th>  
                   <th scope="col">TYPE</th> 
                   <th scope="col">DESCRIPTION</th>
                   <th scope="col">AMOUNT</th>
                   <th scope="col">OPERATIONS</th>
                 </tr>
                </thead>
                    <tbody>
                        {props.arr.map((ele,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{ele.expense}</td>
                                    <td>{ele.description}</td>
                                    <td>{ele.amount}</td>
                                    <td><span onClick={()=>{props.Delete(ele)}}><i className="fas fa-trash"></i></span>
                                    <span><i className="fas fa-edit" onClick={()=>{props.Edit(ele)}}></i></span></td>
                                </tr>
                            )
                        })}
                    </tbody>
             </table>
             <button className="btn btn-danger" onClick={()=>{props.Clear(props.arr)}}>Clear List</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log("recieving central store object in output",state.arr);
    return{
        arr:state.arr
        //arrayofobj:state
    };
}

const fn = connect(mapStateToProps);
export default fn(Output);