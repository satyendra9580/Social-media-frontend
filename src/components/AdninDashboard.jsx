import React, { useEffect, useState } from 'react';
import axios from 'axios';

const socialMediaLogos = {
  Instagram: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
  Twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  LinkedIn: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
  Facebook: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
};

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div key={user._id} className="mb-6 p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <div className="space-y-2">
              {user.socialMediaHandles && user.socialMediaHandles.map((handle, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {typeof socialMediaLogos[handle.platform] === 'string' ? (
                    <img
                      src={socialMediaLogos[handle.platform]}
                      alt={handle.platform}
                      className="w-6 h-6"
                    />
                  ) : (
                    socialMediaLogos[handle.platform] // Render inline SVG
                  )}
                  <a
                    href={handle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {handle.handle}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap mt-2">
              {user.images && user.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:3000/uploads/${image}`}
                  alt={`Uploaded by ${user.name}`}
                  className="w-24 h-24 object-cover m-1"
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;