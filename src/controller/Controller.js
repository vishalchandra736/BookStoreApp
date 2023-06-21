import axios from 'axios';

export const myAxiosGetRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'http://192.168.1.10:4003/book',
  });
  return res;
};