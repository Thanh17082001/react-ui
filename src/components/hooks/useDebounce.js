import { useState, useEffect } from "react";

function useDounce(value, timeDelay){
    const [debounceValue, setDebounceValue]= useState(value)

    useEffect(() => {
        const idSetTimeOut=setTimeout(()=> setDebounceValue(value), timeDelay)
        return ()=> clearTimeout(idSetTimeOut)
    }, [value,timeDelay])

    return debounceValue;
}

export default useDounce;