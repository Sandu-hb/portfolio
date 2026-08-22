

# Sanduni Bandara — Personal Portfolio

A modern, responsive personal portfolio website built to showcase my academic journey, technical skills, projects, articles, and experience as an Information Technology undergraduate at the University of Moratuwa.

The portfolio is built using React, TypeScript, Tailwind CSS, and Vite, with a modern dark-themed interface, responsive layouts, interactive animations, and EmailJS integration for the contact form.

## What's in this project

* **Framework / Library**: React 19
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4
* **Build Tool**: Vite
* **Icons**: Lucide React & Devicon
* **Email Service**: EmailJS
* **Linting**: ESLint

## Features

* Responsive personal portfolio interface
* Hero section introducing my profile
* About section
* Educational and career journey timeline
* Technical skills and technology showcase
* Animated technology marquee
* Featured projects section
* Project details with GitHub and live-demo links
* Technical articles and blog section
* Interactive statistics
* Contact form with EmailJS integration
* Responsive navigation and footer
* Dark glassmorphism-inspired UI
* Smooth animations and micro-interactions

## Prerequisites

Make sure you have **Node.js 18+** and **npm** installed.

Verify your installation:

```bash
node -v
npm -v
```

## Install

Clone the repository:

```bash
git clone https://github.com/Sandu-hb/portfolio.git
```

Navigate to the project directory:

```bash
cd portfolio/myportfolio
```

Install the required dependencies:

```bash
npm install
```

## Available Scripts

All scripts are defined in `package.json`.

| Script            | Description                                  |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Start the development server                 |
| `npm run build`   | Build the application for production         |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint and check for code quality issues |

### Running in Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

The contact form uses **EmailJS** to send messages directly from the portfolio.

Create a `.env` file in the `myportfolio` project directory and add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### Environment Variable Description

| Variable                   | Description                       |
| :------------------------- | :-------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service identifier        |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS email template identifier |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key                |

> **Note:** Do not commit your `.env` file containing your actual configuration values. Add `.env` to `.gitignore` and use an `.env.example` file to document the required variables.

## Project Structure

```text
portfolio/
│
├── myportfolio/
│   │
│   ├── public/
│   │   └── assets/              # Images and static assets
│   │
│   ├── src/
│   │   │
│   │   ├── components/          # Reusable UI components
│   │   │
│   │   ├── layout/              # Navbar and Footer
│   │   │
│   │   ├── sections/             # Main portfolio sections
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── About.tsx        # About section
│   │   │   ├── experience.tsx   # Educational journey
│   │   │   ├── TechStack.tsx    # Technical skills
│   │   │   ├── project.tsx      # Featured projects
│   │   │   ├── Blogs.tsx        # Articles and blogs
│   │   │   └── contact.tsx      # Contact section
│   │   │
│   │   ├── App.tsx              # Main application component
│   │   ├── index.css            # Global styles and animations
│   │   └── main.tsx             # Application entry point
│   │
│   ├── .env.example             # Environment variable template
│   ├── package.json              # Project dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   └── vite.config.ts             # Vite configuration
│
└── README.md
```


