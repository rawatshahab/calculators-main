
import { Link } from "react-router-dom";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { SignUpDecoration } from "@/components/auth/SignUpDecoration";
import { SocialLoginButtons } from "@/components/auth/SocialLoginButtons";

export default function SignUp() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left side - Image/Decoration */}
      <SignUpDecoration />
      
      {/* Right side - Form */}
      <div className="flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div className="space-y-6">
            <div>
              <Link to="/" className="text-xl font-bold tracking-tight transition-all duration-300 hover:opacity-80">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  ToDo
                </span>
                <span>Calculator</span>
              </Link>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                Create an account
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/sign-in" className="font-medium text-primary hover:text-primary/90 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>

            <SignUpForm />
            <SocialLoginButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
