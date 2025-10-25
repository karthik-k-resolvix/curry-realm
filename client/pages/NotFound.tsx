import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-secondary/50">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-2">404</h1>
        <p className="text-lg text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium soft-transition hover:opacity-90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
