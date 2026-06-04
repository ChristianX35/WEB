# Security Report

## Summary

| Severity | Count |
| --- | ---: |
| Critical | 0 |
| High | 0 |
| Medium | 5 |
| Low | 1 |

## Findings And Fixes

| File | Line | Type | Severity | Finding | Fix Applied |
| --- | ---: | --- | --- | --- | --- |
| `.htaccess` | N/A | Directory & File Exposure | Medium | No Apache hardening file existed, so directory listing could be enabled by server defaults. | Added `.htaccess` with `Options -Indexes`. |
| `.htaccess` | N/A | HTTP Security Headers | Medium | Missing `Content-Security-Policy`. | Added a restrictive CSP allowing local assets, Google Fonts, and the existing Lucide CDN script. |
| `.htaccess` | N/A | HTTP Security Headers | Medium | Missing `X-Frame-Options: DENY`. | Added `X-Frame-Options: DENY`. |
| `.htaccess` | N/A | HTTP Security Headers | Medium | Missing `X-Content-Type-Options: nosniff`. | Added `X-Content-Type-Options: nosniff`. |
| `.htaccess` | N/A | HTTP Security Headers | Medium | Missing `Referrer-Policy` and `Permissions-Policy`. | Added `Referrer-Policy: strict-origin-when-cross-origin` and a restrictive `Permissions-Policy`. |
| `.htaccess` | N/A | Directory & File Exposure | Low | Sensitive files such as `.env`, logs, config files, and package manifests were not explicitly blocked if later added. | Added `FilesMatch` deny rules for common sensitive files and disabled PHP `display_errors` where supported. |

## Audit Notes

| Category | Result |
| --- | --- |
| SQL Injection | No PHP files, PDO usage, MySQL code, or server-side SQL queries were present in this workspace. |
| XSS | No server-rendered user input was present. The only user input is read from the contact form in `script.js` and passed through `encodeURIComponent()` into a WhatsApp URL, not inserted into the DOM. |
| CSRF | No server-side state-changing POST routes were present. The contact form does not submit to the server. |
| Authentication & Session | No login, password storage, or PHP session handling was present. |
| File Upload | No upload functionality was present. |
| Dependency & Config | No hardcoded database credentials, API keys, `.env`, PHP config files, or dependency manifests were present. |

## Files Reviewed

| File | Notes |
| --- | --- |
| `index.html` | Static page, external font/script includes, no server-side routes. |
| `script.js` | Client-side form handling only; user data is URL-encoded before opening WhatsApp. |
| `styles.css` | Styling only. |
| `README.md` | Empty project README. |
