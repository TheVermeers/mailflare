# About this fork

This is a fork of [hieunc229/mailflare](https://github.com/hieunc229/mailflare), licensed under the GNU AGPL v3 (see `LICENSE`). Mailflare is copyright Hieu Nguyen; this fork keeps that notice and the same licence.

Under AGPL section 13, anyone who uses this modified version over a network can get its source. The source is in this repository: https://github.com/thealbion75/mailflare

## What differs from upstream

- **Features unlocked.** `src/lib/licenses/fork-unlock.ts` holds one switch, `UNLOCK_ALL_FEATURES`. While it is `true`, this installation behaves as if a Team licence were active: extra accounts without a seat limit, shared mailboxes, custom branding and account-level forwarding. The Licenses admin page and the "upgrade" badge are hidden. Set the switch to `false` to restore upstream behaviour.
- **Tests.** Four upstream tests that assert the paywall are skipped while the switch is `true` (`tests/helpers/fork.mjs`).
- **Update workflow removed.** Upstream's `deploy-update.yml` replaces the whole repository with upstream's tree, which would erase every change listed here. It is deleted, and the in-app "update" button has nothing to run. Do not add it back or set `MAILFLARE_UPDATE_TOKEN`.

## Following upstream (read-only)

Upstream stays available as a remote, but nothing is merged automatically. Look at it about once a month and take only what is worth having, mainly security and bug fixes.

```bash
git remote add upstream https://github.com/hieunc229/mailflare.git   # once
git fetch upstream
git log --oneline HEAD..upstream/main          # what is new
git diff HEAD...upstream/main -- changelog/    # release notes
git cherry-pick <commit>                       # take one fix at a time
```

Rules of thumb:

- Prefer cherry-picking over `git merge upstream/main`. A full merge pulls in every upstream change, including ones that touch the files this fork changes.
- **Database migrations** are the risk. A cherry-picked fix that depends on a newer migration needs that migration too. Migrations are numbered and must be applied in order, and each schema change needs all three dialects (see `AGENTS.md`). Never edit a migration that has already been applied.
- Dependency bumps (Next, nodemailer, mailauth, and so on) are worth taking promptly. Run `node --test tests/*.test.mjs` after each pick.
- Changes to `src/lib/licenses/`, `src/lib/mailboxes/access-utils.ts` and `src/components/admin-nav.tsx` will conflict with this fork. Resolve them by keeping the `UNLOCK_ALL_FEATURES` checks.

If you find Mailflare useful, consider supporting the original author.
