import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner@2.0.3";
import { AuthProvider } from "./components/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
