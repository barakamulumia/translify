export default function calcPriceFromLatLng(pickup, destination, load = 1) {
  const R = 6371e3; //Radius of the earth in metres

  const φ1 = (pickup.latlng.lat * Math.PI) / 180; // φ, λ in radians
  const φ2 = (destination.latlng.lat * Math.PI) / 180;
  const Δφ = ((destination.latlng.lat - pickup.latlng.lat) * Math.PI) / 180;
  const Δλ = ((pickup.latlng.lng - destination.latlng.lng) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  let price = Math.round(((R * c) / 10) * 100) / 100;

  switch (load) {
    case 5:
      price *= 1.6;
      break;
    case 4:
      price *= 1.45;
      break;
    case 3:
      price *= 1.3;
      break;
    case 2:
      price *= 1.15;
      break;
    default:
      price *= 1;
      break;
  }
  return Math.round(price * 100) / 100;
}

export const currencyToString = (currency) =>
  currency.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
