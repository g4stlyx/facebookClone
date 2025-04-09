import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

// Helper component to handle the redirect logic after 404 redirect
function SpaRedirectHandler({ children }) {
  const navigate = useNavigate();
  const location = useLocation(); // Use location to access search params

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const path = params.get('p'); // Get the path from 'p' parameter
    const query = params.get('q'); // Get the query string from 'q' parameter

    if (path) {
      // Decode the path and query strings
      const decodedPath = path.replace(/~and~/g, '&');
      const decodedQuery = query ? '?' + query.replace(/~and~/g, '&') : '';
      
      // Construct the full intended path including hash
      const fullPath = decodedPath + decodedQuery + location.hash;

      // Use navigate to go to the intended path, replacing the current 
      // history entry (which is the root path with query params)
      // so the back button works correctly.
      navigate(fullPath, { replace: true });
    }
    // Only run this effect if the search params change (effectively once on load)
  }, [location.search, location.hash, navigate]); 

  // Don't render children until the redirect check is potentially done
  // or if there's no 'p' parameter (normal navigation)
  const params = new URLSearchParams(location.search);
  if (params.has('p')) {
    // Optionally return a loading indicator while navigating
    return null; // or <p>Loading...</p>
  }

  return children; // Render the actual App component
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // No strict mode shown in original, but generally recommended for development
  // <React.StrictMode> 
  <BrowserRouter>
    <SpaRedirectHandler>
      <App />
    </SpaRedirectHandler>
  </BrowserRouter>
  // </React.StrictMode>
);