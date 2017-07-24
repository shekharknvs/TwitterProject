
export const nonceGenerator = () => {
    let result = '';
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0;i<32;i++) {
        result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return window.btoa(encodeURIComponent(result));
};