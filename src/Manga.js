const Manga = ({name, url}) => {
    const src = require(`./resources/${url}.jpg`).default;

    return (
        <div className="manga-holder">
            <img className="manga-frame" src={src}></img>
            <h4>{name}</h4>
        </div>
    );
}

export default Manga