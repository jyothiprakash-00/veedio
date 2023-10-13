import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// uplod a video 

export const uplodVideo = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)   //make post http request to https://localhost:4000/videos to add videos in json-server and return response to Add.jsx
}

// get all videos

export const getAllVideos = async ()=>{
    return await commonAPI("GET",`${serverURL}/videos`,"")         //make get http request to https://localhost:4000/videos to get all videos from json-server and return response to View.jsx
}


// get a video

export const getAVideo = async (id)=>{
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")   //make get http request to https://localhost:4000/videos to get a video from json-server and return response to VideoCard.jsx
}

// delete a video

export const deleteAVideo = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})   //make Delete http request to https://localhost:4000/videos to delete a video from json-server and return response to VideoCard.jsx
}

// store watching video history to json server

export const addToHistory = async (videoDetails)=>{
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)   //make post http request to https://localhost:4000/history to add a video history in json-server and return response to VideoCard.jsx
}


// get all  watching video history from json server

export const getAllHistory = async ()=>{
    return await commonAPI("GET",`${serverURL}/history`,"")   //make get http request to https://localhost:4000/history to get a video history from json-server and return response to watchHistory.jsx
}


// delete  watching video history from json server

export const deleteHistory = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})   //make delete http request to https://localhost:4000/history to delete a video history from json-server and return response to watchHistory.jsx
}


// add category to json server

export const addCategory = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)   //make post http request to http://localhost:4000/categories to add category to json-server and return response to category.jsx
}


// get all category from json server

export const getAllCategory = async ()=>{
    return await commonAPI("GET",`${serverURL}/categories`,"")   //make get http request to http://localhost:4000/categories to get all category from json-server and return response to category.jsx
}



// remove a category from json server

export const deleteCategory = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})   //make delete http request to http://localhost:4000/categories/id to delete a category from json-server and return response to category.jsx
}



// update a category from json server

export const updateCategory = async (id,body)=>{
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)   //make delete http request to http://localhost:4000/categories/id to delete a category from json-server and return response to category.jsx
}


