
import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-responses";

export const loginWs = (data) =>
  api.post("/auth/login", data).then(successStatus).catch(internalServerError);


export const signupWs = (data) =>
  api.post("/auth/signup", data).then(successStatus).catch(internalServerError);


export const logoutWs = () =>
  api.get("/auth/logout").then(successStatus).catch(internalServerError);
