import React from "react";
import axios from 'axios'


const initialData = {
    token: ""
}
const loginReducer = (state = initialData, action) => {
    switch (action.type) {
        case "LOGIN":
            const body = action.payload;
            var tokens
            axios({
                method: "post",
                url: "https://reqres.in/api/login",
                data: body
            }).then(res => {
                tokens=res.data;
                console.log(res.data)
            }).catch(err => console.log(err))

            return {
                ...state,
                    token: tokens
            }

        default:
            return state;
    }


}

export default loginReducer;