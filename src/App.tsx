import { useState } from "react";
import { TopBar } from "./components/topbar";
import { Button } from "./components/ui/button";
import Provider from "./provider";
import { UserSeedPhrase } from "./components/userSeedPhrase";
import { ArrowLeft } from "lucide-react";

function App() {
  const [inputSeedPhrase, setInputSeedPhrase] = useState(false);

  return (
    <Provider>
      <div className="flex items-center justify-center flex-col h-screen w-screen">
        <div className=" min-h-[40vh]  w-[65vw] p-8 flex flex-col ">
          <TopBar />
          <div className="mt-12 space-y-6 opacity-0 animate-fade-in">
            <div className="text-4xl font-semibold mt-6 flex items-center justify-between space-x-2">
              <span>Generate blockchain wallets</span>
              {inputSeedPhrase && (
                <ArrowLeft
                  onClick={() => setInputSeedPhrase(false)}
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
            {inputSeedPhrase && <UserSeedPhrase />}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
