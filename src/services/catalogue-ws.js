import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-responses";

export const createCatalogueWs = (data) =>
  api
    .post("/catalogue/create", data)
    .then(successStatus)
    .catch(internalServerError);

export const updateCatalogueWs = (data) =>
  api
    .patch("/catalogue/:id/update", data)
    .then(successStatus)
    .catch(internalServerError);

export const getAllCataloguesWs = () =>
  api.get("/catalogue/all").then(successStatus).catch(internalServerError);

export const deleteCatalogueWs = () =>
  api.delete("/catalogue/:id/delete").then(successStatus).catch(internalServerError);

