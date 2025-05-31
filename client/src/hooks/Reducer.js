

export const initialState={
    cart:[]
}

const Reducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart,action.item]
            }
    }
}

export default Reducer;