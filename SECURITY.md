# 🔒 Security Policy for Miti Pariwartan

Thank you for helping keep **Miti Pariwartan**, the Bikram Sambat (BS) ↔ Gregorian (AD) date converter library, secure! 🌐 This security policy outlines how to report vulnerabilities and what to expect during the process.

## 🛡️ Reporting a Vulnerability

We take security seriously. If you discover a security issue, please report it to us privately rather than publicly to prevent exploitation.

### How to Report
- **Email**: Send details to [security@miti-pariwartan.org](mailto:security@miti-pariwartan.org).
- **Details to Include**:
  - A clear description of the vulnerability.
  - Steps to reproduce the issue.
  - Affected versions (if known).
  - Any potential impact or exploitation scenarios.
- **No Public Disclosure**: Please do not open a public GitHub issue or discuss it publicly until we’ve had a chance to address it.

### What to Expect
- **Acknowledgment**: We’ll confirm receipt within 3 business days.
- **Assessment**: We’ll evaluate the vulnerability and determine its severity.
- **Resolution**: We aim to provide a fix or mitigation within 14 days, depending on complexity, and notify you of the progress.
- **Disclosure**: After patching, we’ll coordinate with you on public disclosure (e.g., via a GitHub security advisory) if needed.

## 🔐 Security Updates

- **Patches**: Security fixes will be released as new versions on npm and tagged with `[security]` in the release notes (e.g., `v1.2.3 [security]`).
- **Notifications**: Subscribe to GitHub notifications for this repository to stay informed about security updates.

## 🚧 Security Best Practices

### For Contributors
- ✅ **Validate Inputs**: Ensure date inputs are sanitized to prevent injection or overflow errors.
- 🔒 **Avoid Secrets**: Never commit API keys, credentials, or sensitive data. Use `.gitignore` for `.env` files.
- 🧪 **Test Thoroughly**: Add unit tests for security-critical code (e.g., date conversion edge cases).
- 📜 **Review Changes**: Maintainers will review PRs for security implications.

### For Users
- 🔄 **Keep Updated**: Use the latest version of Miti Pariwartan to benefit from security patches.
- 🛡️ **Audit Dependencies**: Run `pnpm audit` periodically to check for vulnerabilities in dependencies.
- 🚫 **Avoid Modifying Source**: Stick to the distributed package to ensure integrity.

## 🛠 Handling of Reports

- **Triage**: All reports are triaged by maintainers within 3 days.
- **Fixing**: Vulnerabilities will be prioritized based on severity (CVSS score if applicable).
- **Credit**: Reporters may be credited in the release notes or GitHub security advisory (with your permission).

## 📜 Legal Disclaimer

This project is provided "as is" without warranties. Reporting a vulnerability does not guarantee a fix or compensation, but we’ll make every effort to address it responsibly.

## 🙌 Thank You!

Your vigilance helps keep Miti Pariwartan secure for the Nepali developer community. For questions, contact us at [security@miti-pariwartan.org](mailto:security@miti-pariwartan.org).

*Last updated: October 19, 2025, 02:13 PM +0545*
