import { Cloudinary } from '@cloudinary/url-gen';
const cld = new Cloudinary({
	cloud: {
		cloudName: 'aron-portfolio',
	},
});
export default cld;
