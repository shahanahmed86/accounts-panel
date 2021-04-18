// resizer
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';

export async function resizeImage(file) {
	return new Promise((resolve) => {
		Resizer.imageFileResizer(
			file,
			300,
			300,
			'JPEG',
			100,
			0,
			(uri) => {
				resolve(uri);
			},
			'base64'
		);
	});
}
export function dataURLtoFile(data_url, filename) {
	let arr = data_url.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime });
}

export function toastError(errorMessage) {
	const message = errorMessage.split('error: ')[1];
	toast.error(message);
}
