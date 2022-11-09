import { useEffect } from "react";
import { userObserver } from "./auth/firebase";
import AuthContexProvider from "./context/AuthContexProvider";
import AppRouter from "./router/AppRouter";

function App() {
  useEffect(() => {
    userObserver();
  }, []);

  return (
    <div>
      <AuthContexProvider>
        <AppRouter />
      </AuthContexProvider>
    </div>
  );
}

export default App;
