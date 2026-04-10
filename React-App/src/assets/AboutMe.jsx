import '../App.css';

export function AboutMe(){
    return (
        <section className="aboutMe">
            <img className="aboutMe_img"src="./basketball.avif" alt="" />
            <div>
                <h2 className="aboutMe_title">About Me</h2>
                <p className="aboutMe_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo dicta, voluptatum dolor veniam veritatis recusandae possimus 
                    suscipit dolores distinctio rem corrupti eum optio aspernatur,
                    accusantium reiciendis porro illum expedita repellendus?
                </p>
            </div>
        </section>
    )
}