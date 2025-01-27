import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialMediaHandles, setSocialMediaHandles] = useState([
    { platform: 'Instagram', handle: '', link: '' },
  ]);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSocialMediaChange = (index, field, value) => {
    const updatedHandles = [...socialMediaHandles];
    updatedHandles[index][field] = value;
    setSocialMediaHandles(updatedHandles);
  };

  const addSocialMediaHandle = () => {
    setSocialMediaHandles([...socialMediaHandles, { platform: 'Instagram', handle: '', link: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMediaHandles', JSON.stringify(socialMediaHandles));
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post('http://localhost:3000/api/submit', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Submission Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {socialMediaHandles.map((handle, index) => (
          <div key={index} className="space-y-2">
            <div>
              <label className="block text-sm font-medium">Social Media Platform:</label>
              <select
                value={handle.platform}
                onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              >
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Social Media Handle:</label>
              <input
                type="text"
                value={handle.handle}
                onChange={(e) => handleSocialMediaChange(index, 'handle', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Social Media Link:</label>
              <input
                type="url"
                value={handle.link}
                onChange={(e) => handleSocialMediaChange(index, 'link', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addSocialMediaHandle}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Another Social Media Handle
        </button>

        <div>
          <label className="block text-sm font-medium">Upload Images:</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages([...e.target.files])}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default UserForm;