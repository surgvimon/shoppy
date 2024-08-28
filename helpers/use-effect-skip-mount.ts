import { T } from '@/utils/types';
import React from 'react'
// import { T } from '../utils/types';

const useEffectSkipMount = (callback:T, dependencies:T) => {
    const hasMounted = React.useRef(false);
    const callbackRef = React.useRef<T>();
    callbackRef.current = callback;
    
    React.useEffect(() => {
        if(!hasMounted.current){
            return;
        }
        callbackRef.current();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencies]);

    React.useEffect(()=> {
        hasMounted.current = true;
        return () => {
            hasMounted.current = false;
        };
    }, []);
}

export default useEffectSkipMount;