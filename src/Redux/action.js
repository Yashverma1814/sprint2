export const login = (data) => {
    return {
        type: "LOGIN",
        payload: {
            email:data.email,
            password:data.pass
        }
    }
}