import { useState } from "react";
import { TopBar } from "./components/topbar";
import { Button } from "./components/ui/button";
import Provider from "./provider";
import { UserSeedPhrase } from "./components/userSeedPhrase";
import { ArrowLeft } from "lucide-react";
import { WalletGeneratedContext } from "./context/walletGen";
import { Wallets } from "./components/wallets";

function App() {
  const [inputSeedPhrase, setInputSeedPhrase] = useState(false);
  const [walletGenerated, setWalletGenerated] = useState(false);

  const contextValue = {
    walletGenerated,
    setWalletGenerated,
  };
  return (
    <WalletGeneratedContext.Provider value={contextValue}>
      <Provider>
        <div className="flex items-center justify-center flex-col h-screen w-screen">
          <div className="h-screen w-[65vw] p-8 flex flex-col space-y-7">
            <TopBar />
            <div className="mt-12 space-y-6 opacity-0 animate-fade-in">
              <div className="text-4xl font-semibold mt-6 flex items-center justify-between space-x-2">
                <span>Generate blockchain wallets</span>
                {inputSeedPhrase && (
                  <ArrowLeft
                    onClick={() => {
                      setInputSeedPhrase(false);
                      setWalletGenerated(false);
                    }}
                    className="animate-fade-in"
                    fontWeight={30}
                    size={35}
                  />
                )}
              </div>
              {!inputSeedPhrase && (
                <div className="space-x-4">
                  <Button
                    onClick={() => {
                      setInputSeedPhrase(true);
                    }}
                  >
                    Enter SeedPhrase
                  </Button>
                  <Button>Create Wallet</Button>
                </div>
              )}
              {inputSeedPhrase && !walletGenerated && <UserSeedPhrase />}
            </div>
            {walletGenerated && <Wallets />}
          </div>
        </div>
      </Provider>
    </WalletGeneratedContext.Provider>
  );
}

export default App;
