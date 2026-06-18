import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className, ...props }: InputProps) {
    return(
        <div className={`flex flex-col gap-1.5 ${className || ''}`}>
            <label htmlFor={id} className="text-sm font-semibold text-slate-700">
                {label}
            </label>
            <input
                id={id}
                className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 transition-colors focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                {...props}
            />
        </div>
    );
}