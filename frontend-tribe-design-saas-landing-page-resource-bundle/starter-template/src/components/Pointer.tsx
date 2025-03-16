export default function Pointer({
    name,
    className,
}: {
    name: string;
    className?: string;
}) {
    return (
        <div className="pointer-container">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mouse-pointer text-white size-5"
            >
                <path d="M3 3 L10 21 L13 15 L18 18 L13 13 L18 8 Z" />
            </svg>

            {/* Apply dynamic className + default styles */}
            <div
                className={`inline-flex rounded-full font-bold text-sm px-2 rounded-tl-none ${className}`}
            >
                {name}
            </div>
        </div>
    );
}
