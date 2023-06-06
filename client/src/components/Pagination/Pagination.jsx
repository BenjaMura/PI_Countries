/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import stylesPagination from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, numberPage } from "../../redux/actions";
import { useEffect } from "react";

const Pagination = ({pages}) => {
    
    const { numPage } = useSelector((state) => state);
    
    const dispatch = useDispatch();

    useEffect(() => {
        renderPrevPageNumbers();
        renderNextPageNumbers();
    }, [numPage]);

    const next = () => {
        dispatch(nextPage());
    };
    const prev = () => {
        dispatch(prevPage());
    };
    const page = (number) => {
        dispatch(numberPage(number));
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= pages; i++) {
            pageNumbers.push(
                <button
                  onClick={() => page(i)}
                  className={stylesPagination.btnNum}
                  key={i}
                >
                  {i}
                </button>
            );
        }
        return pageNumbers;
    };

    const renderPrevPageNumbers = () => {
        return renderPageNumbers().filter((pageNumber) => pageNumber.key < numPage && pageNumber.key > numPage - 3);
    };
    const renderNextPageNumbers = () => {
        return renderPageNumbers().filter((pageNumber) => pageNumber.key > numPage && pageNumber.key < numPage + 3);
    };

    return (
        <div className={stylesPagination.divPag}>
            {numPage > 1 && (
                <div className={stylesPagination.divbtn}>
                    <button className={stylesPagination.btnPN} onClick={prev}>
                        ⬅️ Prev
                    </button>
                </div>
            )}
            {renderPrevPageNumbers()}
            <h2 className={stylesPagination.h2}>{numPage}</h2>
            {renderNextPageNumbers()}
            {numPage < pages && (
                <div className={stylesPagination.div}>
                    <button className={stylesPagination.btnPN} onClick={next}>
                        Next ➡️
                    </button>
                </div>
            )}
        </div>
    );
};

export default Pagination;