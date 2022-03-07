import React, { useState } from "react";
// import { API } from '../../../config.js'

async function callApi(path, type, body) {
   
    path = path ?? "chargingstation";


    // type = type === undefined ? "GET" : type
  
    
    type = type ?? "GET";
    console.log("Going to path: ", path, "with a type of: ", type, "Body of: ", body)
  const requestOptions = {
    method: type,
    headers: { "Content-Type": "application/json" },
  };

  if (body !== undefined) {
    requestOptions.body = JSON.stringify(body);
  }

  let response = [];

  try {
    const req = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;

    response = await fetch(req, requestOptions).then(res => res.json());
    // if(!response?.payload || response?.success === false){throw "Failed to get a response from the server"}
  } catch (err) {
    response = "error";
    console.error(
      err,
      " Did you include the correct syntax? Print backend functions with ('HELP') for help"
    );
  }

  return response;
  // === "error"? response : response.payload
}

async function userExists(id) {
    console.log(id)
    const res = await callApi(`users/${id}`)
    console.log("RESPONSE BACK ", res)
  return res.length  === 0
    ? false
    : true;
}

////////////////////////////////////

export default async function useBackend({ id, name }) {
  const [user_id, setUser_id] = useState(id);

  console.log(await userExists(user_id))
  console.log(user_id)


  if (! await userExists(user_id)) {
    createUser({user_id, name});
  }

  const methods = {
    FILTER: "FILTER",
    COMMENT: "COMMENT",
    USERS: "USERS",
  };

  function createUser(body) {
    const { id } = body;
    const { username } = body;
    callApi("users", "POST", {
      id,
      username,
    });
  }

  function createFilter(body) {

    const { price } = body;
    const { connector_type } = body;
    const { availability } = body;
    callApi("filters", "POST", {
      user_id,
      price,
      connector_type,
      availability,
    });
  }

  function createComment(createObject) {
    
    const { location } = createObject;
    const { comment } = createObject;
    const { date } = createObject;
    const { visibility } = createObject;

    callApi("comments", "POST", {
      user_id,
      location,
      comment,
      date,
      visibility,
    });
  }

  function updateComment() {
    
    const { location } = createObject ?? "";
    const { comment } = createObject ?? "No comment";
    const { date } = createObject ?? Null;
    const { visibility } = createObject ?? false;

    callApi(`comments/${user_id}`, "PUT", {
      location,
      comment,
      date,
      visibility,
    });
  }

  function updateUserName(updatedObject) {
   
    const { username } = updatedObject;

    callApi(`users/${user_id}`, "PUT", {
      username,
    });
  }

  function updateFilter(updatedObject) {
    
    const { price } = updatedObject;
    const { connector_type } = updatedObject;
    const { availability } = updatedObject;

    callApi(`filters/${user_id}`, "PUT", {
      price,
      connector_type,
      availability,
    });
  }

  function deleteUserName() {
    const user_id = user_id;
    callApi(`users/${user_id}`, "DELETE");
  }

  function deleteFilter(filterId) {
    const { filter_id } = filterId;
    callApi(`filters/${filter_id}`, "DELETE");
  }

  function deleteComment(commentId) {
    const { comment_id } = commentId;
    callApi(`comments/${comment_id}`, "DELETE");
  }

  async function addUser(method, controlObject) {
 
    controlObject = controlObject ?? {};

    method = method ?? methods.USERS;

    switch (method) {
      case methods.USERS:
        controlObject.user_id = user_id;
        createUser(controlObject);
        break;
      case methods.FILTER:
        createFilter(controlObject);
        break;
      case methods.COMMENT:
        createComment(controlObject);
        break;
    }
  }

  async function updateUser(method, controlObject) {

    controlObject = controlObject ?? {};

    method = method ?? methods.USERS;

    switch (method) {
      case methods.USERS:
        controlObject.user_id = user_id;
        updateUserName(controlObject);
        break;
      case methods.FILTER:
        updateFilter(controlObject);
        break;
      case methods.COMMENT:
        updateComment(controlObject);
        break;
    }
  }

  const deleteUser = async (method, controlObject)=>  {
   
    controlObject = controlObject ?? {};

    method = method ?? methods.USERS;

    switch (method) {
      case methods.USERS:
        controlObject.user_id = user_id;
        deleteUserName(controlObject);
        break;
      case methods.FILTER:
        deleteFilter(controlObject);
        break;
      case methods.COMMENT:
        deleteComment(controlObject);
        break;
    }
  }


  return [addUser]
 
}




//Add user
//Update User
//Delete Filter
//Get user by ID

//Add filter, user info by ID
//Update filter
//
