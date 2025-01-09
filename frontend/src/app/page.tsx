'use client';
import { redirect } from 'next/navigation';

export default function Page() {
    return (
        <div>
            <h1>Page</h1>
            <button className="bg-slate-200 p-3" onClick={() => redirect('/home')}>
                Go to Home
            </button>
        </div>
    );
}
