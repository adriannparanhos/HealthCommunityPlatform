import { Button } from "../../components/ui/Button";

export default function Feed() {
  // Mock de dados (fingindo que vem do banco) para visualizarmos o layout
  const posts = [
    { id: 1, user: "Ana Silva", content: "Hoje completei 5km de corrida! Me sentindo renovada fisicamente e com a mente leve. 🏃‍♀️✨", type: "Saúde Física" },
    { id: 2, user: "Marcos Oliveira", content: "Às vezes é difícil falar, mas compartilhar aqui me ajuda. Tive um dia produtivo após uma manhã de meditação.", type: "Saúde Mental" },
  ];

  return (
    <div className="mx-auto flex max-w-6xl gap-6 px-4 py-8">
      
      {/* COLUNA ESQUERDA: Status do Usuário */}
      <aside className="hidden w-64 flex-col gap-6 md:flex">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="font-bold text-slate-800">Meu Resumo</h2>
          <div className="mt-4 flex flex-col gap-3">
            <div className="text-sm text-slate-600">
              <span className="block font-medium">Humor de hoje:</span>
              <span className="text-brand-primary font-bold">Radiante ✨</span>
            </div>
            <div className="text-sm text-slate-600">
              <span className="block font-medium">Atividade Física:</span>
              <span className="text-green-600 font-bold">Meta batida ✅</span>
            </div>
          </div>
        </div>
      </aside>

      {/* COLUNA CENTRAL: Feed e Postagem */}
      <main className="flex-1 flex flex-col gap-6">
        
        {/* Caixa de Nova Postagem */}
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <textarea 
            placeholder="Como você está hoje? Compartilhe um momento ou desabafo..." 
            className="w-full resize-none border-none bg-slate-50 p-3 text-slate-900 focus:ring-0 rounded-lg text-sm"
            rows={3}
          />
          <div className="mt-3 flex justify-between items-center border-t border-slate-50 pt-3">
            <span className="text-xs text-slate-400 font-medium">Foco: Mente & Corpo</span>
            <Button size="sm" className="px-6 py-1.5 text-sm">Postar</Button>
          </div>
        </div>

        {/* Listagem de Posts (Feed) */}
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <article key={post.id} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-xs font-bold text-brand-primary">
                  {post.user[0]}
                </div>
                <span className="font-semibold text-slate-800">{post.user}</span>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 uppercase font-bold tracking-wider">
                  {post.type}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">{post.content}</p>
            </article>
          ))}
        </div>
      </main>

      {/* COLUNA DIREITA: IA e Destaques */}
      <aside className="hidden w-72 flex-col gap-6 lg:flex">
        <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5">
          <h3 className="text-sm font-bold text-brand-primary flex items-center gap-2">
            ✨ Insight da IA
          </h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Notei que a comunidade está muito ativa em temas de superação hoje. Que tal compartilhar uma pequena vitória sua?
          </p>
        </div>
      </aside>

    </div>
  );
}