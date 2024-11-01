'use client';

import { http, createStorage, cookieStorage } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "YOUR_PROJECT_ID";

const supportedChains: Chain[] = [mainnet, base];

// Define the transports for each chain
const transports = {
    [mainnet.id]: http({ chain: mainnet }),
    [base.id]: http({ chain: base }),
};

export const config = getDefaultConfig({
    appName: "keepkey-template",
    projectId,
    chains: supportedChains,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports,
});
