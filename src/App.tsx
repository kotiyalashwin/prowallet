import { useState } from "react";
import { TopBar } from "./components/topbar";
import { Button } from "./components/ui/button";
import Provider from "./provider";
import { UserSeedPhrase } from "./components/userSeedPhrase";
import { ArrowLeft } from "lucide-react";
import { WalletGeneratedContext } from "./context/walletGen";
import { Wallets } from "./components/wallets";
import { generateMnemonic } from "bip39";
import { ShowSeedPhrase } from "./components/shoseedphrase";
import { PhraseContext } from "./context/seed";
import { WalletsContext } from "./context/wallets";

function App() {
  const [inputSeedPhrase, setInputSeedPhrase] = useState(false);
  const [walletGenerated, setWalletGenerated] = useState(false);
  const [phrase, setPhrase] = useState<string[] | null>(null);
  const [mneomic, setMneomonic] = useState<string>("");
  const [wallets, setWallets] = useState<string[]>([]);

  const addWallet = (wallet: string) => {
    setWallets((prevWallets) => [...prevWallets, wallet]);
  };

  const phraseContextValue = {
    phrase,
    setPhrase,
  };

  async function genSeed() {
    const seed = generateMnemonic();
    setMneomonic(seed);
    setPhrase(seed.split(" "));
  }

  const walletsContextValue = {
    wallets,
    setWallets,
    addWallet,
  };

  const contextValue = {
    walletGenerated,
    setWalletGenerated,
  };
  return (
    <WalletsContext value={walletsContextValue}>
      <PhraseContext.Provider value={phraseContextValue}>
        <WalletGeneratedContext.Provider value={contextValue}>
          <Provider>
            <div className="flex items-center justify-center flex-col h-screen w-screen">
              <div className="h-screen w-[65vw] p-8 flex flex-col space-y-7">
                <TopBar />
                <div className="mt-12 space-y-6 opacity-0 animate-fade-in">
                  <div className="text-4xl font-semibold mt-6 flex items-center justify-between space-x-2">
                    <span>Generate blockchain wallets</span>
                    {(inputSeedPhrase || mneomic) && (
                      <ArrowLeft
                        onClick={() => {
                          setInputSeedPhrase(false);
                          setWalletGenerated(false);
                          setMneomonic("");
                        }}
                        className="animate-fade-in"
                        fontWeight={30}
                        size={35}
                      />
                    )}
                  </div>
                  {!inputSeedPhrase && !mneomic && (
                    <div className="space-x-4 flex">
                      <Button
                        onClick={() => {
                          setInputSeedPhrase(true);
                        }}
                      >
                        Enter SeedPhrase
                      </Button>
                      <Button onClick={genSeed}>Create Wallet</Button>
                    </div>
                  )}
                  {inputSeedPhrase && !walletGenerated && <UserSeedPhrase />}
                  {(mneomic || walletGenerated) && (
                    <div>
                      <ShowSeedPhrase />
                    </div>
                  )}
                </div>
                {(walletGenerated || mneomic) && <Wallets />}
              </div>
            </div>
          </Provider>
        </WalletGeneratedContext.Provider>
      </PhraseContext.Provider>
    </WalletsContext>
  );
}

export default App;
