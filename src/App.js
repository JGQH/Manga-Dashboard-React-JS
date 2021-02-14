import resources from './resources/resources.json';
import Manga from './Manga'

const App = () => {
  const mangas = resources.data;
  return (
    <>
    {mangas.map((data, index) => {
      return <Manga key={index} name={data.nombre} url={data.img}/>
    })}
    </>
  );
}

export default App;