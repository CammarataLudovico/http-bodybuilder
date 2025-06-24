interface HttpCardProps {
    code: number,
    title: string,
    image: string,
}

const HttpCard = (props: HttpCardProps) => {
    const { code, title, image } = props; // props of the component

        return (
        <div className="card bg-base-100 p-2 sm:p-4 sm:w-10 md:w-10 l:w-10 xl:w-10 mx-auto w-full shadow-sm">
            <figure className="px-2 pt-2 sm:px-10 sm:pt-10">
                <img
                src={image}
                alt={`${code} - ${title}`}
                className="rounded-xl h-auto object-contain max-h-60 sm:max-h-96" />
            </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-base sm:text-xl">{code}</h2>
            <p className="text-sm sm:text-base">{title}</p>
            <div className="card-actions flex justify-center">
            {/* <button className="btn btn-primary w-full sm:w-auto">Buy Now</button> */}
            </div>
        </div>
        </div>
        )
    }

export default HttpCard;