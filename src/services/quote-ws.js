import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

export const createQuoteWs = (data) =>
  api
    .post("/quote/create", data)
    .then(successStatus)
    .catch(internalServerError);

export const updateQuoteWs = (data) =>
  api
    .patch("/quote/:id/update", data)
    .then(successStatus)
    .catch(internalServerError);

export const updateStatusQuoteWs = (data) =>
  api
    .patch("/quote/:id/update-status", data)
    .then(successStatus)
    .catch(internalServerError);

export const getAllQuotesWs = () =>
  api.get("/quote/all").then(successStatus).catch(internalServerError);

export const deleteQuoteWs = () =>
  api
    .delete("/quote/:id/delete")
    .then(successStatus)
    .catch(internalServerError);
