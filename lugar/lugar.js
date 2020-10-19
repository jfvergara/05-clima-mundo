const axios = require("axios");

async function getLugarLatLng(direccion) {
    const encodedUrl = encodeURI(direccion);
    console.log(encodedUrl);
    try {
        const resp = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&APPID=fbf913cf7aa34a8a7be41691c2916e40`
        );
        //console.log(resp.data.coord);
        const direccion = resp.data.name;
        const lon = resp.data.coord.lon;
        const lat = resp.data.coord.lat;
        return {
            direccion,
            lon,
            lat
        }
    } catch (error) {
        return error.response.data.message;
    }
}

module.exports = {
    getLugarLatLng
}