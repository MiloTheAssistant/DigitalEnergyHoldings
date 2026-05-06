# Microsoft Graph Contact Form Runbook

Digital Energy Holdings uses Microsoft Graph `sendMail` from a Next.js Server
Action to deliver website inquiries. The contact form posts to the app server,
the server requests a Microsoft identity token with client credentials, then it
sends mail through the configured Microsoft 365 mailbox.

## Required Vercel Variables

Set these in Vercel for Production and Preview. Add Development too if local
`vercel dev` should use the same delivery path.

```txt
MS_TENANT_ID=
MS_CLIENT_ID=
MS_CLIENT_SECRET=
MS_FROM_EMAIL=
LEAD_TO_EMAIL=
```

`MS_FROM_EMAIL` must be an actual Microsoft 365 user or shared mailbox that
Microsoft Graph can resolve under `/users/{MS_FROM_EMAIL}`. It cannot be only an
alias, distribution list, contact, or group.

`LEAD_TO_EMAIL` is the destination inbox for website leads. It can match
`MS_FROM_EMAIL`, but it does not have to.

## Microsoft App Registration

1. Create an app registration in Microsoft Entra.
2. Copy the Directory tenant ID into `MS_TENANT_ID`.
3. Copy the Application client ID into `MS_CLIENT_ID`.
4. Create a client secret and copy the secret value into `MS_CLIENT_SECRET`.
5. Add Microsoft Graph application permission `Mail.Send`.
6. Grant admin consent for the tenant.
7. Confirm the mailbox configured in `MS_FROM_EMAIL` exists and is provisioned.

No redirect URI is needed for this flow. The site uses client credentials, not a
browser login callback.

## Vercel Commands

```bash
npx vercel env ls
npx vercel env add MS_TENANT_ID production preview development
npx vercel env add MS_CLIENT_ID production preview development
npx vercel env add MS_CLIENT_SECRET production preview development
npx vercel env add MS_FROM_EMAIL production preview development
npx vercel env add LEAD_TO_EMAIL production preview development
npx vercel deploy --prod --yes
```

Vercel environment variable changes require a new deployment before production
uses the new values.

## Production Verification

Submit a live test inquiry from `https://digitalenergyholdings.com/#contact`.
A successful submission redirects to `/thank-you` and sends an email with a
subject like:

```txt
New DEH inquiry: General company inquiry
```

Check production logs after testing:

```bash
npx vercel logs digitalenergyholdings.com --level error --since 10m --limit 20 --no-follow --expand
```

## Known Failure Modes

`ErrorInvalidUser`

Microsoft Graph cannot resolve `MS_FROM_EMAIL` as a valid user mailbox. Confirm
the mailbox exists, is provisioned in Exchange, and that the configured value is
the actual user principal name or supported mailbox address.

`ErrorAccessDenied`

Graph resolved the mailbox but rejected the send. Confirm `Mail.Send` is an
application permission, not delegated, and that admin consent has been granted.
If mailbox access is restricted through Exchange application access controls,
allow this app to send as the configured `MS_FROM_EMAIL` mailbox.

`The inquiry form is not configured yet`

At least one required Vercel variable is missing in the deployment environment.
Run `npx vercel env ls` and redeploy after fixing the missing variable.

## Security Hardening

The broad Microsoft Graph `Mail.Send` application permission can send mail as
users unless access is scoped. Restrict this app to the DEH contact mailbox with
Exchange application access controls or the current Microsoft-recommended
equivalent for application-scoped mailbox permissions.
