import React, {useState} from 'react'
// import { API } from '../../../config.js'


const API = process.env.NEXT_PUBLIC_API_URL



export default async function useCallApi(path, type, body){

    path = path ?? "chargingstation"
    type = type ?? "GET"
    body = body ?? {}

    const requestOptions = {
        method: type,
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(body)
    };


    let response = [];
    
    try{
        
        response = await fetch (`/${path}`,requestOptions).then(res=>res.json())
        // if(!response?.payload || response?.success === false){throw "Failed to get a response from the server"}
    }catch(err){
        response = "error"
        console.error(err, " Did you include the correct syntax? Print backend functions with ('HELP') for help")
    }

    return response 
    // === "error"? response : response.payload
}




// async function userExists(id){
//     return await callApi(`users/${id}`).then(res => res.json()) === []? false: true
// }

// export default function useBackend({id, name}){



//     const methods = {
//         FILTER:"FILTER",
//         COMMENT:"COMMENT",
//         USERS:"USERS"
//     }

//     const [userId, setUserId] = useState(id)

// function createUser(body){
//     callAPI
// }

//     async function addUser(method){
        

//         method = method ?? methods.USERS

//         switch(method){
//             case methods.USERS:
//                 createUser(userId)
//             break;
//         }


//     }

    



//     async function getUser()

//     async function deleteUser()

//     async function updateUser()

    



//     {
//     }
// }


//Add user
//Update User
//Delete Filter 
//Get user by ID



//Add filter, user info by ID 
//Update filter 
//