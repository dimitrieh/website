---
originalPath: install/email_providers.md
updated: 2023-04-17 10:54:59 +0200
version: 1.6.0
navTitle: Email configuration
---

## Example configuration for common email platforms

### GMail
```yaml
email:
  enabled: true
  debug: false
  smtp:
    host: smtp.gmail.com
    port: 465
    secure: true
    auth:
        user: [USER]@gmail.com
        pass: [PASSWORD]
```

Note: Gmail may require an app specific password to be created if you are using 2FA on the account you can set that up [here](https://security.google.com/settings/security/apppasswords)
