export default function GridContainer({ children, id }: any) {
    return (
        <>
            <div id={id} className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 max-w-6xl mx-auto justify-center xl:px-16 lg:px-8 md:px-12 px-4 pb-20`}>
                {children}
            </div>
        </>
    )
}