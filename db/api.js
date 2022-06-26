import axios from "axios";
import {APP_URL} from '../globals'


 const Api = {

  get: async function(url) {
      return await axios.get(APP_URL + '/api' + url)
   }
}
export default Api
