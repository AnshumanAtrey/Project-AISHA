import { useState } from "react";
import BackgroundBeams from "../src/components/ui/bgbeam";
import BottomGradient from "../src/components/ui/buttongra";
import MultiStepLoader from "./components/ui/multiload";
import axios from "axios";

function App() {
  const [api, setApi] = useState(""); // initialize api state with an empty string
  const [url, setUrl] = useState(""); // initialize url state with an empty string
  const [step, setStep] = useState(1); // State to track the current step
  const [loading, setLoading] = useState(false);
  // const [result, setResult] = useState(""); // initialize result state

  const handleApiSubmit = (event) => {
    event.preventDefault();
    setStep(2);
    console.log("API Key:", api);
  };

  const handleUrlSubmit = (event) => {
    event.preventDefault();
    setStep(3);
    setLoading(true);
    generateResult();
  };

  const loadingStates = [
    {
      text: "Analyzing URL",
    },
    {
      text: "Running Scans",
    },
    {
      text: "He makes soap",
    },
    {
      text: "We goto a bar",
    },
    {
      text: "Start a fight",
    },
    {
      text: "Sending data to Gemini",
    },
    {
      text: "Getting back bug report...",
    },
  ];

  async function generateResult() {
    console.log("loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api}",
      method: "post",
      data: {
        contents: [{ parts: [{ text: "Scanned data" }] }],
      },
    });
    console.log(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }

  return (
    <>
      {/* Step 1 : Get API */}
      {step === 1 && (
        <div className="h-screen max-w-lg mx-auto rounded-md flex flex-col items-center justify-center antialiased">
          <p>Autonomous Internet Security Health Analyzer</p>
          <h1>Project AISHA</h1>
          <input
            type="text"
            placeholder="Enter your API Key"
            value={api}
            onChange={(e) => setApi(e.target.value)}
          />

          <button
            className="z-10 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full rounded-b-lg h-10 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={handleApiSubmit}
          >
            Verify
            <BottomGradient />
          </button>
          <p>
            Find your{" "}
            <a target="_blank" href="https://aistudio.google.com/app/apikey">
              API Key
            </a>{" "}
            here.
          </p>
        </div>
      )}

      {/* Step 2 : Get URL */}
      {step === 2 && (
        <div className="h-screen max-w-lg mx-auto rounded-md flex flex-col items-center justify-center antialiased">
          <p>Enter the website URL</p>
          <input
            type="text"
            placeholder="Enter Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            className="z-10 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full rounded-b-lg h-10 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={handleUrlSubmit}
          >
            Generate Report
            <BottomGradient />
          </button>
        </div>
      )}
      {/* Step 3 : Show Loading Screen */}
      {step === 3 && (
        <div className="h-screen max-w-lg mx-auto rounded-md flex flex-col items-center justify-center antialiased">
          <MultiStepLoader
            loadingStates={loadingStates}
            loading={loading}
            duration={2000}
          />
        </div>
      )}
      {/* Step 4 : Show Result  */}
      {step === 4 && (
        <div className="h-screen max-w-lg mx-auto rounded-md flex flex-col items-center justify-center antialiased"></div>
      )}
      <BackgroundBeams />
    </>
  );
}

export default App;
