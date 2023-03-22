import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name:"counter",   // state ulasmak icin state.counter ile buraya ulasacagın bir key oluyor
    initialState:{
        value:111
    },
    reducers:{}    // state'i guncelleyecek tanımlar
})

export default counterSlice.reducer;   // dısa aktarılan bilgi kısmı 