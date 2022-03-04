import React, {useState} from 'react'
import { API } from '../../../config.js'

async function callApi(path,params){
    const response = await fetch (`${API}`)

    return response
}

export default function useBackend(id){
    const [userId, setUserId] = useState(id)

    function createUser(){
    }
}