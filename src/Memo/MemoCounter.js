import React,{useMemo, useState} from 'react';
const MemoCounter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        console.log('increment one function');
        setCounterOne(counterOne + 1);
    }
    const incrementTwo = () => {
        console.log('increment two function');
        setCounterTwo( counterTwo + 2);
    }

    //wihtout using useMemo this function will be called even when we incrementTwo since the component gets
    //rendered again
    const isEven = useMemo(() => {
        console.log('called is even');
        return counterOne % 2 === 0;
    },[counterOne]);
    return (
        <div>
            <div>
                <button onClick={incrementOne}>incrementOne - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
            <button onClick={incrementTwo}>incrementTwo - {counterTwo}</button>
            </div>
        </div>
    )
}

export default MemoCounter;