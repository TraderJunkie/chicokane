import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

interface PasswordGateProps {
  children: React.ReactNode;
  password: string;
}

const PasswordGate = ({ children, password }: PasswordGateProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">CHICO KANE</h1>
          <p className="text-muted-foreground">This site is password protected</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter password"
            value={inputPassword}
            onChange={(e) => {
              setInputPassword(e.target.value);
              setError(false);
            }}
            className={`text-center ${error ? "border-red-500" : ""}`}
          />
          {error && (
            <p className="text-red-500 text-sm">Incorrect password</p>
          )}
          <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white">
            Enter Site
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
