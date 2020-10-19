const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true,
    },
}).argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const lat = coords.lat;
        const lon = coords.lon;
        const temperatura = await clima.getClima(lat, lon);
        return `El clima de ${coords.direccion} es de ${temperatura}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${argv.direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);