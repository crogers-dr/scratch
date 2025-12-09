'use client'
import { useEffect, useState } from "react"

const API_KEY = '';
const API_SECRET = '';

function useInterxionAPI(){
    const [bearerToken, setBearerToken] = useState();
    useEffect(()=>{
        let isRunning = true;
        const getBearerToken = async()=>{
            const response = await fetch(`https://api.interxion.com/ixapi/v2/auth/token`, {
                method: 'POST',
                body: JSON.stringify({api_key:API_KEY, api_secret:API_SECRET})
            });
            const result =  await response.json();
            if(isRunning){

                setBearerToken(result.accessToken);
            }
        }
        getBearerToken();
        return ()=>{isRunning=false};
    },[])

    return {
        bearerToken,
        getNetworkResource: async(id:string)=> {
            const response = await fetch(`https://api.interxion.com/ixapi/v2/network-services/${id}`);
            return await response.json();
        }
    }
}

export default function Page(){
    const interxionAPI = useInterxionAPI();
    return <div>
        <div>Interxion Stuff</div>
        <div> bearer token: {interxionAPI.bearerToken}</div>
        <br/>
        <div> 
            get resource: {interxionAPI.bearerToken && interxionAPI.getNetworkResource('VLC00001005')}
        </div>
    </div>
}