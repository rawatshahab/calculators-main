
import React from "react";

export function SignUpDecoration() {
  return (
    <div className="relative hidden w-0 flex-1 lg:block">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/10">
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="w-full max-w-lg p-8 bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Join our community today</h3>
              <p className="text-muted-foreground">
                Create an account to unlock all features, sync across devices, and join thousands 
                of users who boost their productivity with ToDoCalculator.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-gray-100 rounded-lg animate-pulse"></div>
                <div className="h-24 bg-gray-100 rounded-lg animate-pulse"></div>
                <div className="h-24 bg-gray-100 rounded-lg animate-pulse"></div>
                <div className="h-24 bg-gray-100 rounded-lg animate-pulse"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-100 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-yellow-100 rounded-full border-2 border-white"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join 10,000+ users already using ToDoCalculator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
