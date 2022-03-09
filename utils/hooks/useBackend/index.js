import React, { useState, useEffect } from "react";
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
  getFilter,
  getComment,
  getUserName,
} from "./crudFunctions.js";
// import { API } from '../../../config.js'

////////////////////////////////////

export default function useBackend({ user_id, username }) {
  useEffect(() => {
    (async () => {
      createUser({ user_id, username });
    })();
  }, []);

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
        controlObject.user_id = user_id;
        controlObject.username = username;
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

  async function getUser(method, controlObject) {
    controlObject = controlObject ?? {};

    method = method ?? methods.USERS;

    switch (method) {
      case methods.USERS:
        controlObject.user_id = user_id;
        controlObject.username = username;
        console.log("Expecting >> to equal, id and username", controlObject);
        await getUserName(controlObject);
        break;
      case methods.FILTER:
        controlObject.user_id = user_id;
        return await getFilter(controlObject);
      //break;
      case methods.COMMENT:
        await getComment(controlObject);
        break;
    }
  }

  return { addUser, updateUser, deleteUser, getUser, methods };
}

//Add user
//Update User
//Delete Filter
//Get user by ID

//Add filter, user info by ID
//Update filter
//
