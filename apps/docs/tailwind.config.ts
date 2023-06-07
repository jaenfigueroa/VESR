import { Config } from 'tailwindcss'
import sharedConfig from '../../packages/tailwind-config/tailwind.config'

const config: Config = {
  content: ['./src/**/*.{html,ts,tsx,js,jsx}'],
  prefix: "vers-",
  presets: [sharedConfig],
}

export default config

