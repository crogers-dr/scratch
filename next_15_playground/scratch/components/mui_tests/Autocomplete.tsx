'use client'
import { Autocomplete as A, TextField } from "@mui/material";

const options =[
    {label:'Antidisestablishmentarianism', value:1},
    {label:'Floccinaucinihilipilification', value:2},
    {label:'Pneumonoultramicroscopicsilicovolcanoconiosis', value:3},
    {label:'Hippopotomonstrosesquipedaliophobia', value:4},
]
export default function Autocomplete(){
    return <A 
        multiple

        options={options} 
        renderInput={(params) => <TextField {...params} label="Movie" />}
    />
}