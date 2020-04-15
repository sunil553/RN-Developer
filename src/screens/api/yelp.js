import axios from 'axios'




const bodyParameters = {
    'user-key': "7284c8f9f63225e8c457a15a58bf23d6"
 };
 const username = 'user-key'
 const password = '7284c8f9f63225e8c457a15a58bf23d6' 
//  const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
//  const token = '7284c8f9f63225e8c457a15a58bf23d6';
export default axios.create({
baseURL: 'https://developers.zomato.com/api/v2.1',
headers:{
     "user-key" : "7284c8f9f63225e8c457a15a58bf23d6"
}
})


// yelp.get('/location_details')