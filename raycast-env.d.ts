/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `set-key` command */
  export type SetKey = ExtensionPreferences & {}
  /** Preferences accessible in the `get-key` command */
  export type GetKey = ExtensionPreferences & {}
  /** Preferences accessible in the `delete-key` command */
  export type DeleteKey = ExtensionPreferences & {}
  /** Preferences accessible in the `import-key` command */
  export type ImportKey = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `set-key` command */
  export type SetKey = {}
  /** Arguments passed to the `get-key` command */
  export type GetKey = {}
  /** Arguments passed to the `delete-key` command */
  export type DeleteKey = {}
  /** Arguments passed to the `import-key` command */
  export type ImportKey = {}
}

