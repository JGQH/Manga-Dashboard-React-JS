const Manga = ({name, url, responsive}) => {
    const src = require(`./resources/${url}.jpg`).default;

    return (
        <div className="manga-holder">
            <img className="manga-frame" src={src}></img>
            {responsive ? (<h3>{name}</h3>) : (<h5>{name}</h5>)}
        </div>
    );
}

export default Manga