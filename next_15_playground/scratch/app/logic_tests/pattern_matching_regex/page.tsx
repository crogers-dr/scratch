'use client'
import { Card, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { match, P } from "ts-pattern";

enum enum1 {
    A = 'A',
    B='B',
    C='C',
    D='D',
    E='E',
    F='F'
}
enum enum2 {
    one='one',
    two='two',
    three='three',
    four='four',
    five='five',
    six='six',
    seven='seven'
}

const BStarRegex = new RegExp(`${enum1.B}:.*`);
const AFiveRegex = new RegExp(`${enum1.A}:${enum2.five}`);
const BOneRegex = new RegExp(`${enum1.B}:${enum2.one}`);
function SwitchRenderItems(e1:enum1, e2:enum2){
    const string = `${e1}:${e2}`;
    switch(true){
        case AFiveRegex.test(string):
            return 'this is a special case for A5'
        case BStarRegex.test(string):
            return 'all B gets captured';
        case BOneRegex.test(string):
            return 'but B1 should get its own';
            default:
                return `default case: ${e1}, ${e2}`;
    }
}
function PatternMatchRender(e1:enum1, e2:enum2){
    return match({e1, e2})
    .with({e1:enum1.B, e2:enum2.one}, ()=>'but B1 should get its own')
    .narrow()
    .with({e1:enum1.B, e2:P._}, ()=>'all B gets captured')
    .narrow()
    .with({e1:enum1.A, e2:enum2.five}, ()=>'this is a special case for A5')
    .narrow()
    .otherwise(()=>`default case: ${e1}, ${e2}`);
}

export default function Page(){
    const [e1, setE1] = useState(enum1.A);
    const [e2, setE2] = useState(enum2.one);
    return <Card style={{display:'flex', flexFlow: 'row'}}>
        <RadioGroup value={e1} onChange={({target:{value}})=>setE1(value)}>
            {Object.values(enum1).map((v)=>(<FormControlLabel key={v} value={v} control={<Radio />} label={v} />))}
        </RadioGroup>
        <RadioGroup value={e2} onChange={({target:{value}})=>setE2(value)}>
            {Object.values(enum2).map((v)=>(<FormControlLabel key={v} value={v} control={<Radio />} label={v} />))}
        </RadioGroup>
        <Card>
            {PatternMatchRender(e1, e2)}
        </Card>
    </Card>
}