/**@typedef {Import('prettier').config }PrettierConfig */

import { EndOfLineState } from "typescript"

/** @type {PrettierConfig} */
const config = {
  printWitdh: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  EndOfLineState: 'auto',
  bracketSameLine: false
} 


export default config