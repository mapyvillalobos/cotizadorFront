import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-responses";

export const editUserWs = (data) =>
  api
    .patch("/user/edit-profile", data)
    .then(successStatus)
    .catch(internalServerError);

export const myProfileWs = () =>
  api
    .get("/user/my-profile")
    .then(successStatus)
    .catch(internalServerError);

export const idProfileWs = () =>
  api
    .get("/user/:id/profile")
    .then(successStatus)
    .catch(internalServerError);

export const usersWs = (data) =>
  api.get("/user/admin/users", data).then(successStatus).catch(internalServerError);