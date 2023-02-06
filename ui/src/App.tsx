import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    window.location.href = "http://localhost:8443";
  }, []);
  return (
    <>
      <p>Loading...</p>
    </>
  );
}
