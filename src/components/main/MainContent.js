export default function MainContent({ children }) {
    return (
        <div className="h-screen w-screen bg-white grid grid-cols-4 grid-rows-2 overflow-hidden">
            {children}
        </div>
    );
}
