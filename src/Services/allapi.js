import axios from "axios";

const base_url="https://reduxserver.onrender.com"


export const addHomeApi=async(data)=>{
    return await axios.post(`${base_url}/add`,data)
}

export const getContactApi= async()=>{
    return await axios.get(`${base_url}/add`)
}

export const deleteContactApi=async()=>{
    return await axios.delete(`${base_url}/add/${id}`)
}