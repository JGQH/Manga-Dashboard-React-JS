import tagNames from './resources/tags.json';

const Display = ({data, onClick}) => {
    const { name, name_jp, img, synopsis, tags } = data;
    
    const src = require(`./resources/${img}.jpg`).default;

    return (
        <>
            <div className="display-image">
                <img src={src}/>
                <div className="display-info">
                    <h1 
                    onClick={() => onClick(null)}> {name}</h1>
                    <h3>{name_jp}</h3>
                    <p>{synopsis}</p>
                </div>
            </div>
            <div className="display-tags">
                {tags.map((tag, index) => {
                    return <div key={index}>{tagNames[tag]}</div>
                })}
            </div>
        </>
    );
}

export default Display;