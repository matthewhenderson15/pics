import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3HB5kCv8kIVZRH1aVku_rAanXRxsMM-vVnduEHdwuts'
    }
});