import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner@2.0.3";

interface AuthContextType {
  // Main platform account (renters, homeowners, agents, property managers, admin)
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
  // Affiliate account — fully independent from the platform account above
  isAffiliateSignedIn: boolean;
  affiliateSignIn: (name?: string) => void;
  affiliateSignOut: () => void;
  affiliateName: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAffiliateSignedIn, setIsAffiliateSignedIn] = useState(false);
  const [affiliateName, setAffiliateName] = useState<string | null>(null);

  const signIn = () => {
    setIsSignedIn(true);
    toast.success("Signed in successfully");
  };

  const signOut = () => {
    setIsSignedIn(false);
    toast.success("Signed out successfully");
  };

  const affiliateSignIn = (name?: string) => {
    setIsAffiliateSignedIn(true);
    if (name) setAffiliateName(name);
    toast.success("Signed in to your affiliate account");
  };

  const affiliateSignOut = () => {
    setIsAffiliateSignedIn(false);
    setAffiliateName(null);
    toast.success("Signed out of your affiliate account");
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        signIn,
        signOut,
        isAffiliateSignedIn,
        affiliateSignIn,
        affiliateSignOut,
        affiliateName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
