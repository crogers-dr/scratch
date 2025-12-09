import Autocomplete from "@/components/mui_tests/Autocomplete";
import { Card } from "@mui/material";
import { CSSProperties } from "@mui/material/styles";

const style: CSSProperties = {
    width: '100px',
    margin: 'auto'
}
export default function Page(){
    return <Card style={style}>
        <Autocomplete />
    </Card>
}