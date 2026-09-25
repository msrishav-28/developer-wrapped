# Contributing to Developer Wrapped

Thank you for considering contributing to **Developer Wrapped**. Developer Wrapped is an open community project, and contributions from developers, designers, and creators worldwide make it better for everyone.

Whether you want to add a new slide, tune vibe algorithms, integrate new music or streaming platforms, fix a bug, or improve documentation, every contribution is welcome.

---

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for everyone, regardless of experience level, gender identity, background, or tech stack. Please treat everyone with respect and empathy.

---

## Getting Started

### 1. Prerequisites
- **Node.js** (v18.18.0 or newer)
- **npm**, **pnpm**, or **yarn**
- A **GitHub** or **GitLab** account for testing authentication

### 2. Fork and Clone
1. Fork the repository on GitHub: [msrishav-28/developer-wrapped](https://github.com/msrishav-28/developer-wrapped)
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/developer-wrapped.git
   cd developer-wrapped
   ```

### 3. Setup Environment
1. Copy the example environment variables:
   ```bash
   cp .env.example .env.local
   ```
2. (Optional) Provide GitHub, GitLab, or Spotify OAuth credentials if testing live authentication, or test with mock data by entering `demo` as the username.

### 4. Install and Run
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Ways to Contribute

We welcome contributions across all areas:

### 1. New Slides and Visualizations
- Have an idea for a slide?
- Add new slide components under `components/slides/`
- Register the slide in `types.ts` (`SlideType`) and render it in `components/StoryContainer.tsx`

### 2. Extensibility and Integrations
- Music and Podcasts: Enhance Spotify integration, add Apple Music, YouTube Music, or Last.fm.
- Media and Hobbies: Expand anime, movie, or gaming tracking (MyAnimeList, Anilist, Trakt, Steam).
- Code Platforms: Add Bitbucket, Gitea, or custom Git host support.

### 3. Vibe Coding and Scoring Algorithms
- Refine heuristics in `services/scoringAlgorithms.ts`
- Detect new developer archetypes, flow metrics, and AI-assisted workflows
- Language-specific color palettes and aura generators

### 4. Mobile and UX Polish
- Micro-interactions, gestures, and audio responsiveness
- Accessibility (a11y) improvements
- Dark and light mode refinements

---

## Pull Request Process

1. **Create a branch**:
   ```bash
   git checkout -b feat/my-new-feature
   # or
   git checkout -b fix/issue-description
   ```
2. **Make your changes**: Keep commits descriptive and atomic.
3. **Verify the build**:
   ```bash
   npm run build
   ```
   Ensure TypeScript checks and Next.js compilation pass without errors.
4. **Push your branch**:
   ```bash
   git push origin feat/my-new-feature
   ```
5. **Open a Pull Request**:
   - Provide a clear title and description explaining what was added or changed.
   - Attach screenshots or recordings for visual changes.

---

## Contributors

All contributors will be featured in our README and celebrated across the community.

Thank you for building the future of Developer Wrapped.
