export default function ErrorForm({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-3 mt-3 text-white font-roboto font-2xl font-bold uppercase text-center bg-red-700">
            {children}
        </div>
    );
}
