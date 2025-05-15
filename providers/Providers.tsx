'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="cmalfz9g7003tl70mlavurlvn"
      clientId="client-WY6LHzKKnVbqCKMwbL79wS4ddrqAgSjacEux6xSnKtNxA"
      config={{
           loginMethods: ["email", "google", "twitter", "wallet"],
            appearance: {
              theme: "dark",
              accentColor: "#3b82f6",
              logo: "/logo.svg",
            },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets'
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}