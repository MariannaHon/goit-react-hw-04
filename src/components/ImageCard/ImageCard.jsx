

const ImageCard = ({ data: { urls, alt_description, description, likes } }) => {
    return (
        <>
            <div>
                <img src={urls.small} alt={alt_description} />
            </div>
            <div>
                <p>{description}</p>
                <p>{likes}</p>
            </div>
        </>
    )
}

export default ImageCard;