export function Footer() {
    return(
        <footer className="w-full border-t border-slate-200 bg-white py-8">
            <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} MindHealth. Todos os direitos reservados.</p>
            </div>
        </footer>
    );

}