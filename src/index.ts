import { inspect } from "util";

import { startApi } from "./api";

export async function main() {
  await startApi();
}

main().catch((error) => {
  console.error(error);
  console.error(error instanceof Error ? error : inspect(error, false, null, true));
  process.exit(error.status || 1);
});
