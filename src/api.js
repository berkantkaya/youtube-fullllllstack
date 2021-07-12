import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyAWD-4F83Rg4rbpaDzYjc_E-fnUW1sqDDM',
   },
})

export default request