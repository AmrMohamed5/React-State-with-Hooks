import React, {useState, useEffect } from 'react';
import Profile from './Profile';

const App = () => {
    const [state , setState] = useState({coutn : 0, show : false})

    const reset = () => { 
        let myInterval = null;
        setState ((prev) => ({...prev,count : 0}))
        clearInterval(myInterval)
        myInterval = setInterval(() => {
            setState((prev) => ({...prev, count : prev.count +1}))
        }, 1000);
    }
    const handleClick = () => {
        setState((prev) => ({...prev , show : !prev.show}))
    }
    
    return ( 
        <>
        {state.show && <Profile reset={reset} />}
         <button onClick={handleClick}>{state.show === true ? 'Hide' : 'Show'}</button>
        <p>{state.count}</p>
        </>
    );
}
 
export default App;
