import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name:"counter",   // state ulasmak icin state.counter ile buraya ulasacagın bir key oluyor
    initialState:{
        value:111
    },
    reducers:{
      increment: (state)=>{
            state.value +=1
      },
      decrement:(state)=>{
        state.value -=1
      }
    }    // state'i guncelleyecek tanımlar. veri guncellemek ve update etmek ıcın burayı kullanıyoruz.
})

export const {increment, decrement}= counterSlice.actions;
export default counterSlice.reducer;   // dısa aktarılan bilgi kısmı 