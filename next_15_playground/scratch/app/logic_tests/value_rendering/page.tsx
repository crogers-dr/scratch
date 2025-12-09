import {ShortCircuitRenderer} from 'package_test'


const TEST_VALUES = [undefined, false, 0, 'a', -1, 1, true, null]
export default function Page(){
    return <div>
        {TEST_VALUES.map((value, index)=>(
            <div key={index}>
                {`${value}:`}
            <ShortCircuitRenderer key ={index} value={value} /><br/></div>
        ))}
    </div>
}