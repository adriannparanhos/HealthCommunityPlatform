export function Features() {
  // Atualizando a proposta de valor para refletir comunidade e saúde integral
  const featuresList = [
    {
      title: "Comunidade Acolhedora",
      description: "Compartilhe seus desafios e conquistas diárias com pessoas que te entendem e apoiam."
    },
    {
      title: "Saúde Física e Mental",
      description: "Um ecossistema completo para registrar e celebrar tanto seus treinos quanto seus sentimentos."
    },
    {
      title: "Conexões Reais",
      description: "Interaja com relatos inspiradores e construa uma rede de apoio para uma vida mais equilibrada."
    }
  ];

  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center md:grid-cols-3">
        
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