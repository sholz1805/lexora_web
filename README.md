Lexora Website

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
3. Update `.env.local` with your SMTP credentials and target inbox.
4. Start development:
   ```bash
   npm run dev
   ```

## Important environment variables

- `EMAIL_SERVER_HOST` - SMTP server host
- `EMAIL_SERVER_PORT` - SMTP server port (typically `587` or `465`)
- `EMAIL_SERVER_USER` - SMTP username
- `EMAIL_SERVER_PASSWORD` - SMTP password
- `EMAIL_FROM` - sender email used for outgoing messages
- `CONTACT_EMAIL` - recipient inbox for contact and careers/insight submissions
- `INSIGHT_FORM_WEBHOOK_URL` or `GOOGLE_APPS_SCRIPT_URL` - optional webhook destination for insight intake submissions

## Notes

- The careers form submits to `/api/insight`.
- The contact form submits to `/api/contact`.
- Both backend routes use the same SMTP and `CONTACT_EMAIL` configuration.
- The insight intake route will now fail fast if neither SMTP nor webhook is configured.
