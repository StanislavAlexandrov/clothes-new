const CardDaisy = ({ name }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl ">
            <figure>
                <img
                    src="https://api.lorem.space/image/album?w=400&h=400"
                    alt="Album"
                ></img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default CardDaisy;
