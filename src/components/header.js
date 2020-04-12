import React from 'react';
import {NavLink} from 'react-router-dom';
export const Header = (props)=>{
    return (
        <div>
            <NavLink exact activeClassName="active" activeStyle={{color:'green'}} to="/">Add New Expenses</NavLink>
            &nbsp;&nbsp;
            <NavLink  activeClassName="active" activeStyle={{color:'green'}} to="/output">Display The Expenses</NavLink>
            &nbsp;&nbsp;
            <NavLink  activeClassName="active" activeStyle={{color:'green'}} to="/edit">Edit The Expenses</NavLink>
            &nbsp;&nbsp;
        </div>
    )
}