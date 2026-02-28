import { promisify } from "node:util";
import { exec as execCallback } from "node:child_process";

const exec = promisify(execCallback);

const WATCHKEY_PATH = "/usr/local/bin/watchkey";

export async function watchkeySet(service: string, value: string): Promise<void> {
  await exec(`echo ${escapeShellArg(value)} | ${WATCHKEY_PATH} set ${escapeShellArg(service)}`);
}

export async function watchkeyGet(service: string): Promise<string> {
  const { stdout } = await exec(`${WATCHKEY_PATH} get ${escapeShellArg(service)}`);
  return stdout;
}

export async function watchkeyDelete(service: string): Promise<void> {
  await exec(`${WATCHKEY_PATH} delete ${escapeShellArg(service)}`);
}

export async function watchkeyImport(service: string): Promise<void> {
  await exec(`${WATCHKEY_PATH} set ${escapeShellArg(service)} --import`);
}

function escapeShellArg(arg: string): string {
  return `'${arg.replace(/'/g, "'\\''")}'`;
}
