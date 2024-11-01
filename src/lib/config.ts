'use client';

import { http, createStorage, cookieStorage } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "*Go To Wallet Connect and get Project ID*";

const supportedChains: Chain[] = [ mainnet, base ];

export const config = getDefaultConfig({
   appName: "keepkey-template",
   projectId,
   chains: supportedChains as any,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });
