export const addReducer = (state={arr:[],obj:{}}, action)=>{
    //console.log('Action is ',action);
    //var temp=[...state.arr];
    //console.log("##########inside reducer#########",temp);
    if(action.type==='+'){
        let tempstate = {arr:[...state.arr,action.payload]};
        //console.log("After Add",tempstate);
        return tempstate;   
    }
    if(action.type==='delete'){
        var arr1 = state.arr;
        var obj = action.payload;
        var arr2 = arr1.filter(ele=>ele!==obj);
        return {...state,arr:arr2};   
    }
    if(action.type==='clear'){
        state.arr = [];
        console.log("Array is.......",state.arr);
        return {...state,...state.arr};   
    }
    if(action.type==='edit'){
        console.log("object is.......",action.payload);
        var tempArr = state.arr;
        //var arr3 = tempArr.filter(ele=>ele!==obj);
        console.log("Temp arr is.............",tempArr);
        //console.log("Arr3 is.............",arr3);
        var itemToEdit = tempArr.find(ele=>ele===action.payload);
        console.log(".............",itemToEdit);
        return {...state,...state.arr,obj:itemToEdit};   
    }
    if(action.type==='update'){
        var fakeArr = state.arr;
        var index = fakeArr.findIndex(ele=>ele===action.payload);
        console.log("edited item in update is.......",action.payload);
        console.log(fakeArr);
        console.log("Index is.............",index);
        fakeArr.forEach(obj=>{if(obj.id===action.payload.id){
            obj.expense = action.payload.expense;
            obj.description = action.payload.description;
            obj.amount = action.payload.amount;
        }});
        console.log("Fake Array.............",fakeArr);
        return {...state,arr:fakeArr};   
    }
    return state;
}







// export const addReducer = (state=[], action)=>{
//     console.log('Action is ',action);
//     if(action.type==='+'){
//         return[...state,
//         {
//             typ:action.payload.type,
//             desc:action.payload.description,
//             amt:action.payload.amount
//         }];
//     }
// }