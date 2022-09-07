import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

export const createEntityWs = (data) =>
  api
    .post("/entity/create", data)
    .then(successStatus)
    .catch(internalServerError);

export const updateEntityWs = (data) =>
  api
    .patch("/entity/:id/update", data)
    .then(successStatus)
    .catch(internalServerError);

export const getAllEntitiesWs = () =>
  api.get("/entity/all").then(successStatus).catch(internalServerError);
