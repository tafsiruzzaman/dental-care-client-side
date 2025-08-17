# Dental Care Web App

A professional single-page dental clinic application for browsing services, booking appointments, and managing user interactions. Built with a scalable React architecture and powered by Firebase.

## Live Demo

- [Live Site Link](https://dental-care-tj.web.app/)

## Features

- User authentication (Google, Github, Email/Password)
- Browse dental services and details
- Book appointments with doctors
- Responsive design
- Custom hooks for authentication and data flow
- Modular, reusable components
- Contact form for direct inquiries

## Folder Structure

```
dental-care-client-side/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── Firebase/
│   │   └── firebase.initialize.js
│   ├── contexts/
│   │   └── AuthProvider.js        
│   ├── hooks/
│   │   ├── useFirebase.js       
│   │   └── useAuth.js           
│   ├── pages/
│   │   ├── About/
│   │   │   └── About/
│   │   │       └── About.js
│   │   ├── Appointment/
│   │   │   └── Appointment.js
│   │   ├── Contact/
│   │   │   └── Contact.js
│   │   ├── Conformation/
│   │   │   └── Conformation.js
│   │   ├── Home/
│   │   │   ├── Home/
│   │   │   │   └── Home.js
│   │   │   ├── Facility/
│   │   │   │   └── Facility.js
│   │   │   ├── Middle/
│   │   │   │   └── Middle.js
│   │   │   └── Doctors/
│   │   │       └── Doctors/
│   │   │           └── Doctors.js
│   │   ├── NotFound/
│   │   │   └── NotFound.js
│   │   ├── Registration/
│   │   │   └── SignIn/
│   │   │       └── SignIn.js
│   │   ├── ServiceDetails/
│   │   │   └── ServiceDetails.js
│   │   ├── Services/
│   │   │   └── Services/
│   │   │       └── Services.js
│   │   ├── Shared/
│   │   │   ├── Footer/
│   │   │   │   └── Footer.js
│   │   │   └── Header/
│   │   │       └── Header.js
│   │   └── ThankYou/
│   │       └── ThankYou.js
│   ├── PrivateRoutes/
│   │   ├── GeneralRoute/
│   │   │   └── GeneralRoute.js
│   │   └── RegistrationRoute/
│   │       └── RegistrationRoute.js
│   └── images/
│       └── (all image assets)
└── package.json
```

### Key Points

- **Custom Hooks:** All authentication (login, registration, state) is handled via `useFirebase` and made globally accessible with `AuthProvider` and `useAuth`. This enables a clean, maintainable data flow for user state across the app.
- **Modular Components:** UI is split into focused, reusable components (Header, Footer, Facility, Doctors, etc.).
- **Routing:** Client-side routing with React Router for seamless navigation between pages.
- **Responsive Design:** Uses React Bootstrap for layout and styling to ensure mobile-friendly views.
- **Separation of Concerns:** Pages, hooks, contexts, and assets are organized for scalability and clarity.

## Main Technologies

[![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase Badge](https://img.shields.io/badge/Firebase-FFCB2B?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![React Router Badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Git Badge](https://img.shields.io/badge/git-f34f29?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![Yarn Badge](https://img.shields.io/badge/yarn-0078D6?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![Vs Code Badge](https://img.shields.io/badge/Visual_Studio_Code-0078D6?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/tafsiruzzaman/dental-care-client-side.git
   ```
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
3. Start the development server:
   ```bash
   yarn start
   # or
   npm start
   ```

## 💻 Developed By

![Developer PIC](https://avatars.githubusercontent.com/u/86625968?s=40&v=4)

## 🚀 Connect with me

[![Facebook Badge](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/tafsiruzzaman.me)
[![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/tafsiruzzaman.me)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tafsiruzzaman/)
[![Mail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:tafsirjaman100@gmail.com)
