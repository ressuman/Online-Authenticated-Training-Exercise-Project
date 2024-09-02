# Training Exercise App

## Overview

The **Training Exercise App** is a web application that provides users with access to an extensive catalog of training exercises. The app offers a personalized experience where users can become members, browse various training models, and manage their profiles securely. This application is built using Next.js with a focus on authentication, database management, and an engaging user interface.

## Features

- **User Authentication**: Secure sign-up, login, and logout functionality.
- **Training Catalog**: Explore a wide range of training exercises across different categories.
- **User Management**: Profile management features for registered users.
- **Optimized UI**: Responsive design with a user-friendly interface.
- **Database Integration**: Efficient handling of user data and training content.

## Folder Structure

```
└── 📁actions
    └── 📁auth
        └── auth-actions.js

└── 📁app
    └── 📁(auth)
        └── 📁training
            └── page.js
        └── layout.js
    └── globals.css
    └── icon.png
    └── layout.js
    └── page.js

└── 📁components
    └── 📁auth
        └── auth-form.js

└── 📁lib
    └── 📁auth
        └── auth.js
    └── 📁database
        └── db.js
    └── 📁hash
        └── hash.js
    └── 📁training
        └── training.js
    └── 📁user
        └── user.js

└── 📁public
    └── 📁images
        └── auth-icon.jpg
    └── 📁trainings
        └── boxing.jpg
        └── cycling.jpg
        └── gaming.jpg
        └── running.jpg
        └── sailing.jpg
        └── weightlifting.jpg
        └── yoga.jpg

node_modules
.eslintrc.json
.gitignore
jsconfig.json
next.config.mjs
package-lock.json
package.json
README.md
training.db
```

### Key Directories and Files

- **actions/auth/auth-actions.js**: Contains server-side logic for handling authentication actions such as logging in and logging out.
- **app/**: Contains the main application structure, including layouts, global styles, and pages.
  - **(auth)/training/page.js**: Training exercises available after authentication.
  - **layout.js**: Root layout for authenticated and non-authenticated pages.
  - **globals.css**: Global CSS styles for the application.
- **components/auth/auth-form.js**: A reusable component for user authentication forms (login, signup).

- **lib/**: Library of utility functions and logic.

  - **auth.js**: Authentication logic including sign-up, login, and logout.
  - **database/db.js**: Handles interactions with the SQLite database.
  - **hash.js**: Password hashing and validation utilities.
  - **training.js**: Manages training exercise data and operations.
  - **user.js**: Manages user data and operations.

- **public/**: Contains publicly accessible assets such as images used in authentication and training exercises.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/training-exercise-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd training-exercise-app
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up the environment variables:**

   - Create a `.env.local` file in the root of your project.
   - Add necessary environment variables for authentication and database connections.

5. **Run the development server:**

   ```bash
   npm run dev
   ```

6. **Open the app in your browser:**
   - Visit `http://localhost:3000` to see the application in action.

## Usage

- **Sign Up/Login**: Use the authentication forms to create an account or log in.
- **Explore Training Catalog**: Browse through various training exercises.
- **Manage Profile**: Access your user profile to update information or log out.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **SQLite**: Lightweight database for storing user data and training content.
- **CSS**: Styling for responsive and clean UI design.
- **Node.js**: Server-side JavaScript runtime.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Gif

Here is an expected gif of the preview of the App(Training Exercise App)

## ![Training Exercise App gif](./public/feed-posts.gif)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
