# AI Fitness Coach — Next.js Starter (Ready to submit)

This repository is a minimal, production-oriented starter for the **AI Fitness Coach** assignment built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

It includes:
- A clean input form to collect user details.
- Server API route (`/api/generate`) that calls OpenAI to generate a personalized plan in JSON.
- Plan display with simple animations.
- Export-friendly structure so you can zip and submit.

## How to run (VS Code / Local)

1. **Install** dependencies:
```bash
npm install
```

2. **Create a `.env.local`** in project root with:
```
OPENAI_API_KEY=sk-...
```

3. **Run development server:**
```bash
npm run dev
# open http://localhost:3000
```

4. **Build for production:**
```bash
npm run build
npm start
```

## Files of interest
- `pages/index.js` — Frontend form & UI.
- `pages/api/generate.js` — Server-side API that calls OpenAI.
- `.env.example` — Example environment variables.

## Notes for submission
- Add your OpenAI key before demo. If you want to exclude keys from submission, provide `.env.example` only.
- You can record a short demo video (1–2 min) showing plan generation, voice (optional), and image modal (if added).

Good luck — @jiten54
