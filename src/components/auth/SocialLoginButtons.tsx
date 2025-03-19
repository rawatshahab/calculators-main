
import React from "react";
import { Button } from "@/components/ui/button";

export function SocialLoginButtons() {
  return (
    <div className="space-y-4">
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full" type="button">
          Google
        </Button>
        <Button variant="outline" className="w-full" type="button">
          GitHub
        </Button>
      </div>
    </div>
  );
}
