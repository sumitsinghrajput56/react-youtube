import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state,action) => {
            state = Object.assign(state, action.payload);
        },
    },
});

// Cache :
// time complexity tro search in array = 0(n)
// time complexity tro search in object = 0(1)

// [i,ip,iph,ipho,iphone]

// {
//     i, 
//     ip,
//     iph,
//     ipho,
//     iphone
// }


export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;

