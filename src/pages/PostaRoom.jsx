// src/pages/PostRoom.jsx
import React, { useState } from 'react';

const PostaRoom = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    type: '',
    description: '',
    amenities: [],
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({
        ...prev,
        amenities: [...prev.amenities, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        amenities: prev.amenities.filter(item => item !== value)
      }));
    }
  };

  const handleImageUpload = (e) => {
  const selected = Array.from(e.target.files).slice(0, 3); // Max 3
  setFormData(prev => ({
    ...prev,
    images: selected
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // TODO: Send to backend
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow mt-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Post a Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Room title" onChange={handleChange} required className="w-full p-2 border rounded" />
        
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required className="w-full p-2 border rounded" />
        
        <input type="number" name="price" placeholder="Monthly Price (UGX)" onChange={handleChange} required className="w-full p-2 border rounded" />
        
        <select name="type" onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Select Room Type</option>
          <option value="single">Single Room</option>
          <option value="self-contained">Self-Contained</option>
          <option value="family-home">Family</option>
        </select>

        <textarea name="description" placeholder="Describe the room..." rows={4} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>

        <fieldset className="border p-2 rounded">
          <legend className="font-semibold">Amenities</legend>
          <label><input type="checkbox" value="Wi-Fi" onChange={handleCheckbox} /> Wi-Fi</label><br />
          <label><input type="checkbox" value="Water" onChange={handleCheckbox} /> Water</label><br />
          <label><input type="checkbox" value="Electricity" onChange={handleCheckbox} /> Electricity</label><br />
          <label><input type="checkbox" value="Private Bathroom" onChange={handleCheckbox} /> Private Bathroom</label>
        </fieldset>

                                              {/* Image Upload Logic*/}
        <label className="block"> 
            <span className="text-gray-700">Upload up to 3 Images</span>
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="mt-1 block w-full border border-gray-300 rounded"
              />
        </label>

        {formData.images.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          {formData.images.map((img, i) => (
               <img 
                  key={i} 
                  src={URL.createObjectURL(img)} 
                  alt={`preview-${i}`} 
                  className="w-full h-24 object-cover rounded shadow"
                />
               ))}
            </div>
          )}



        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Submit Room
        </button>
      </form>
    </div>
  );
};

export default PostaRoom;
