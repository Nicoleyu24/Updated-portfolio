Run these steps in order to deploy the portfolio to production:

1. Run `npm run lint` — fix any ESLint errors before proceeding
2. Run `npm run build` — confirm the production build succeeds
3. Stage and commit all changes: `git add -A && git commit -m "$ARGUMENTS"`
   - Use the text provided as $ARGUMENTS for the commit message
   - If no message was provided, use "Update portfolio"
4. Push to main: `git push origin main`
5. Tell me the Vercel deployment will be triggered automatically via GitHub integration

Usage: /deploy "your commit message here"
