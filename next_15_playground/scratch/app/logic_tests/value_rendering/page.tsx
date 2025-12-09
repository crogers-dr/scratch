function Renderer({value}:{value:any}){
    return <div>{value&&'other'}</div>
}

const TEST_VALUES = [undefined, false, 0, 'a', -1, 1, true, null]
export default function Page(){

    return <div>
        {TEST_VALUES.map((value, index)=>(
            <div>
                {`${value}:`}
            <Renderer key ={index} value={value} /><br/></div>
        ))}
    </div>
}