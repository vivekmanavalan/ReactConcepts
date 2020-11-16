import React,{useRef,useEffect} from 'react';

const RefHooks = (props) => {
    const toogleRef = useRef(null);

    useEffect(() => {
        console.log("Hooks component did mount");
        toogleRef.current.focus();
    },[]);
    
    return (
        <div>
            <h3> Hooks Ref</h3>
            <input type="text" name="use"  ref={toogleRef}/>
        </div>
    );
}

export default RefHooks;