import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 169da000ad6e98dcda008dff119dd6297c201519347b3d59349c3517d318ccc5'
	}
})