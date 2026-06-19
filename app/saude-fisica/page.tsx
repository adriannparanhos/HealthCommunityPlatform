import { Button } from "../../components/ui/Button";

export default function SaudeFisica() {
  const treinosDisponiveis = [
    { id: 'academia', name: 'Academia', icon: '🏋️‍♂️' },
    { id: 'calistenia', name: 'Calistenia', icon: '🤸' },
    { id: 'jiujitsu', name: 'Jiu-Jitsu', icon: '🥋' },
    { id: 'muaythai', name: 'Muay Thai', icon: '🥊' },
    { id: 'boxe', name: 'Boxe', icon: '🥊' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {}
      <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Performance Física</h1>
          <p className="text-slate-500 text-sm">Monitore sua evolução e supere seus limites.</p>
        </div>
        <div className="flex gap-4">
          <div className="rounded-lg bg-white border border-slate-100 p-4 shadow-sm text-center min-w-[120px]">
            <span className="block text-xs font-bold text-slate-400 uppercase">Meta Semanal</span>
            <span className="text-2xl font-bold text-brand-primary">4/5</span>
          </div>
          <div className="rounded-lg bg-white border border-slate-100 p-4 shadow-sm text-center min-w-[120px]">
            <span className="block text-xs font-bold text-slate-400 uppercase">Health Score</span>
            <span className="text-2xl font-bold text-green-500">8.5</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {}
        <section className="lg:col-span-2 flex flex-col gap-6">
          <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm min-h-[300px] flex flex-col justify-center items-center text-slate-400 border-dashed border-2">
             {}
             <p className="text-sm">Gráfico de Frequência e Volume Semanal</p>
             <p className="text-xs italic">(Aqui usaremos uma biblioteca como Chart.js ou Recharts)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-2">Minhas Metas</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 italic">Perder 2kg de gordura</span>
                  <span className="text-brand-primary font-bold">70%</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 italic">Graduar no Jiu-Jitsu</span>
                  <span className="text-brand-primary font-bold">Em curso</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5">
              <h3 className="font-bold text-brand-primary mb-2 flex items-center gap-2">
                🤖 Dica da IA
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Baseado no seu relato de estresse ontem, hoje seria ideal focar em um treino de **Calistenia leve** ou **Alongamento**, em vez de musculação pesada.
              </p>
            </div>
          </div>
        </section>

        {}
        <aside className="flex flex-col gap-6">
          <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-800 mb-4">Registrar Treino de Hoje</h2>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {treinosDisponiveis.map((treino) => (
                <button 
                  key={treino.id}
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-100 hover:border-brand-primary hover:bg-brand-primary/5 transition-all gap-1"
                >
                  <span className="text-xl">{treino.icon}</span>
                  <span className="text-xs font-semibold text-slate-700">{treino.name}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase">Duração (minutos)</label>
                <input type="number" placeholder="60" className="rounded-md border border-slate-200 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary" />
              </div>
              <Button className="w-full">Finalizar Registro</Button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}