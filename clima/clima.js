const axios = require("axios");

async function getClima(lat, lon) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fbf913cf7aa34a8a7be41691c2916e40&units=metric`);
        return response.data.main.temp;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getClima
}