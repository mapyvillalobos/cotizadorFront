import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

export const createPackageWs = (data) =>
  api
    .post("/package/create", data)
    .then(successStatus)
    .catch(internalServerError);

export const updatePackageWs = (data) =>
  api
    .patch("/package/:id/update", data)
    .then(successStatus)
    .catch(internalServerError);

export const getAllPackagesWs = () =>
  api.get("/package/all").then(successStatus).catch(internalServerError);
