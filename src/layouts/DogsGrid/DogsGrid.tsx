import { useContext, useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ModalContext from '../../context/modalContext';
import './DogsGrid.scss';

interface DogsGridProps {
  itemsPerPage: number;
}

const DogsGrid = ({ itemsPerPage }: DogsGridProps) => {
  const modalCtx = useContext(ModalContext);
  const { dogData } = modalCtx;
  const Items = ({ currentItems }: any) => {
    return (
      <>
        {currentItems &&
          currentItems.map((item: any) => (
            <div
              onClick={() => modalCtx.selectBreed(item.name)}
              key={item.id}
              className="dog-item"
            >
              <div className="dog-item__overlay">
                <h3>{`${item.name}`}</h3>
              </div>
              <img src={item.image.url} alt="Dog" />
            </div>
          ))}
      </>
    );
  };

  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % dogData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(dogData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dogData.length / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage]);

  return (
    <section className="dogs-grid">
      <Items currentItems={currentItems} />
      <ReactPaginate
        activeClassName="active-page"
        onPageChange={handlePageClick}
        pageCount={pageCount}
      />
    </section>
  );
};

export default DogsGrid;
