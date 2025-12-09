export default function ShortCircuitRenderer({value}:{value:any}){
    const text= '';
    return <div>
        <div>short circuit renderer, attempting to render {JSON.stringify(value)} with a short circuit: </div>
        {value&&'other'}
    </div>
}