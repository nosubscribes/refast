import type { UserConfig } from 'vite'

declare const getBaseLibraryConfig: (config: { dirname: string; name: string }) => UserConfig

export { getBaseLibraryConfig }
