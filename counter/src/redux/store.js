
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"

 const store = configureStore({
    reducer:{
        counter1: counterReducer
    },  // henuz hafızaya alınacak bilgiler yok onun iöin bos 
 })

 export default store;