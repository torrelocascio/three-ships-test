const LOCATION_KEY = 'three_ships_location';    

import { Slider } from 'es6-simple-carousel';
import 'es6-simple-carousel/dist/styles/slider.css';
// optional
// import 'es6-simple-carousel/dist/styles/custom.css';
//...


function initiateSlider(){
    let slider = document.querySelector('#slider');
    console.log('here is slider', slider);
    if(!slider){
        return;
    }
    const slideConfig = {
        slider:  slider,
        threshold: 50,
        // infinite: true,
        nav: true,
        dots: true,
        autoPlay:false,
        responsive: {
          0: {
            items: 1.5
          },
          560: {
            items: 2
          },
          760: {
            items: 3
          }
        }
      };
      
      let newSlide = new Slider(slideConfig);
      console.log('here is newSlide', newSlide)
}


async function getLocationData(){
   let three_ships_location = getWithExpiry(LOCATION_KEY);
   if(three_ships_location){
    return three_ships_location;
   }

//    let ipAddress = await getIpAddress();
try {
    let ipapiResponse = await fetch('https://ipapi.co/json/');
    let ipapiData = await ipapiResponse.json();
    setWithExpiry(LOCATION_KEY, ipapiData, 1000 * 60 * 60)
    return ipapiData;
} catch (error) {
    console.error('Error getting location:', error);

}

}


function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

function setWithExpiry(key, value, ttl) {
    const now = new Date()
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }


    localStorage.setItem(key, JSON.stringify(item))
}


async function startIpLocationGetter(){
    let regionElement = document.querySelector('#three-ships-user-location');
    if(!regionElement){
        return;
    }
    let locationData = await getLocationData();
    console.log("here is locationData", locationData);
    if(locationData.region_code){

        
        regionElement.textContent = locationData.city + " " + locationData.region_code;
    } else {
    }

}



window.addEventListener('load', function () {

    initiateSlider();
    startIpLocationGetter();
    console.log('window loaded');

  })
