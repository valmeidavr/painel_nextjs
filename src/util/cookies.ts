import Cookies from "js-cookie";

export function setCookie(
    key: string,
    value: string | object,
    options?: Cookies.CookieAttributes
) : void { 
    Cookies.set(key, value, {        
        ...options,
        secure: process.env.NODE_ENV === 'production' ? true : false,
    });
}
