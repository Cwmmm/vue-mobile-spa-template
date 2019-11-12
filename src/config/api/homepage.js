import base from './base';
import axios from '../http';

const homepage={
  kingkong(){
    return axios.get(`${base.mock}/homepage/kingkong`)
  },
  poislit(){
    return axios.get(`${base.mock}/homepage/poislit`)
  }

}
  
export default homepage

