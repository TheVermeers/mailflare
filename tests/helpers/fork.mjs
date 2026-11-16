import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const source = readFileSync(
	fileURLToPath(new URL("../../src/lib/licenses/fork-unlock.ts", import.meta.url)),
	"utf8",
);

/** True when this fork has the license gates switched off, so tests of the upstream paywall do not apply. */
export const licenseGatesUnlocked = /UNLOCK_ALL_FEATURES\s*=\s*true/.test(source);

/** Pass as the options argument of test() for tests that assert the upstream license paywall. */
export const upstreamLicensingOnly = licenseGatesUnlocked
	? { skip: "license gates are unlocked in this fork (src/lib/licenses/fork-unlock.ts)" }
	: {};
