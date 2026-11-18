George & Friends — Support, email preview, backups and 404
18 November 2026

This ZIP contains changed files only, including the previous mobile admin
layout update if you haven't applied that one yet. The live site has not
been changed.

1. UPDATE THE BACKUP FUNCTION
   In Supabase project lgchqleltppfdgtpgsbj, open the existing Edge Function
   george-and-friends-site. Replace its index.ts with the file at:

   supabase/functions/george-and-friends-site/index.ts

   Deploy the update. Keep the function's current JWT verification setting;
   the function already checks admin sessions and the scheduled worker token.
   Leave the mail function, secrets, database and existing schedule as they are.

   Terminal alternative: open a terminal at the extracted ZIP root
   (the directory containing supabase), then run:

   npx supabase functions deploy george-and-friends-site --project-ref lgchqleltppfdgtpgsbj --no-verify-jwt

   If the CLI asks you to sign in first, run npx supabase login, then retry.
   Check that the health endpoint now shows build 2026-11-18.1:
   https://lgchqleltppfdgtpgsbj.supabase.co/functions/v1/george-and-friends-site/api/health

2. PUBLISH THE WEBSITE FILES
   Copy the HTML files into the root of the georgeandfriends repository.
   Merge the supplied assets folder with the existing assets folder.
   Keep site-config.js, your domain settings, other assets and media.
   The Supabase file is for step 1; it isn't a public website asset.
   Commit and push the website files to main. Keep Pages on GitHub Actions
   and wait for the existing Publish George and Friends workflow to finish.

3. SET THE BACKUP SLOT
   In team admin: More > Records & backups > Backups.
   Tick Save a JSON backup every week and Email the backup to the team,
   choose the weekday and UK time, then save. Check the Next backup line.

   The existing scheduled processor picks the backup up on its first check
   after the selected time. The schedule follows British Summer Time.
   The scheduled email sends the JSON attachment to the team and copies
   support@georgetech.uk. If support is already the main recipient it won't
   be duplicated. Back up now keeps its existing recipients and doesn't move
   the weekly slot. Turning off backup emails still allows automatic snapshots.

   If no scheduled backup arrives, check the existing Supabase Cron job for
   /internal/process and the Emails outbox. This update adds no cron job.

QUICK CHECKS AFTER PUBLISHING
   - Open GeorgeTech support in admin on mobile. Scroll inside the support
     page or use Open support in a new tab.
   - Open an email preview and scroll to the bottom. Its heading and close
     button stay visible. The Plain text tab scrolls independently.
   - Visit a made-up path on the live domain, e.g. /lost-paddock/test.
     The "Hold your horses!" page should appear with the pony illustration.
     Get support leads to the George & Friends contact page.
   - To preview locally, open /404.html on your existing local web server.
     A basic local server may use its own error page for unknown URLs.

Validation used a narrow browser preview and example records. The backup
tests covered UK clock changes, schedule saves, the support CC, opting out
of email and preventing duplicate sends. No real backups or emails were sent.
