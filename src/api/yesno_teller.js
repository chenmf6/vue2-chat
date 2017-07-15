/**
 * Created by chenmf on 2017/7/15.
 */
import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://yesno.wtf' : '';

export default {
  getAnswer (question, cb) {
    let answer = '';
    axios.get(baseUrl + '/api').then(res => {
      answer = res.data.answer;
      return cb(answer);
    }).catch(error => {
      answer = 'Error! Could not reach the API ' + error;
      return cb(answer);
    });
  }
};
