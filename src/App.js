import React from 'react';
import './App.css';
import {Input} from './components/Input';
import Output from './components/Output';
import {Edit} from './components/Edit';
import {Header} from './components/header';
import {Switch,Route} from 'react-router-dom';
import {store} from './models/store';
import {addActionCreator} from './models/actioncreators/addActionCreator';
import { deleteActionCreator } from './models/actioncreators/deleteActionCreator';
import uuid from 'uuid';
import { clearActionCreator } from './models/actioncreators/clearActionCreator';
import { editActionCreator } from './models/actioncreators/editActionCreator';
import { updateActionCreator } from './models/actioncreators/updateActionCreator';

export class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.obj = {id:uuid()};
    this.state = {obj:this.obj,editedItem:this.editedItem};
    this.editedItem={};
    //firebase.initializeApp(firebaseConfig);
    //firebase.database().ref('/dummy').set('dummy4');
  }
  editInput(event)
  {
    var key1 = event.target.id;
    var val1 = event.target.value;
    this.editItem[key1]=val1;
  }
  takeNumber(event){
    var val = event.target.value;
    var key = event.target.id;
    this.obj[key] = val;
  }
  Add()
  {
    console.log("Hello");
    var action = addActionCreator(this.obj.id,this.obj.expense,this.obj.description,this.obj.amount,'+');
    store.dispatch(action);
  }
  Delete(obj)
  {
    console.log("Obj deleted............");
    var action = deleteActionCreator(obj,'delete');
    store.dispatch(action);
  }
  Edit(obj)
  {
    console.log("Id is............",obj);
    var action = editActionCreator(obj,'edit');
    store.dispatch(action);
    this.editItem=obj;
    console.log("Edited item is $$$$$$$$$",this.editItem);
    this.setState({editItem:this.editItem});
  }
  Update()
  {
    console.log("Updated Id is............",this.editItem);
    var action = updateActionCreator(this.editItem,'update');
    store.dispatch(action);
    this.editItem={};
  }
  Clear(array)
  {
    console.log("Array is............",array);
    var action = clearActionCreator(array,'clear');
    store.dispatch(action);
  }
  render()
  {
    return(
      <div className="app-container">
        <div className="card bg-info text-center text-light rounded-0">
        <h1 className="display-4">
        <i className="fas fa-clipboard-list mr-3"></i><span className="text-dark mr-3">MERN</span>To-Do List
        </h1>
        </div>
        <Header/>
        <hr/>
        <Switch>
         <Route exact path='/' render={()=><Input Add={this.Add.bind(this)} takeinput = {this.takeNumber.bind(this)}/>}/>
         <Route exact path='/output' render={()=><Output Delete={this.Delete.bind(this)} Clear={this.Clear.bind(this)} Edit={this.Edit.bind(this)}/>}/>
         <Route exact path='/edit' render={()=><Edit editValue={this.editInput.bind(this)} item={this.editItem} Update={this.Update.bind(this)}/>}/>
        </Switch>
      </div>
    )
  }
}







//import {Switch,Route} from 'react-router-dom';
//import {Header} from './components/header';

//import firebaseConfig from './config';
//import * as firebase from 'firebase';





//inside render
        /* <Header/>
        <Switch>
         <Route exact path = '/' component = {Input}/>
         <Route path = '/output' component = {Output}/>
        </Switch> */