
export default function Cube({
    color
}) {
    return (
        <>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9267 15.5398L23.3239 11.2708L15.9267 7L8.5293 11.2708L15.9267 15.5398Z" fill={color} />
                <path d="M15.3973 16.4567L8 12.1877V20.7292L15.3973 25.0001V16.4567Z" fill={color} />
                <path d="M16.4561 16.4567V25.0001L23.8532 20.7292V12.1877L16.4561 16.4567Z" fill={color} />
            </svg>
        </>
    )
}