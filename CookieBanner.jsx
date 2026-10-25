import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white text-sm p-4 flex items-center justify-between">
      <span>Usamos cookies para mejorar tu experiencia.</span>
      <button
        onClick={acceptCookies}
        className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
      >
        Aceptar
      </button>
    </div>
  );
}
