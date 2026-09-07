# Circle-X ⭕❌

A Tic-Tac-Toe (עיגול-איקס) game built with React, TypeScript, and Vite. Players pick their symbol (X or O) from a keyboard-style selector, play on a 3x3 board, and get a confetti celebration when the game ends.

## Features

- Player symbol selection screen before the game starts
- Interactive 3x3 game board
- Win/draw detection
- Confetti animation on win (via `canvas-confetti`)

## Project Structure

```
src/
├── components/
│   ├── game/       # Main game board & win logic
│   ├── keyBoard/    # Start screen / symbol selection
│   ├── square/       # Individual board cell
│   ├── char/          # X/O character rendering
│   └── show/          # Result display
├── models/
│   └── charModel.ts  # Type definitions for the game symbols
└── App.tsx            # Root component, toggles between start screen and game
```

## Getting Started

### Prerequisites
- Node.js (LTS recommended)

### Installation

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Sass (SCSS modules per component)
- ESLint
