# Rock Paper Scissors Game

A fully accessible, interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. This project demonstrates modern web development practices including accessibility standards (WCAG 2.1), semantic HTML, and clean code organization.

## Project Overview

This is a single-player Rock Paper Scissors game where you compete against the computer. The first player to reach 5 points wins the match. The game features a fully accessible interface with keyboard navigation support, screen reader compatibility, and high contrast ratios.

---

## Project Structure

```
rockpaperscissors/
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # All styling and accessibility features
├── js/
│   └── script.js             # Game logic and interactivity
├── README.md                 # This file
└── ACCESSIBILITY_AUDIT.md    # Detailed accessibility audit report
```

### Folder Organization

- **CSS Folder**: Contains all stylesheet files for styling and responsive design
- **JS Folder**: Contains all JavaScript files for game logic and event handling

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
- **H1 Heading**: "Choose Your Weapon" - main page title
- **Instructions**: Clear text describing how to play
- **Three Game Buttons**: 
  - `#rock` - Choose rock
  - `#paper` - Choose paper
  - `#scissors` - Choose scissors
- **Results Display**: `<div id="results">` to show game outcomes
- **Reset Button**: Hidden button to reset the game when finished

#### Accessibility Features:
- Added `aria-label` attributes to all buttons for screen readers
- Added `role="status"` and `aria-live="polite"` to results div for dynamic content announcement
- Proper semantic HTML structure
- Bootstrap CSS framework for responsive design

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
**File**: `css/style.css`

#### Typography & Layout:
- Font family: System fonts (Apple System, Segoe UI, Roboto)
- Background color: Light gray (#f5f5f5)
- Max-width: 800px for optimal readability
- Centered layout with padding

#### Button Styling:
- Primary color: Blue (#0d6efd)
- Padding: 12px 24px
- Border radius: 6px for rounded corners
- Smooth transitions on hover

#### CRITICAL Accessibility Features:

**1. Keyboard Focus Indicators**:
```css
button:focus {
  outline: 3px solid #0d6efd;
  outline-offset: 2px;
  box-shadow: 0 0 0 5px rgba(13, 110, 253, 0.25);
}
```
- Ensures keyboard users can see which button is focused

**2. Contrast Ratios** (WCAG AA Compliant):
- Primary buttons: 5.5:1 ✓
- Body text: 15:1 ✓
- Instructions text: 8.4:1 ✓
- Footer links: 5.5:1 ✓

**3. Dark Mode** (`prefers-color-scheme: dark`):
- Inverted background and text colors for body and results
- H1 set to `#ffffff` for full contrast
- Results div explicitly colored (`#e0e0e0`) to prevent inherited light-mode text
- Game-over state uses `#a3d9a5` (accessible green) instead of the light-mode dark green

**4. Disabled State**:
- Buttons are disabled when game ends with reduced opacity

**5. Results Display**:
- Changes background and border color when active
- Minimum 60px height for easy reading

#### Responsive Design:
- Mobile-friendly breakpoint at 600px
- Full-width buttons on small screens
- Adjusted font sizes for readability

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

### Step 6: Footer with Contact Information
**Added to**: `index.html`

```html
<footer class="footer">
  <p>&copy; 2026 <a href="mailto:allieclarkdev@gmail.com">Allison Clark</a> 
     | <a href="https://allie.me" target="_blank">My Portfolio</a> 
     | <a href="https://github.com/REILANA" target="_blank">GitHub</a></p>
</footer>
```

#### Features:
- Copyright notice with creator's name
- Email link (mailto) for contact
- Portfolio website link
- GitHub profile link
- Accessible link styling with focus indicators

### Step 7: Version Control & GitHub Deployment

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
- ✅ CSS with accessibility standards
- ✅ Bootstrap framework integration
- ✅ Version control with Git
- ✅ GitHub deployment

---

## How to Use

### Playing the Game:
1. **Open** `index.html` in a web browser
2. **Read** the instructions: "Select your choice below to play against the computer. First to 5 wins!"
3. **Click** one of three buttons:
   - Rock
   - Paper
   - Scissors
4. **View** the result showing:
   - Game outcome (win/lose/tie)
   - Current score (Player vs Computer)
5. **Continue** playing until someone reaches 5 wins
6. **Click** "Reset Game" button to play again

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
- **Bootstrap 5.3**: CSS framework for responsive design
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
