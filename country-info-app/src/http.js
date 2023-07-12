import { config } from "./config.js";

export const request = async (endpoint) => {
  const response = await fetch(`${config.API_URL}${endpoint}`);
  if (!response.ok) throw Error("the error is" + response.status);
  return await response.json();
};
