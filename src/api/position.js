import axios from '../core/axios';
import process from '../../env'

const getAddressByCoords = async (coords) => {
    const {lat, lng} = coords;
    try {
        const {data} = await axios.get(`/geocoding/v1/reverse?key=${process.API_KEY}&location=${lat},${lng}`);
        return data?.results[0]?.locations[0];
    } catch(err) {
        console.log(err)
    }
}

export {
    getAddressByCoords
}