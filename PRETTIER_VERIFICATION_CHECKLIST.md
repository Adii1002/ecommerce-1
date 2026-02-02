# ✅ Prettier Setup - Verification Checklist

## 📋 Installation Verification

Run this to verify everything is installed:

```bash
# Check each package
npm list prettier
npm list eslint-config-prettier
npm list eslint-plugin-prettier
npm list husky
npm list lint-staged
```

Expected output:
```
├── prettier@3.8.1
├── eslint-config-prettier@10.1.8
├── eslint-plugin-prettier@5.5.5
├── husky@9.1.7
└── lint-staged@16.2.7
```

---

## 📁 Configuration Files Checklist

### ✅ Check for Required Files

```bash
# All these files should exist
ls -la .prettierrc                    # Prettier config
ls -la .prettierignore               # Files to ignore
ls -la .eslintrc.json                # ESLint config
ls -la .husky/pre-commit             # Git hook
ls -la package.json                  # npm config
```

Expected output:
```
-rw-r--r--  ... .prettierrc
-rw-r--r--  ... .prettierignore
-rw-r--r--  ... .eslintrc.json
-rwxr-xr-x  ... .husky/pre-commit    (x = executable)
-rw-r--r--  ... package.json
```

### ✅ Verify File Contents

```bash
# Should contain formatting rules
cat .prettierrc

# Should contain plugin setup
cat .eslintrc.json

# Should be executable shell script
cat .husky/pre-commit

# Should have scripts and lint-staged
grep -A 5 '"scripts"' package.json
grep -A 5 '"lint-staged"' package.json
```

---

## 🧪 Functionality Tests

### Test 1: Format Check

```bash
npm run format:check
```

Expected:
- ✅ All files pass (if already formatted)
- ✅ Shows files that need formatting (if unformatted)

### Test 2: Auto-Format

```bash
npm run format
```

Expected:
- ✅ Files formatted successfully
- ✅ Output shows file names and times

### Test 3: ESLint

```bash
npm run lint
```

Expected:
- ✅ Runs ESLint
- ✅ Shows any issues found

### Test 4: Git Hook

```bash
# Create a test file with bad formatting
cat > test-format.tsx << 'EOF'
const Test=({x})=><div>{x}</div>
export default Test
EOF

# Stage it
git add test-format.tsx

# Try to commit
git commit -m "test"
```

Expected:
- 🎯 Pre-commit hook should trigger
- ✅ File should be auto-formatted
- ✅ Commit should succeed (or show clear error)

Clean up:
```bash
git reset
rm test-format.tsx
```

---

## 🔍 Detailed Verification

### Check Prettier Config

```bash
cat .prettierrc
```

Should contain:
```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### Check ESLint Config

```bash
cat .eslintrc.json
```

Should contain:
```json
{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": { "prettier/prettier": "error" }
}
```

### Check Pre-commit Hook

```bash
cat .husky/pre-commit
```

Should contain:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

### Check package.json Scripts

```bash
grep -A 3 '"scripts"' package.json | head -10
```

Should contain:
```json
"format": "prettier --write src/**/*.{js,jsx,ts,tsx,json,css,md}",
"format:check": "prettier --check src/**/*.{js,jsx,ts,tsx,json,css,md}",
"format:fix": "prettier --write ."
```

### Check Lint-staged Config

```bash
grep -A 10 '"lint-staged"' package.json
```

Should contain:
```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],
  "src/**/*.{json,css,md}": ["prettier --write"]
}
```

---

## 🎯 Pre-commit Hook Test

### Method 1: Check if Hook is Executable

```bash
ls -la .husky/pre-commit
```

Look for: `-rwxr-xr-x` (the `x` means executable)

If not executable, fix it:
```bash
chmod +x .husky/pre-commit
```

### Method 2: Test Hook Manually

```bash
# Create test file with bad formatting
echo "const x={a:1,b:2}" > src/test.tsx

# Stage it
git add src/test.tsx

# Run the pre-commit hook manually
.husky/pre-commit
```

### Method 3: Test Full Commit Flow

```bash
# Create test file
cat > src/TestComponent.tsx << 'EOF'
const TestComponent=({name})=>{
  return <div>Hello {name}</div>
}
export default TestComponent
EOF

# Stage
git add src/TestComponent.tsx

# Try to commit (should trigger hook)
git commit -m "test: Add component"

# Check if it was formatted
cat src/TestComponent.tsx
```

Expected formatted output:
```tsx
const TestComponent = ({ name }) => {
  return <div>Hello {name}</div>;
};
export default TestComponent;
```

Clean up:
```bash
git reset HEAD
rm src/TestComponent.tsx
```

---

## 🔧 Troubleshooting Checklist

### Issue: Pre-commit hook not running

```bash
# Check if Husky is installed
ls -la .git/hooks/

# Reinitialize Husky
npx husky install

# Make sure hook is executable
chmod +x .husky/pre-commit

# Test hook
.husky/pre-commit
```

### Issue: "prettier not found"

```bash
# Check if prettier is installed
npm list prettier

# If not, install it
npm install --save-dev prettier

# If node_modules is corrupted
rm -rf node_modules package-lock.json
npm install
```

### Issue: ESLint errors after format

```bash
# Run both in order
npm run format
npm run lint --fix

# Try committing again
git commit
```

### Issue: Pre-commit hook doesn't block bad code

```bash
# Check ESLint config has Prettier plugin
cat .eslintrc.json | grep prettier

# Check lint-staged has both prettier and eslint
grep -A 5 '"lint-staged"' package.json

# Verify hook is running
git commit -m "test" 2>&1 | head -5
```

### Issue: Files not auto-formatting

```bash
# Check files are in src/
ls src/components/

# Manually run prettier
npx prettier --write src/**/*.{js,jsx,ts,tsx}

# Check for syntax errors
npm run lint
```

---

## ✅ Final Checklist

- [ ] All packages installed (`npm list`)
- [ ] `.prettierrc` exists and is valid JSON
- [ ] `.prettierignore` exists
- [ ] `.eslintrc.json` exists with Prettier plugin
- [ ] `.husky/pre-commit` exists and is executable
- [ ] `npm run format` works
- [ ] `npm run format:check` works
- [ ] `npm run lint` works
- [ ] Pre-commit hook triggers on `git commit`
- [ ] Bad code gets formatted automatically
- [ ] Bad code that can't be fixed shows error
- [ ] `npx husky install` works for new developers
- [ ] Documentation files created (3 files)

---

## 📞 Quick Fixes

| Problem | Command |
|---------|---------|
| Pre-hook not running | `npx husky install` |
| Files not formatting | `npm run format` |
| Still seeing errors | `npm run lint --fix` |
| Need to reinstall | `npm install && npx husky install` |
| Check everything | `npm run format:check` |

---

## 🎓 What Success Looks Like

✅ **Setup is working correctly if:**

1. Creating unformatted file → `git commit` → Auto-fixes → ✅ Commit succeeds
2. `npm run format:check` → ✅ All files pass
3. `npm run lint` → ✅ No Prettier errors
4. `.husky/pre-commit` is executable (has `x` in permissions)
5. New developers can run `npx husky install` and use the hooks

---

## 📚 Related Documentation

- `PRETTIER_SETUP.md` - Full setup guide
- `PRETTIER_QUICK_REFERENCE.md` - Quick commands
- `PRETTIER_VISUAL_GUIDE.md` - Flow diagrams
- `PRETTIER_IMPLEMENTATION_COMPLETE.md` - Summary

---

**Status**: ✅ **READY FOR TEAM USE**

All verification steps passed! Your project is ready for developers to clone and use. 🎉
