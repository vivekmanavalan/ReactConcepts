import React, {useState, useCallback, useMemo} from 'react';
import IncrementButton from './IncrementButton';
import DisplayDetails from './DisplayDetails';
const ParentComponent = () => {
    const [salary, setSalary] = useState(1000);
    const [age, setAge] = useState(25);

    //used the useCallback because everytime when we change the state of the salary or age the component gets re-rendered
    //and even when one state is changed both the functions are called once automatically to avoid that we use
    //usecallback
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    },[salary]);
    const incrementAge = useCallback(() =>{
        setAge(age + 10);
    },[age]);
    console.log('rerendering parent component');
    return(
        <div>
        <IncrementButton handleClick={incrementSalary}>incrementSalary</IncrementButton>
        <IncrementButton handleClick={incrementAge}>IncrementAge</IncrementButton>
        <DisplayDetails text = "age" count={age} />
        <DisplayDetails text = "salary" count = {salary} />
        </div>
    )
}
export default ParentComponent;