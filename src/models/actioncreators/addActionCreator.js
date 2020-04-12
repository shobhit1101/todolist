export const addActionCreator=(id,expense,description,amount,opr)=>{
    return {
        payload:{id,expense,description,amount},
        type:opr
    };
}