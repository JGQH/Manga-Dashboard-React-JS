const Manga = ({data, responsive, onClick}) => {
    const { name, img } = data;
    const src = require(`./resources/${img}.jpg`).default;

    return (
        <div className="manga-holder" onClick={() => onClick(data)}>
            <img className="manga-frame" src={src}></img>
            {responsive ? (<h3>{name}</h3>) : (<h5>{name}</h5>)}
        </div>
    );
}

export default Manga