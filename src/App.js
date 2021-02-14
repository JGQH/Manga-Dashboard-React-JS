import { useState, useEffect, useRef } from 'react';
import resources from './resources/resources.json';
import Manga from './Manga';
import Display from './Display';

const App = () => {
  const mangas = resources.data;
  const [pageSize, setPageSize] = useState(5);
  const [manga, setManga] = useState(null);
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
    {
      (manga == null) ?
      <>
        <div className="manga-dashboard" ref={dashboard}>
          {mangas.slice(page * pageSize, page * pageSize + pageSize).map((data, index) => {
            return <Manga key={index} data={data} responsive={pageSize == 5} onClick={setManga}/>
          })}
        </div>
        <div className="manga-pages">
          {Array.from(Array(Math.ceil(mangas.length / pageSize)), (e, i) => {
            return <button className="manga-button" key={i} onClick={() => setPage(i)}>{i + 1}</button>
          })}
        </div>
      </>
      :
      <div className="manga-display">
        <Display data={manga} onClick={setManga}/>
      </div>
    }
    </>
  );
}

export default App;