# Prettier Setup & Code Formatting Guide

## Overview

This project uses **Prettier** for automatic code formatting and **ESLint** integration to ensure all code follows consistent style guidelines. When developers create files or make changes, they must follow the project's formatting standards, or they will receive errors during the commit process.

## 📋 What's Installed

- **Prettier** (`^3.8.1`) - Code formatter
- **ESLint Prettier Plugin** (`^5.5.5`) - Integration between ESLint and Prettier
- **ESLint Config Prettier** (`^10.1.8`) - Disables ESLint rules that conflict with Prettier
- **Husky** (`^9.1.7`) - Git hooks manager
- **Lint-staged** (`^16.2.7`) - Runs linters on staged files only

## ⚙️ Configuration Files

### `.prettierrc`
Contains Prettier formatting rules:
```json
{
  "semi": true,                  // Add semicolons
  "trailingComma": "es5",        // Trailing commas in ES5-compatible syntax
  "singleQuote": true,           // Use single quotes
  "printWidth": 80,              // Line width
  "tabWidth": 2,                 // Indentation size
  "useTabs": false,              // Use spaces, not tabs
  "arrowParens": "always",       // Always add parens around arrow function params
  "bracketSpacing": true,        // Space inside object braces
  "bracketSameLine": false,      // Put closing bracket on new line
  "jsxSingleQuote": false,       // Use double quotes in JSX
  "endOfLine": "lf"              // Use LF for line endings
}
```

### `.prettierignore`
Files and directories to exclude from formatting:
- `node_modules/`, `.next/`, `dist/`
- Build outputs
- Package files
- IDE configs
- Documentation files

### `.eslintrc.json`
ESLint configuration with Prettier integration:
```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

**Key Feature**: `"prettier/prettier": "error"` - Any formatting issue shows as an error

### `.husky/pre-commit`
Git hook that runs before each commit:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

This ensures only formatted code is committed.

### `package.json` - Lint-staged Configuration
```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint --fix"
  ],
  "src/**/*.{json,css,md}": [
    "prettier --write"
  ]
}
```

## 🎯 How It Works

### For Developers

1. **Make changes** to files in `src/`
2. **Stage files** with `git add .`
3. **Commit** with `git commit -m "message"`
4. **Pre-commit hook triggers**:
   - `lint-staged` runs on staged files only
   - Prettier formats the code
   - ESLint fixes any issues
   - If formatting succeeds → commit proceeds
   - If formatting fails → commit blocks with error message

### Example Flow

```
Developer edits src/components/MyComponent.tsx
                         ↓
            File has formatting issues
                         ↓
         git commit -m "Add MyComponent"
                         ↓
        Pre-commit hook runs (git hook)
                         ↓
      lint-staged checks staged files
                         ↓
  Prettier tries to auto-fix formatting
                         ↓
     If successful: ✅ Commit proceeds
     If failed: ❌ Commit blocked with error
```

## 📝 Available NPM Scripts

Run these commands in your terminal:

### Format Files
```bash
# Format only src/ directory
npm run format

# Check if files are formatted (doesn't change anything)
npm run format:check

# Format everything (including config files)
npm run format:fix
```

### Linting
```bash
# Run ESLint with Prettier integration
npm run lint

# Fix ESLint issues
npm run lint --fix
```

### Development
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Run production build
```

## ✅ Setup Instructions

### For Project Setup (Already Done ✓)

The following has already been configured:

1. ✅ Prettier installed and configured (`.prettierrc`)
2. ✅ ESLint configured with Prettier plugin
3. ✅ Husky initialized for git hooks
4. ✅ Lint-staged configured in `package.json`
5. ✅ Pre-commit hook created (`.husky/pre-commit`)
6. ✅ All source files formatted

### For New Developers Cloning the Project

When a new developer clones the repository:

```bash
# 1. Clone repository
git clone <repository-url>
cd QUICK

# 2. Install dependencies
npm install

# 3. Setup Husky hooks
npx husky install

# 4. (Optional) Format any existing changes
npm run format
```

**Important**: Always run `npx husky install` after `npm install` to enable git hooks!

## 🚫 What Happens if Code is Not Formatted

### Scenario: Unformatted Commit Attempt

**File with formatting issues** (`src/components/BadComponent.tsx`):
```tsx
// Bad formatting - inconsistent spacing, missing semicolons
const BadComponent=({prop})=>{
  return <div>    {prop}    </div>
}
```

**Attempt to commit**:
```bash
$ git add src/components/BadComponent.tsx
$ git commit -m "Add component"
```

**Result - ❌ Commit Blocked**:
```
husky - pre-commit hook

🔍 Running lint-staged...

✨  Formatting with Prettier...
📝 Fixing: src/components/BadComponent.tsx

❌ ESLint detected formatting issues:
   src/components/BadComponent.tsx
   - Line 1: Missing semicolon
   - Line 2: Unexpected spacing

⚠️  Please run: npm run format
⚠️  Then stage the formatted files and commit again

Error: Pre-commit check failed
```

### How to Fix

```bash
# 1. Automatically fix formatting
npm run format

# 2. Stage the fixed files
git add src/

# 3. Try committing again
git commit -m "Add component"

# ✅ Commit should now succeed
```

## 🎨 Formatting Examples

### Before Prettier
```tsx
// Inconsistent formatting
const MyComponent = ( { title , count} ) => {
  return (
    <div>
      <h1>   {title}    </h1>
      <p>{count}</p>
    </div>
  )
}

export default MyComponent
```

### After Prettier
```tsx
// Consistent formatting
const MyComponent = ({ title, count }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
    </div>
  );
};

export default MyComponent;
```

## 🔍 Verification

### Check if Setup is Working

1. **Verify config files exist**:
   ```bash
   ls -la .prettierrc .prettierignore .eslintrc.json
   ```

2. **Check packages installed**:
   ```bash
   npm list prettier eslint husky lint-staged
   ```

3. **Run format check**:
   ```bash
   npm run format:check
   ```

4. **Test pre-commit hook** (try an unformatted commit):
   - Make a small unformatted change
   - Try to commit
   - Hook should block it and suggest fixes

## 📋 Formatting Rules Summary

| Rule | Setting | Example |
|------|---------|---------|
| Semicolons | ✅ Always | `const x = 1;` |
| Quotes | Single `'` | `'string'` not `"string"` |
| Line Width | 80 chars | Auto-break long lines |
| Indentation | 2 spaces | `  const` |
| Tabs | No | Always spaces |
| Arrow Parens | Always | `(x) => x` not `x => x` |
| Trailing Commas | ES5 | `{ a: 1, b: 2, }` |
| JSX Quotes | Double `"` | `<div attr="value">` |
| Line Endings | LF | Unix line endings |

## 🔄 Workflow Example

### Day in the Life of a Developer

```bash
# 1. Start working
npm run dev

# 2. Edit some files
# (Make changes to src/components/Header.tsx, src/app/page.tsx)

# 3. Stage changes
git add src/

# 4. Commit with clear message
git commit -m "feat: Add new header navigation"

# 5a. If formatting is correct
# ✅ [main a1b2c3d] feat: Add new header navigation
#    2 files changed, 15 insertions(+), 5 deletions(-)

# 5b. If formatting is wrong
# ❌ ERROR: Code style issues found
# → Run: npm run format
# → Then: git add src/ && git commit again
```

## ⚠️ Common Issues

### Issue: "prettier/prettier" errors in IDE

**Solution**: Make sure VS Code has Prettier extension installed:
- Install: "Prettier - Code formatter" by Prettier
- Settings: Enable "Format on Save"

### Issue: Pre-commit hook not running

**Solution**: Reinitialize Husky:
```bash
npx husky install
```

### Issue: "Could not find `.prettierrc`"

**Solution**: Make sure you're in project root:
```bash
cd /Users/mrunal.munjamkar@iqvia.com/Documents/QUICK
npm run format
```

### Issue: Formatting conflicts with ESLint

**Solution**: Already configured! The `.eslintrc.json` disables conflicting rules using:
```json
"extends": ["plugin:prettier/recommended"]
```

## 📚 Additional Resources

- [Prettier Documentation](https://prettier.io/docs/)
- [ESLint Documentation](https://eslint.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Lint-staged Documentation](https://github.com/okonet/lint-staged)

## 🎯 Best Practices

✅ **DO**:
- Run `npm run format` before committing
- Use VS Code Prettier extension for real-time formatting
- Check `.prettierrc` for project rules before writing code
- Ask in team chat if you're unsure about formatting

❌ **DON'T**:
- Commit unformatted code (it will be blocked)
- Override formatting rules locally
- Skip the pre-commit hook
- Merge PRs without proper formatting

## 🤝 Team Guidelines

1. **All developers** must follow these formatting standards
2. **New files** are automatically checked on commit
3. **Existing code** was already formatted (see commit history)
4. **Code reviews** should verify formatting compliance
5. **CI/CD** can be configured to check formatting

---

**Result**: A consistently formatted codebase where all developers follow the same style automatically! ✨
