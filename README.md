# Rock Paper Scissors Game

A fully accessible, interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. This project demonstrates modern web development practices including accessibility standards (WCAG 2.1), semantic HTML, and clean code organization.

## Project Overview

This is a single-player Rock Paper Scissors game where you compete against the computer. The first player to reach 5 points wins the match. The game features a fully accessible interface with keyboard navigation support, screen reader compatibility, and high contrast ratios.

---

## Project Structure

```
rockpaperscissors/
├── public/
│   ├── index.html            # Main HTML file
│   ├── css/
│   │   └── style.css         # Custom styling and accessibility features
│   └── js/
│       └── script.js         # Game logic and interactivity
├── README.md                 # This file
└── ACCESSIBILITY_AUDIT.md    # Detailed accessibility audit report
```

### Folder Organization

- **public/**: All files served to the browser
- **public/css/**: Custom stylesheet (dark mode, reduced motion, high contrast, print)
- **public/js/**: Game logic and event handling

---

## Step-by-Step Development Process

### Step 1: Project Initialization
- Created `css/` and `js/` folders for organized file structure
- Moved `script.js` into the `js/` folder
- Created `index.html` with HTML5 boilerplate
- Added proper meta tags (charset, viewport for responsive design)

### Step 2: HTML Structure
**File**: `index.html`

#### Core Elements Added:
- **H1 Heading**: "Rock, Paper, Scissors" - main page title
- **Score Display**: Two separate spans (`#score-player`, `#score-computer`) updated live by JavaScript
- **Fieldset + Legend**: Groups the three choice buttons semantically for assistive technologies
- **Three Game Buttons**:
  - `#btn-rock` - Choose rock (blue)
  - `#btn-paper` - Choose paper (green)
  - `#btn-scissors` - Choose scissors (red)
- **Round Result**: `<div id="round-result">` — visible text showing each round's outcome
- **Screen Reader Region**: `<div id="game-result" aria-live="polite" class="sr-only">` — separate announcement region for screen readers, keeping visual and spoken output independent
- **Reset Button**: `#btn-reset` hidden via Tailwind `hidden` class, revealed on game over

#### Accessibility Features:
- `<fieldset>` and `<legend class="sr-only">` group choice buttons for screen readers
- Dual result regions: visible `#round-result` for sighted users, sr-only `#game-result` for screen readers
- `aria-live="polite"` on the sr-only region announces results without interrupting
- Tailwind CSS utility classes provide focus rings (`focus:ring-4`) on all buttons
- Semantic `<main>` landmark wraps all game content

### Step 3: JavaScript - Game Logic
**File**: `js/script.js`

#### Core Functions:

**1. `playRound(playerSelection, computerSelection)`**
- Compares player choice with computer choice
- Returns a result string used both for display and score tracking via `startsWith`

**2. `getComputerChoice()`**
- Returns a random choice (rock, paper, or scissors) using `Math.random()`

**3. `handleClick(playerSelection)`**
- Called on every button click
- Gets computer's choice, plays the round, updates score, and checks for a match winner (first to 5)
- Shows reset button and locks choice buttons when match ends

**4. `disableButtons()`**
- Disables all three choice buttons after the match ends

**5. `resetGame()`**
- Resets scores to 0, clears the results display, re-enables buttons, and hides the reset button

#### Event Listeners:
```javascript
rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
resetBtn.addEventListener("click", resetGame);
```

### Step 4: CSS Styling & Accessibility
**Files**: `css/style.css` (custom) + Tailwind CSS CDN (utility classes)

#### Layout & Typography:
- Tailwind utility classes handle layout, spacing, colors, and typography directly in HTML
- `css/style.css` handles features that Tailwind doesn't cover out of the box

#### Button Styling (Tailwind):
- Rock: Blue (`bg-blue-600`) with hover and focus ring
- Paper: Green (`bg-green-600`) with hover and focus ring
- Scissors: Red (`bg-red-600`) with hover and focus ring
- All buttons use `focus:ring-4 focus:ring-offset-2` for visible keyboard focus

#### Custom CSS Accessibility Features:

**1. Dark Mode** (`prefers-color-scheme: dark`):
- Inverted background and text colors for body and results
- H1 set to `#ffffff` for full contrast
- Results div explicitly colored (`#e0e0e0`) to prevent inherited light-mode text
- Game-over state uses `#a3d9a5` (accessible green)

**2. Reduced Motion** (`prefers-reduced-motion: reduce`):
- Disables all transitions and animations for users with vestibular disorders

**3. High Contrast Mode** (`prefers-contrast: more`):
- Strengthens button borders and focus outlines

**4. Print Styles**:
- Optimized output for printing

### Step 5: Accessibility Audit
**File**: `ACCESSIBILITY_AUDIT.md`

#### Issues Identified & Fixed:

**✅ Fixed Issues:**
1. ✅ Added focus outlines for keyboard navigation
2. ✅ Added `aria-live` for dynamic content updates
3. ✅ Added visible instructions text
4. ✅ Verified contrast ratios (all WCAG AA compliant)
5. ✅ Ensured semantic HTML structure

**Testing Recommendations:**
- Keyboard navigation (Tab, Shift+Tab, Enter, Space)
- Screen reader testing with NVDA or JAWS
- Color contrast verification
- Browser compatibility

### Step 6: Version Control & GitHub Deployment

#### Git Setup:
```bash
git init                    # Initialize repository
git config user.name "Allison Clark"
git config user.email "allieclarkdev@gmail.com"
git add .                   # Stage all files
git commit -m "Initial commit: Rock Paper Scissors game with accessibility features"
```

#### GitHub Deployment:
```bash
git remote add origin https://github.com/REILANA/rockpaperscissors.git
git branch -M main          # Rename master to main
git push -u origin main     # Push to GitHub
```

**Repository**: https://github.com/REILANA/rockpaperscissors

---

## Features

### Game Features
- ✅ Interactive single-player gameplay
- ✅ Score tracking (first to 5 wins)
- ✅ Real-time result display
- ✅ Game reset functionality
- ✅ Button disable during game over

### Accessibility Features
- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigation support (Tab, Enter, Space)
- ✅ Screen reader compatible (aria-labels, aria-live)
- ✅ High contrast ratios (5.5:1 to 15:1)
- ✅ Focus indicators for keyboard users
- ✅ Semantic HTML structure
- ✅ Responsive mobile design

### Technical Features
- ✅ Clean, organized code structure
- ✅ Modular JavaScript functions
- ✅ Custom CSS with accessibility standards
- ✅ Tailwind CSS for utility-first styling
- ✅ Version control with Git
- ✅ GitHub deployment

---

## How to Use

### Playing the Game:
1. **Open** `index.html` in a web browser
2. **Click** one of three buttons: Rock, Paper, or Scissors
3. **View** the round result below the buttons and the live score at the top
4. **Continue** playing until someone reaches 5 wins
5. **Click** "Play Again" to reset and start a new match

### Keyboard Navigation:
1. Press **Tab** to move between buttons
2. Press **Enter** or **Space** to select a choice
3. Use **Tab** to navigate to "Reset Game" button when game ends
4. Press **Enter** to reset and play again

---

## Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, accessibility, responsive design
- **JavaScript (ES6)**: Game logic, event handling, DOM manipulation
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Git**: Version control
- **GitHub**: Code repository and deployment

---

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Accessibility Standards

This project meets **WCAG 2.1 Level AA** standards:

### Perceivable
- ✅ Sufficient color contrast ratios
- ✅ Large, readable text
- ✅ Clear visual hierarchy

### Operable
- ✅ Keyboard accessible
- ✅ Focus indicators visible
- ✅ All functionality available via keyboard

### Understandable
- ✅ Clear, simple language
- ✅ Aria labels for buttons
- ✅ Visible instructions
- ✅ Predictable behavior

### Robust
- ✅ Valid HTML5
- ✅ Compatible with assistive technologies
- ✅ Semantic structure

---

## Future Enhancements

Potential improvements for future versions:
- Add difficulty levels (easy, medium, hard)
- Implement best-of-3 or best-of-7 options
- Add animation effects for choices
- Create statistics/history tracking
- Add sound effects and music
- Implement multiplayer mode
- Create a leaderboard

---

## Credits

**Developer**: Allison Clark  
**GitHub**: [@REILANA](https://github.com/REILANA)  
**Portfolio**: [allie.me](https://allie.me)  
**Email**: allieclarkdev@gmail.com

---

## License

This project is open source and available under the MIT License.

---

## Contact

For questions, feedback, or suggestions:
- 📧 Email: [allieclarkdev@gmail.com](mailto:allieclarkdev@gmail.com)
- 🌐 Portfolio: [allie.me](https://allie.me)
- 💻 GitHub: [@REILANA](https://github.com/REILANA)

---

## Project Completion Date

**Started**: January 26, 2026  
**Completed**: January 28, 2026  
**Status**: ✅ Complete and Deployed

---

**Thank you for playing Rock Paper Scissors! Enjoy the game!** 🎮
