import { callApi } from "./callApi";

export async function createUser(body) {
  const { id } = body;
  const { username } = body;
  return await callApi("users", `POST`, {
    username,
    id,
  });
}

export async function createFilter(body) {
  console.log("This is the body :)", body);
  const { user_id } = body;
  const { price } = body;
  const { connector_type } = body;
  const { availability } = body;
  return await callApi("filters", "POST", {
    user_id,
    price,
    connector_type,
    availability,
  });
}

export async function createComment(createObject) {
  const { location } = createObject;
  const { comment } = createObject;
  const { date } = createObject;
  const { visibility } = createObject;

  return await callApi("comments", "POST", {
    user_id,
    location,
    comment,
    date,
    visibility,
  });
}

export async function updateComment() {
  const { location } = createObject ?? "";
  const { comment } = createObject ?? "No comment";
  const { date } = createObject ?? Null;
  const { visibility } = createObject ?? false;

  return await callApi(`comments/${user_id}`, "PUT", {
    location,
    comment,
    date,
    visibility,
  });
}

export async function updateUserName(updatedObject) {
  const { username, user_id } = updatedObject;
  console.log("Username SHOULD BE SIMON WE HATE YOU BOB ", username);
  return await callApi(`users/${user_id}`, "PUT", {
    username,
  });
}

export async function updateFilter(updatedObject) {
  const { price } = updatedObject;
  const { connector_type } = updatedObject;
  const { availability } = updatedObject;

  return await callApi(`filters/${user_id}`, "PUT", {
    price,
    connector_type,
    availability,
  });
}

export async function deleteUserName({ user_id }) {
  return await callApi(`users/${user_id}`, "DELETE");
}

export async function deleteFilter(filterId) {
  const { filter_id } = filterId;
  return await callApi(`filters/${filter_id}`, "DELETE");
}

export async function deleteComment(commentId) {
  const { comment_id } = commentId;
  return await callApi(`comments/${comment_id}`, "DELETE");
}
