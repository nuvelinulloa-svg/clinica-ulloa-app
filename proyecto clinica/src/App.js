import React, { useState, useEffect } from 'react';
import { Calendar, MessageSquare, User, Activity, LogIn, ChevronRight } from 'lucide-react';

export default function App() {
  const [view, setView] = useState('home');
  const [adminTimer, setAdminTimer] = useState(null);

  // Lógica para entrar al panel oculto
  const startTimer = () => setAdminTimer(setTimeout(() => setView('admin'), 3000));
  const stopTimer = () => { if(adminTimer) clearTimeout(adminTimer); };

  return (
    <div className="max-w-md mx-auto h-screen bg-white shadow-xl overflow-hidden">
      {view === 'home' && (
        <div className="p-6">
          <img 
            src="logo_clinica.png" 
            className="w-20 mb-4 cursor-pointer" 
            onMouseDown={startTimer} onTouchStart={startTimer} 
            onMouseUp={stopTimer} onTouchEnd={stopTimer}
          />
          <h1 className="text-2xl font-bold text-blue-900">Clínica Fernández Ulloa</h1>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button onClick={() => setView('booking')} className="p-6 bg-blue-700 text-white rounded-2xl flex flex-col items-center gap-2">
              <Calendar /> <span>Cita Online</span>
            </button>
            <button onClick={() => setView('chat')} className="p-6 bg-teal-600 text-white rounded-2xl flex flex-col items-center gap-2">
              <MessageSquare /> <span>Urgencias</span>
            </button>
          </div>
        </div>
      )}

      {view === 'admin' && (
        <div className="p-6 bg-slate-900 text-white h-full">
          <h2 className="text-xl font-bold text-blue-400">Panel de Control API</h2>
          <p className="text-xs mt-2">Usa este panel para testear la conexión con Salus.</p>
          <button onClick={() => setView('home')} className="mt-4 text-xs text-slate-400 underline">Volver al inicio</button>
        </div>
      )}
    </div>
  );
}