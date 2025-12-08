/**@typedef {Import('prettier').config } PrettierConfig */


/** @type {PrettierConfig} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
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