"use client";

import { WagmiProvider, cookieToInitialState } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SWRConfig } from "swr";
import { config } from "@/lib/config";
import { Provider } from "@/components/ui/provider"

const queryClient = new QueryClient();

type Props = {
    children: React.ReactNode;
    cookie?: string | null;
};

export default function Providers({ children, cookie }: Props) {
    const initialState = cookieToInitialState(config, cookie);

    return (
        <SWRConfig
            value={{
                fetcher: (resource, init) =>
                    fetch(resource, init).then((res) => res.json()),
            }}
        >
            <WagmiProvider config={config} initialState={initialState}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider
                        theme={darkTheme({
                            accentColor: "#0E76FD",
                            accentColorForeground: "black",
                            borderRadius: "large",
                            fontStack: "system",
                            overlayBlur: "small",
                        })}
                    >
                        <Provider>{children}</Provider>
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </SWRConfig>
    );
}
