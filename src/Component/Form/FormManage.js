
export const initialize={
    person:[],
}
export const reducer=(state,action)=>{
switch(action.type){
    case 'ADD_MEMBER':
        const newperson={
            Id:action.Id,
            name:action.name,
            father:action.father,
            password:action.password
        }
        const allperson=[...state.person,newperson];
        return{person:allperson};
       
        default:
            return state;
}

}