# auto-test-research

---

# Project Structure

```markdown
auto-test-research/
├── src/
│   ├── tests/              # Test files
│   │   ├── api/            # API tests
│   │   ├── e2e/            # E2E tests
│   │   └── utils/          # Test helpers
│   ├── pages/              # Page Object Models
│   ├── api/                # API client
│   └── utils/              # General utilities     
├── config/                 # Configuration files
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── jest.config.js          # Testing framework setup
```

---


# Initialize Node.js project
npm init -y

# Install Playwright and TypeScript


## Install Dependencies
npm install -D @cucumber/cucumber typescript ts-node @types/node

# Create tsconfig.json
npx tsc --init --target es2022 --module commonjs

---

