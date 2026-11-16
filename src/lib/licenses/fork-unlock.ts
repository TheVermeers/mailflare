/**
 * Fork switch: when true, this installation behaves as if a Team license were active.
 * Accounts (unlimited seats), shared mailboxes, custom branding and account-level
 * forwarding are all available without a Paymug key.
 *
 * This is the only fork-specific flag. Keeping it in one file keeps upstream merges
 * simple: the gates in service.ts, access-utils.ts and admin-nav.tsx each read it.
 * Set it to false to restore upstream behaviour.
 */
export const UNLOCK_ALL_FEATURES = true;
