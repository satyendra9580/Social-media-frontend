# Frontend Project - User Submission Form and Admin Dashboard

## Features Overview

### User Submission Form
- A form where users can:
  - Input their name.
  - Input their social media handle.
  - Select multiple images for upload using a file input that allows multiple selections.
- The form will submit the data to the database when the user clicks a "Submit" button.

### Admin Dashboard
- A dashboard UI that fetches and displays the list of user submissions from the database.
- For each user, the dashboard displays:
  - Name
  - Social media handle
  - Uploaded images (rendered as thumbnails or clickable links).
- The dashboard updates dynamically when new submissions are made.

## Getting Started

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Ensure you have [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) installed.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2. Install the required dependencies:
   ```sh
   npm install
   # or
   yarn install
3. Start the development server:
    ```sh
   npm run dev
   # or
   yarn run dev

## Technologies Used  

1. ReactJS
2. Axios (for making HTTP requests)
3. Tailwind CSS/Styled Components (for styling)
4. [Any other relevant libraries]


# Contact

For any questions or inquiries, please contact seenu5180singh@gmail.com

#

![Screenshot from 2025-01-28 00-15-31](https://github.com/user-attachments/assets/802dfcf5-cdb4-4877-ae84-750d75f490f8)
# 
![Screenshot from 2025-01-28 00-15-55](https://github.com/user-attachments/assets/37971be6-46c7-4169-9557-6f77c854d3b2)


## Folder Structure   
```plaintext
       your-repo/
    ├── public/
    │   ├── index.html
    │   └── ...
    ├── src/
    │   ├── components/
    │   │   ├── UserForm.js
    │   │   ├── AdminDashboard.js
    │   │   └── ...
    │   ├── App.js
    │   ├── index.js
    │   └── ...
    ├── package.json
    └── ...
