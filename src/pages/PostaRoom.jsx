import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostRoomForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const [previewURLs, setPreviewURLs] = useState([]);
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Create image preview URLs
  useEffect(() => {
    if (images.length > 0) {
      const urls = images.map((img) => URL.createObjectURL(img));
      setPreviewURLs(urls);

      // Clean up object URLs when component unmounts or images change
      return () => urls.forEach((url) => URL.revokeObjectURL(url));
    }
  }, [images]);

  const handleImageChange = (e) => {
    const selected = Array.from(e.target.files).slice(0, 3); // max 3
    setImages(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('price', price);
    images.forEach((img) => formData.append('images', img));

    try {
      await axios.post('http://localhost:5000/api/rooms', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage('✅ Room posted successfully!');
      setShowPopup(true);

      setTitle('');
      setDescription('');
      setLocation('');
      setPrice('');
      setImages([]);
      setPreviewURLs([]);

      // Hide popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      console.error('Upload error:', err);
      setMessage('❌ Failed to post room');
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8 relative">
      {showPopup && (
        <div className={`absolute top-0 left-0 w-full text-center p-3 font-medium rounded-t-md ${message.startsWith('✅') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {message}
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-10">Post a Room</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Room title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="number"
          placeholder="Monthly price (UGX)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
        />

        <div>
          <label className="block mb-1 font-medium">Upload up to 3 images</label>
          <input
            type="file"
            onChange={handleImageChange}
            multiple
            accept="image/*"
            className="block w-full text-sm text-gray-700"
          />

          {/* Image preview */}
          {previewURLs.length > 0 && (
            <div className="flex gap-4 mt-3">
              {previewURLs.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`preview-${index}`}
                  className="w-24 h-24 object-cover rounded border"
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-500 text-white py-2 px-4 rounded transition"
        >
          Post Room
        </button>
      </form>
    </section>
  );
}
