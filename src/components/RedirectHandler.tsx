import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if we have a redirect stored from 404.html
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem('redirect');
      // Navigate to the stored path - this ensures React Router handles it
      if (redirect !== location.pathname) {
        navigate(redirect, { replace: true });
      }
      return;
    }

    // Also check if window.location.pathname doesn't match React Router's location
    // This handles cases where the URL was changed but React Router didn't update
    const currentPath = window.location.pathname;
    if (currentPath !== location.pathname && currentPath !== '/') {
      navigate(currentPath, { replace: true });
    }
  }, [navigate, location.pathname]);

  return null;
}
