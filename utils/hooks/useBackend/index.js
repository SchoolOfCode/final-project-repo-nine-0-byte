import React, { useState } from "react";
import { callApi } from "./callApi.js";
import {
  createComment,
  createFilter,
  createUser,
  updateComment,
  updateUserName,
  updateFilter,
  deleteComment,
  deleteFilter,
  deleteUserName,
} from "./crudFunctions.js";
// import { API } from '../../../config.js'

async function userExists(id) {
  console.log(id);
  const res = await callApi(`users/${id}`);
  console.log("RESPONSE BACK ", res);
  return res.length === 0 ? false : true;
}

////////////////////////////////////

export default function useBackend({ user_id, name }) {
  // const [user_id, setUser_id] = useState(id);

  // (async ()=>{
  //   if (!(await userExists(user_id))) {
  //     await createUser({ user_id, name });
  //   }
  // })()

  const methods = {
    FILTER: "FILTER",
    COMMENT: "COMMENT",
    USERS: "USERS",
  };

  async function addUser(method, controlObject) {
    controlObject = controlObject ?? {};

    method = method ?? methods.USERS;

    switch (method) {
      case methods.USERS:
        controlObject.id = user_id;
        controlObject.username = name;
        console.log("Expecting >> to equal, id and username", controlObject);
        await createUser(controlObject);
        break;
      case methods.FILTER:
        controlObject.user_id = user_id;
        await createFilter(controlObject);
        break;
      case methods.COMMENT:
        await createComment(controlObject);
        break;
    }
  }

  async function updateUser(method, controlObject) {
    controlObject = controlObject ?? {};

    method = method ?? methods.USERS;

    switch (method) {
      case methods.USERS:
        controlObject.user_id = user_id;
        await updateUserName(controlObject);
        break;
      case methods.FILTER:
        await updateFilter(controlObject);
        break;
      case methods.COMMENT:
        await updateComment(controlObject);
        break;
    }
  }

  const deleteUser = async (method, controlObject) => {
    controlObject = controlObject ?? {};

    method = method ?? methods.USERS;

    console.log("I'm deleting a ", method);

    switch (method) {
      case methods.USERS:
        controlObject.user_id = user_id;
        await deleteUserName(controlObject);
        break;
      case methods.FILTER:
        await deleteFilter(controlObject);
        break;
      case methods.COMMENT:
        await deleteComment(controlObject);
        break;
    }
  };

  return { addUser, updateUser, deleteUser, methods };
}

//Add user
//Update User
//Delete Filter
//Get user by ID

//Add filter, user info by ID
//Update filter
//
