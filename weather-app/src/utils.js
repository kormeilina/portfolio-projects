export function kelvinToCelsius(kelvin) {
  const celsius = Math.round(kelvin - 273.15);
  return celsius > 0 ? `+${celsius}` : `${celsius}`;
}

