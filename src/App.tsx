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
import { PhraseContext } from "./context/phraseContext";
import { WalletsContext } from "./context/wallets";
import Footer from "./components/footer";
import { SelectType } from "./components/select";
import { WalletTypeContext } from "./context/wallettype";
import { MneomoniContext } from "./context/mneomonicContext";

function App() {
  const [inputSeedPhrase, setInputSeedPhrase] = useState(false);
  const [walletGenerated, setWalletGenerated] = useState(false);
  const [phrase, setPhrase] = useState<string[] | null>(null);
  const [mneomic, setMneomonic] = useState<string>("");
  const [wallets, setWallets] = useState<string[]>([]);
  const [walletType, setWalletType] = useState("");

  const addWallet = (wallet: string) => {
    setWallets((prevWallets) => [...prevWallets, wallet]);
  };

  const phraseContextValue = {
    phrase,
    setPhrase,
  };

  const walletTypeContextValue = {
    walletType,
    setWalletType,
  };
  async function genSeed() {
    const mneomic = generateMnemonic();
    setMneomonic(mneomic);
    setPhrase(mneomic.split(" "));
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
    <MneomoniContext.Provider value={{ mneomic, setMneomonic }}>
      <WalletTypeContext value={walletTypeContextValue}>
        <WalletsContext.Provider value={walletsContextValue}>
          <PhraseContext.Provider value={phraseContextValue}>
            <WalletGeneratedContext.Provider value={contextValue}>
              <Provider>
                <div className="flex items-center justify-between flex-col min-h-screen w-screen">
                  <div className="h-screen min-w-[75vw] p-8 flex flex-col space-y-7 justify-between">
                    <TopBar />
                    <div className="mt-12 space-y-6 opacity-0 animate-fade-in">
                      <div className="text-4xl font-semibold mt-6 flex items-center justify-between space-x-2">
                        <div className="flex flex-col md:flex-row space-x-3">
                          {walletType ? (
                            <p>
                              Generate
                              <span className="uppercase tracking-widest underline text-pink-700">
                                {` ${walletType} `}
                              </span>
                              wallets
                            </p>
                          ) : (
                            <>
                              <span>Generate Waller for</span>
                            </>
                          )}
                          <SelectType />
                        </div>
                        {(inputSeedPhrase || mneomic) && (
                          <ArrowLeft
                            onClick={() => {
                              setInputSeedPhrase(false);
                              setWalletGenerated(false);
                              setMneomonic("");
                              setWallets([]);
                              setPhrase(null);
                            }}
                            className="animate-fade-in text-pink-700"
                            fontWeight={30}
                            size={35}
                          />
                        )}
                      </div>
                      {walletType && !inputSeedPhrase && !mneomic && (
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
                      {inputSeedPhrase && !walletGenerated && (
                        <UserSeedPhrase />
                      )}
                      {(mneomic || walletGenerated) && (
                        <div>
                          <ShowSeedPhrase />
                        </div>
                      )}
                    </div>
                    {(walletGenerated || mneomic) && <Wallets />}
                    <Footer />
                  </div>
                </div>
              </Provider>
            </WalletGeneratedContext.Provider>
          </PhraseContext.Provider>
        </WalletsContext.Provider>
      </WalletTypeContext>
    </MneomoniContext.Provider>
  );
}

export default App;
