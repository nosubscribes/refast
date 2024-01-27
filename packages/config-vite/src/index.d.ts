import type { UserConfig } from 'vite'

export declare const base: UserConfig
export declare const getLib: ({ libName, entry }: { libName: string; entry: string }) => UserConfig
