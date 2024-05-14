
import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ fetchMore }) => {
    return (
        <>
            <button className={css.btn} onClick={fetchMore}>Load more</button>
        </>
    )
}

export default LoadMoreBtn;