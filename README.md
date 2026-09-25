<div align="center">

# Developer Wrapped

### *Your Year in Code — The Cinematic Spotify Wrapped for Developers*

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.x-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License MIT" />
</p>

<p align="center">
  <strong>Transform your GitHub and GitLab contributions into an immersive, Instagram Stories-style cinematic experience with ambient audio, coding auras, flow state analytics, and Spotify media insights. Hosted seamlessly on Vercel.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#slides">Slides</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#acknowledgements">Acknowledgements</a> •
  <a href="#developer">Developer</a> •
  <a href="#license">License</a>
</p>

---

</div>

## Features

| Feature | Description |
|---------|-------------|
| **Evergreen Engine** | Select and review any year dynamically |
| **Cinematic Experience** | 13 animated slides with Stories-style navigation |
| **Flow State Analytics** | Deep-work calculation measuring continuous coding blocks |
| **Audio Aura Visualizer** | Mesh gradient aura animated from language stack and coding temperament |
| **Top Tracks & Vinyl** | Repositories displayed as Billboard hits with spinning 3D vinyl record |
| **Ambient Soundscape** | Background lo-fi coding audio with instant volume controls |
| **Binge Coder & Spotify** | Connect Spotify to see your top soundtrack, paired with anime and movie insights |
| **Live GitHub & GitLab Data** | Real-time stats fetched from GitHub and GitLab APIs |
| **OAuth Authentication** | Login with GitHub, GitLab, or Spotify |
| **Theme Switching** | Seamless dark and light modes across all slides and controls |
| **Vibe Personas** | Archetypes detecting AI tooling, night coding, and stack breadth |
| **Velocity Charts** | Contribution velocity charts powered by Recharts |
| **Poster Export & Share** | Downloadable high-resolution poster with one-click social sharing |

---

## Slides

Experience your year through **13 cinematic slides**:

| # | Slide | What It Shows |
|---|-------|---------------|
| 1 | **Title** | Your username and avatar with dramatic reveal |
| 2 | **Velocity** | Animated area chart of daily commits |
| 3 | **Grid** | Full-year contribution heatmap |
| 4 | **Composition** | Breakdown: Commits vs PRs vs Issues vs Reviews |
| 5 | **Routine** | Your busiest day of the week |
| 6 | **Productivity** | Peak coding hours and time-of-day persona |
| 7 | **Community** | Followers, stars, and repository statistics |
| 8 | **Aura** | Dynamic mesh gradient visualizer with Flow State Minutes and Vibe Score |
| 9 | **Languages** | Top programming languages and polyglot breakdown |
| 10 | **Top Tracks** | Your repositories ranked and styled as music tracks |
| 11 | **Vinyl Record** | 3D spinning vinyl record spotlighting your Magnum Opus repository |
| 12 | **The Binge Coder** | What fueled your flow state: Spotify tracks, anime, and movies |
| 13 | **Poster** | Exportable festival poster with sharing controls |

---

## Archetypes

Based on your coding habits, commit timing, and stack, you will be assigned a persona:

| Archetype | Criteria |
|-----------|----------|
| **The Prompt Alchemist** | Heavy AI tooling, modern stack, polyglot workflow |
| **The Midnight Vibe Coder** | 60%+ activity late night between 11 PM and 4 AM |
| **The Lo-Fi Polyglot** | Smoothly orchestrating 4+ programming languages |
| **The Pull Request Pro** | High collaboration with over 20% of activity in PRs |
| **The Reviewer** | Frequent code reviewer |
| **The Weekend Warrior** | Over 35% commits pushed on weekends |
| **The Grid Painter** | 1200+ commits with consistent green squares |
| **The Consistent** | 400+ commits, steady daily contributor |
| **The Community Star** | High star and follower count across repositories |
| **The Tinkerer** | Curious explorer shipping across multiple experiments |

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/msrishav-28/developer-wrapped.git
cd developer-wrapped

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# (Optional) Add your GitHub, GitLab, or Spotify OAuth credentials

# Start development server
npm run dev
```

Open **http://localhost:3000** and enter any GitHub or GitLab username.

> **Tip:** Type `demo` to preview the full cinematic experience with mock data.

---

## Authentication

### OAuth Login (Optional)
Click **GitHub**, **GitLab**, or **Connect Spotify** on the home page for seamless authentication.

### Environment Variables (`.env.local`)
```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# GitHub OAuth (https://github.com/settings/developers)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# GitLab OAuth (https://gitlab.com/-/user_settings/applications)
GITLAB_CLIENT_ID=your-gitlab-client-id
GITLAB_CLIENT_SECRET=your-gitlab-client-secret

# Spotify Integration (Optional)
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your-spotify-client-id
```

---

## Controls

### On-Screen Controls
| Button | Effect |
|--------|--------|
| **Play / Pause** | Pause or resume slide timer |
| **Volume Toggle** | Mute or unmute ambient lo-fi audio |
| **Theme Toggle** | Switch between dark and light mode |
| **Close** | Exit story and return to homepage |
| **Share** | Open social sharing menu (Poster slide) |

### Navigation Controls
| Action | Effect |
|--------|--------|
| **Tap Right / Right Arrow / D** | Next slide |
| **Tap Left / Left Arrow / A** | Previous slide |
| **Hold Screen / Space** | Pause slide timer |
| **Escape** | Exit story |

---

## Project Structure

```
developer-wrapped/
├── app/
│   ├── api/auth/[...nextauth]/  # NextAuth API route
│   ├── layout.tsx               # Root layout with providers and metadata
│   ├── page.tsx                 # Main landing page with OAuth and Year picker
│   ├── globals.css              # Tailwind and custom animations
│   └── sitemap.ts               # Dynamic sitemap
├── components/
│   ├── StoryContainer.tsx       # Slide orchestrator, ambient audio and controls
│   ├── SlideLayout.tsx          # Theme-aware slide wrapper
│   └── slides/                  # 13 cinematic slide components
│       ├── AuraSlide.tsx        # Mesh gradient flow visualizer
│       ├── VinylSlide.tsx       # 3D spinning vinyl record
│       ├── TopTracksSlide.tsx   # Billboard-style repository list
│       ├── BingeSlide.tsx       # Spotify and media showcase
│       └── PosterSlide.tsx      # Exportable poster with Flow Minutes
├── context/
│   └── ThemeContext.tsx         # Dark and light theme context
├── lib/
│   └── auth.ts                  # NextAuth configuration
├── services/
│   ├── githubService.ts         # GitHub API integration and GraphQL
│   ├── gitlabService.ts         # GitLab API integration
│   ├── mediaService.ts          # Spotify and media integrations
│   └── scoringAlgorithms.ts     # Archetypes, Flow Minutes and Aura logic
├── types.ts                     # TypeScript data models
└── constants.ts                 # Mock data and fallback configurations
```

---

## Contributing

Contributions are warmly welcome. Developer Wrapped is an open community project and welcomes developers, designers, and creators from around the world.

Whether you want to:
- Design new cinematic slides or visualizer effects
- Expand Spotify, Apple Music, YouTube Music, or Last.fm integrations
- Integrate media trackers (MyAnimeList, Anilist, Trakt, Steam)
- Fine-tune Vibe Coder algorithms, flow metrics, and developer personas
- Add multi-language translations and accessibility features
- Fix bugs or optimize performance

Check out our [Contributing Guidelines](CONTRIBUTING.md) to get started.

### Quick Contribution Steps

1. **Fork the repository** on GitHub.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/developer-wrapped.git
   cd developer-wrapped
   ```
3. **Create your feature branch**:
   ```bash
   git checkout -b feat/my-new-slide
   ```
4. **Make your changes, commit, and push**:
   ```bash
   git push origin feat/my-new-slide
   ```
5. **Open a Pull Request** and share your creation with the community.

---

## Contributors

A huge thank you to everyone who helps make Developer Wrapped an extraordinary celebration of code:

<p align="center">
  <a href="https://github.com/msrishav-28/developer-wrapped/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=msrishav-28/developer-wrapped" alt="Developer Wrapped Contributors" />
  </a>
</p>

All contributors are welcome to submit pull requests and join the community.

---

## Acknowledgements & Prior Work

This project builds upon the foundational concept of **GitStory (2025)** originally created by **[Pankaj Kumar](https://github.com/PankajKumardev)**:
- Original Repository: [https://github.com/PankajKumardev/gitstory-2025](https://github.com/PankajKumardev/gitstory-2025)
- Original Creator: [Pankaj Kumar](https://github.com/PankajKumardev)

We express our sincere appreciation and due credit to Pankaj Kumar for pioneering the original concept.

---

## Lead Developer & Maintainer

Maintained and evolved by **M S Rishav Subhin**.

### Official Digital Links & Profiles
- **Website:** https://portfolio-msrishav.vercel.app/
- **GitHub:** https://github.com/msrishav-28
- **LinkedIn:** https://linkedin.com/in/m-s-rishav-subhin
- **X (Twitter):** https://x.com/msrishav_28

---

## License

This project is licensed under the **MIT License** — free and open for the entire developer community. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built for developers who ship.**

*Star this repository if you find it inspiring.*

[GitHub Repository](https://github.com/msrishav-28/developer-wrapped)

</div>
