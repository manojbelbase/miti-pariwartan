# Contributing to Miti Pariwartan

Thank you for considering contributing to **Miti Pariwartan**, the lightweight Bikram Sambat (BS) ↔ Gregorian (AD) date converter library! 🌸 Your contributions help make this tool more robust, accessible, and useful for the Nepali developer community. Whether it's fixing bugs, adding features, improving documentation, or enhancing TypeScript types, we welcome all kinds of contributions.

This guide outlines how to get involved. Please follow these steps to ensure a smooth collaboration process.

## Code of Conduct

We adhere to the [Contributor Covenant Code of Conduct]([https://www.contributor-covenant.org/version/2/1/code_of_conduct](https://github.com/ManojBelbase/miti-pariwartan?tab=coc-ov-file)/). By participating in this project, you agree to uphold these standards. All interactions should be respectful and inclusive.

If you encounter any violations, please report them to [manojbelbase56@gmail.com](mailto:manojbelbase56@gmail.com).

## Getting Started

### Prerequisites
- Node.js 22.12 or higher
- pnpm 12.6.0 (specified in `package.json`)
- Git

### Fork and Clone the Repository
1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/manojbelbase/miti-pariwartan.git
   cd miti-pariwartan
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/manojbelbase/miti-pariwartan.git
   ```

### Set Up Your Environment
1. Install dependencies using the committed lockfile:
   ```bash
   pnpm install --frozen-lockfile
   ```
2. Verify the setup:
   ```bash
   pnpm lint
   pnpm type-check
   pnpm build
   ```

Commit `pnpm-lock.yaml` when dependencies change. pnpm is the package manager for this repository.

## Development Workflow

### Branching Strategy
- Create feature branches from the `main` branch.
- Use descriptive branch names, e.g., `feature/add-nepali-month-names`, `fix/weekday-calculation-bug`, or `docs/update-readme`.
- Keep branches small and focused on a single change.

### Making Changes
1. Create a new branch:
   ```bash
   git checkout -b your-feature-branch
   ```
2. Make your changes. Ensure:
   - Code follows TypeScript best practices.
   - Tests are added or updated for new features/fixes.
   - Documentation is updated if necessary (e.g., README.md, API docs).
3. Commit your changes with clear, concise messages:
   ```bash
   git commit -m "feat: add support for readable date formats"
   ```
   Use semantic commit messages (e.g., `feat:`, `fix:`, `docs:`, `chore:`).

### Validation
- Run linting, type checks, and the library build:
  ```bash
  pnpm lint
  pnpm type-check
  pnpm build
  ```
- There is currently no automated test script. Include reproduction steps for bug fixes.

### Building the Library
- Build for production:
  ```bash
  pnpm build
  ```
- This generates CommonJS, ES Module, and UMD builds in the `lib/` folder.

## Submitting Pull Requests (PRs)

1. Push your branch:
   ```bash
   git push origin your-feature-branch
   ```
2. Open a Pull Request on GitHub:
   - Target the `main` branch.
   - Provide a clear title and description.
   - Reference any related issues (e.g., "Fixes #123").
   - Include screenshots or examples if applicable (e.g., for UI changes).
3. Ensure your PR passes all CI checks (tests, linting, builds).

### PR Template
Use this checklist in your PR description:
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] TypeScript types enhanced if needed
- [ ] Changes follow the coding style
- [ ] No breaking changes (or documented if any)

## Reporting Bugs and Requesting Features

- **Bugs**: Open an issue with:
  - A clear title (e.g., "bsToAd fails for leap year edge case").
  - Steps to reproduce.
  - Expected vs. actual behavior.
  - Environment details (Node version, OS, etc.).
- **Features**: Open an issue with:
  - A detailed description.
  - Use cases or motivations.
  - Proposed API changes.

We prioritize issues based on impact and feasibility.

## Code Style and Standards

- Follow [TypeScript ESLint rules](https://typescript-eslint.io/).
- Use 2-space indentation.
- Prefer `const` over `let`; avoid `var`.
- Write descriptive variable and function names.
- Add JSDoc comments for public APIs.

## Documentation

- Update README.md for user-facing changes.
- Enhance inline comments for complex logic.
- Add examples in the `examples/` folder if relevant.

## Releasing

Releases are handled by maintainers:
- Bump version with `pnpm version patch --no-git-tag-version` (or `minor` / `major` as appropriate).
- Update changelog.
- Run `pnpm lint`, `pnpm type-check`, and `pnpm build`.
- Preview the package with `pnpm publish --dry-run`.
- Commit and tag the release, then run `pnpm publish` to publish to the npm registry and create a GitHub release.

## Questions?

If you have questions, feel free to:
- Open a discussion on GitHub.
- Reach out via email.

Thank you for your time and effort! Your contributions make **Miti Pariwartan** better for everyone. 🚀

---

*Last updated: October 19, 2025*
