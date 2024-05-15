/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/editor.js ***!
  \********************************/
const LOCATION_KEY = 'three_ships_location';
async function getLocationData() {
  let three_ships_location = getWithExpiry(LOCATION_KEY);
  if (three_ships_location) {
    return three_ships_location;
  }

  //    let ipAddress = await getIpAddress();
  try {
    let ipapiResponse = await fetch('https://ipapi.co/json/');
    let ipapiData = await ipapiResponse.json();
    setWithExpiry(LOCATION_KEY, ipapiData, 1000 * 60 * 60);
    return ipapiData;
  } catch (error) {
    console.error('Error getting location:', error);
  }
}
function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
function setWithExpiry(key, value, ttl) {
  const now = new Date();
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
}
window.addEventListener('load', async function () {
  console.log('window loaded');
  let locationData = await getLocationData();
  console.log("here is locationData", locationData);
  if (locationData.region_code) {
    let regionElement = document.querySelector('#three-ships-user-location');
    regionElement.textContent = locationData.city + " " + locationData.region_code;
  } else {}
});
/******/ })()
;
//# sourceMappingURL=editor.js.map