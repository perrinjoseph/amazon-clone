//think of this as a data layer.
export const initialState = {
    basket:[],
    user: null
};


export const getBasketTotal = function(basket)
{
    return (basket.length>0?basket.map(val=> Number (val.price)).reduce((total,curVal)=>total+=curVal):0);
}

const reducer = (state,action)=> {
    console.log(action);
    
    switch(action.type){
        case 'ADD_TO_BASKET':
        return {
            ...state,
            basket:[...state.basket,action.item],

        };
        case 'REMOVE_FROM_CART': 
        
        const index = state.basket.findIndex(itm=> itm.id===action.id)
        
        let newCart = [...state.basket];
        if(index>=0)
        {
            newCart.splice(index,1);
        }
        else
        {
            console.warn(`Cannot Remove Product (id:${action.id}) as it is not in cart`)
        }

        return {
            ...state,
            basket: newCart
        }

        case 'SET_USER' : 
        //for somereason if you put return and put the bcurly brace in he next line it kinda shows error no idea why.
        return {
            ...state,
            user: action.user
        }

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[],
            }


        
        default:
            return state;
    }
};

export default reducer;
