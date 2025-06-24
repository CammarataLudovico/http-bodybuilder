interface HttpCardProps {
    code: number,
    title: string,
    image: string,
}

const HttpCard = (props: HttpCardProps) => {
    const { code, title, image } = props; // props of the component

    return (
        <div className="card bg-base-100 p-2 sm:p-4 sm:w-72 md:w-60 lg:w-56 shadow-sm flex flex-col items-center justify-center">
            <figure className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                    src={image || 'https://via.placeholder.com/300x225?text=No+Image'}
                    alt={`${code} - ${title}`}
                    className="rounded-xl w-full h-full object-cover" />
            </figure>
            <div className="card-body flex flex-col items-center justify-center text-center">
                <h2 className="card-title text-base sm:text-xl">{code}</h2>
                <p className="text-sm sm:text-base">{title}</p>
                <div className="card-actions flex justify-center">
                </div>
            </div>
        </div>
    )
}

export default HttpCard;