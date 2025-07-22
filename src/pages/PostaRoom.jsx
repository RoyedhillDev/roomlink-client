// frontend: src/pages/PostRoomForm.jsx
import { useState } from 'react';
import axios from 'axios';

export default function PostRoomForm() {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [location, setLocation] = useState('');
const [price, setPrice] = useState('');
const [images, setImages] = useState([]);
const [message, setMessage] = useState('');

const handleImageChange = (e) => {
setImages(Array.from(e.target.files).slice(0, 3)); // Allow only up to 3 images
};

const handleSubmit = async (e) => {
e.preventDefault();
const formData = new FormData();
formData.append('title', title);
formData.append('description', description);
formData.append('location', location);
formData.append('price', price);
images.forEach((image) => {
  formData.append('images', image); // key must match multer config (images)
});

try {
  const res = await axios.post('http://localhost:5000/api/rooms', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  setMessage('✅ Room posted successfully!');
  setTitle('');
  setDescription('');
  setLocation('');
  setPrice('');
  setImages([]);
} catch (err) {
  console.error('Upload error:', err);
  setMessage('❌ Failed to post room');
}
};
return (
<form onSubmit={handleSubmit} className="space-y-4 p-4">
<input type="text" placeholder="Room title" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full border p-2" />
<textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full border p-2" />
<input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full border p-2" />
<input type="number" placeholder="Monthly price (UGX)" value={price} onChange={(e) => setPrice(e.target.value)} required className="w-full border p-2" />
  <input type="file" onChange={handleImageChange} multiple accept="image/*" className="block" />
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post Room</button>

  {message && <p className="mt-4 text-sm">{message}</p>}
</form>
);
}
