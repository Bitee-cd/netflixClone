import Axios from 'axios';


/**base url to make requests to the movie database */
const instance=Axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default instance;