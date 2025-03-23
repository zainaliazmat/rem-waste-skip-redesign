import { useState } from "react";
import SkipSelect from "./components/Organisms/SkipSelect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkipSelect />
    </QueryClientProvider>
  );
}

export default App;
