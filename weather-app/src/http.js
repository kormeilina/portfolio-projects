import { config } from "./config.js";

export const request = async (endpoint) => {
  const response = await fetch(`${config.API_URL}${endpoint}`);
  if (!response.ok) throw Error("the error is" + response.status);
  return await response.json();
};

export async function getWeatherData(locationName) {
  return await request(`/weather?q=${locationName}&appid=${config.apiKey}`);
}
export async function getHourlyWeatherData(locationName, hours = 7 * 24) {
  return await request(
    `/forecast?q=${locationName}&cnt=${hours}&appid=${config.apiKey}`
  );
}
