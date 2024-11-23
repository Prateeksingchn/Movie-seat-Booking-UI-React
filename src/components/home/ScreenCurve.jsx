const ScreenCurve = () => (
    <div className="relative w-full mb-16">
        <svg
            className="w-full"
            height="60"
            viewBox="0 0 800 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M 0 50 Q 400 0 800 50"
                stroke="url(#screenGradient)"
                strokeWidth="2"
                fill="none"
            />
            <defs>
                <linearGradient id="screenGradient" x1="0" y1="0" x2="800" y2="0">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="20%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                    <stop offset="80%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </linearGradient>
            </defs>
        </svg>
        <div className="absolute w-full text-center top-full mt-4">
            <span className="text-gray-400 tracking-[0.5em] text-sm">S C R E E N</span>
        </div>
    </div>
);

export default ScreenCurve; 