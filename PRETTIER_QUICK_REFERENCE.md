# Prettier & ESLint Quick Reference

## 🚀 Quick Start

```bash
# First time setup (new developer)
git clone <repo>
npm install
npx husky install

# Format before committing
npm run format

# Check formatting without changing files
npm run format:check

# Commit as usual (hook will auto-fix + check)
git commit -m "Your message"
```

## 📝 Common Commands

| Command | Purpose | Effect |
|---------|---------|--------|
| `npm run format` | Format src/ files | ✅ Fixes spacing, quotes, semicolons |
| `npm run format:check` | Check if files need formatting | 🔍 Read-only, shows issues |
| `npm run format:fix` | Format everything | ✅ Includes config files |
| `npm run lint` | Run ESLint | 🔍 Check for code issues |
| `git commit -m "msg"` | Commit with checks | 🎯 Runs pre-commit hook automatically |

## ❌ What Gets Blocked

Your commit will be **BLOCKED** if:

- ❌ Missing semicolons at end of statements
- ❌ Inconsistent quote styles (should be single quotes)
- ❌ Incorrect indentation (should be 2 spaces)
- ❌ Extra/missing spaces in objects, functions
- ❌ Lines longer than 80 characters (auto-wrapped)
- ❌ Trailing whitespace
- ❌ Wrong line endings (should be LF)

## ✅ What Gets Auto-Fixed

Prettier **automatically fixes**:

- 🔧 Adds/removes semicolons
- 🔧 Fixes quote style
- 🔧 Corrects indentation
- 🔧 Removes trailing spaces
- 🔧 Wraps long lines
- 🔧 Formats JSX/TSX properly
- 🔧 Standardizes object spacing

## 🎯 Error Example

### ❌ You Try to Commit This:
```tsx
// Bad formatting
const Component=({name})=>{return <div>{name}</div>}
export default Component
```

### 🚫 Pre-commit Hook Blocks It:
```
Pre-commit check failed
prettier/prettier: Unexpected token }
```

### ✅ You Run:
```bash
npm run format
git add .
git commit -m "message"
```

### 🎉 Commit Succeeds:
```tsx
// Auto-formatted!
const Component = ({ name }) => {
  return <div>{name}</div>;
};
export default Component;
```

## 📋 Formatting Rules at a Glance

| Rule | Setting |
|------|---------|
| Semicolons | ✅ Required |
| Quotes | Single `'` |
| Indentation | 2 spaces |
| Line Length | 80 characters |
| Tabs | Never |
| JSX Quotes | Double `"` |
| Trailing Comma | ES5 format |

## 🔗 Key Files

- `.prettierrc` - Prettier config
- `.prettierignore` - Files to skip
- `.eslintrc.json` - ESLint config
- `.husky/pre-commit` - Git hook
- `PRETTIER_SETUP.md` - Full documentation

## 💡 Pro Tips

1. **Format as you type**: Install "Prettier" extension in VS Code
2. **Auto-format on save**: Enable in VS Code settings
3. **Check before staging**: Run `npm run format:check` first
4. **Fix easily**: Just run `npm run format` then commit again
5. **Team consistency**: Everyone uses the same rules = no debates!

## ⚠️ Troubleshooting

**Pre-commit hook not running?**
```bash
npx husky install
```

**Files not formatting?**
```bash
npm run format:fix
```

**Too many errors?**
```bash
npm run format
npm run lint --fix
```

---

✨ **Result**: Automatic code formatting on every commit! No more style debates. 🎉
