# Task Manager

This is a nice Task Manager (made in the big 2026😭). PS. I just wanted to build out a quick Web project with Node.js, HTML,and Vanilla JS with the DOM to try out using Codex to fully design the html file using TailwindCSS

![Demo screenshot](/public/Image/demo.png)

## Setup

1. Create a folder named `TaskTracker` and run:
   ```bash
   npm init -y
   ```
2. Inside `TaskTracker`, create two folders: `public` and `server`.
3. In `server`, create `index.js`.
4. In `public`, create `index.html` and a `style` folder.
5. Install Tailwind:
   ```bash
   npm install tailwindcss @tailwindcss/cli express
   ```
6. Add `@import "tailwindcss";` to your main CSS file at `public/style/styles.css`.
7. Start Tailwind in watch mode:
   ```bash
   npx @tailwindcss/cli -i ./public/style/styles.css -o ./public/style/output.css --watch
   ```
8. Run the backend:
   ```bash
   node index.js
   ```
