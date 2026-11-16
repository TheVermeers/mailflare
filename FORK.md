# About this fork

This is a fork of [hieunc229/mailflare](https://github.com/hieunc229/mailflare), licensed under the GNU AGPL v3 (see `LICENSE`). Mailflare is copyright Hieu Nguyen; this fork keeps that notice and the same licence.

Under AGPL section 13, anyone who uses this modified version over a network can get its source. The source is in this repository: https://github.com/thealbion75/mailflare

## What differs from upstream

- **Features unlocked.** `src/lib/licenses/fork-unlock.ts` holds one switch, `UNLOCK_ALL_FEATURES`. While it is `true`, this installation behaves as if a Team licence were active: extra accounts without a seat limit, shared mailboxes, custom branding and account-level forwarding. The Licenses admin page and the "upgrade" badge are hidden. Set the switch to `false` to restore upstream behaviour.
- **Tests.** Four upstream tests that assert the paywall are skipped while the switch is `true` (`tests/helpers/fork.mjs`).

## Keeping up with upstream

Add upstream as a remote and merge it into this branch. The fork-specific changes are small and confined to the files above plus `src/lib/licenses/service.ts`, `src/lib/mailboxes/access-utils.ts` and `src/components/admin-nav.tsx`.

If you find Mailflare useful, consider supporting the original author.
