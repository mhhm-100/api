import { createContext } from "react";

export const Context = createContext({
    loding: false,
    setLoding: () => { },
    checkUser: false,
    setCheckUser: () => { },
    user: {},
    setUser:() => {},
});