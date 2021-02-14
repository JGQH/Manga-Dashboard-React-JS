import { useState, useEffect, useRef } from 'react';
import resources from './resources/resources.json';
import Manga from './Manga'

const App = () => {
  const mangas = resources.data;
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);

  const dashboard = useRef(null);
  useEffect(() => {
    const width = dashboard.current.offsetWidth;
    if(width <= 320) {
      setPageSize(2);
    }else if(width <= 640) {
      setPageSize(4);
    }else{
      setPageSize(5);
    }
  }, [dashboard])
  return (
    <>
    <div className="manga-dashboard" ref={dashboard}>
      {mangas.slice(page * pageSize, page * pageSize + pageSize).map((data, index) => {
        return <Manga key={index} name={data.nombre} url={data.img} responsive={pageSize == 5} />
      })}
    </div>
    <div className="manga-pages">
      {Array.from(Array(Math.ceil(mangas.length / pageSize)), (e, i) => {
        return <button key={i} onClick={() => setPage(i)}>{i + 1}</button>
      })}
    </div>
    </>
  );
}

export default App;