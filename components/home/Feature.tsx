export function Features() {
  const featuresList = [
    {
      title: "Diário Inteligente",
      description: "Desabafe em um ambiente seguro e organizado."
    },
    {
      title: "Análise com IA",
      description: "Descubra padrões ocultos nas suas emoções."
    },
    {
      title: "Dashboard Pessoal",
      description: "Acompanhe sua evolução através de gráficos claros."
    }
  ];

  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center md:grid-cols-3">
        
        {}
        {featuresList.map((feature) => (
          <div 
            key={feature.title} 
            className="rounded-xl border border-slate-100 p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="mb-3 text-xl font-bold text-slate-800">{feature.title}</h3>
            <p className="text-slate-600">{feature.description}</p>
          </div>
        ))}

      </div>
    </section>
  );
}