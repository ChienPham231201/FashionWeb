import "../scss/AboutPage.scss"
import { about1, about2 } from '../assets/img';

const AboutPage = () => {
    return (
        <>
            <div className="BackGround">
                <p className="Name">Về chúng tôi</p>
            </div>
            <div>
                <h1>Cau chuyen</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sit eligendi sunt veritatis facere, repellat qui magnam,
                    commodi, sint repellendus expedita sed tempora ratione earum
                    dolorem! Necessitatibus at laborum inventore similique.
                </p>
                <img src={about1} alt="cc" ></img>
            </div>
            <div>
                <h1>Cau chuyen</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sit eligendi sunt veritatis facere, repellat qui magnam,
                    commodi, sint repellendus expedita sed tempora ratione earum
                    dolorem! Necessitatibus at laborum inventore similique.
                </p>
                <img src={about2} alt="cc" ></img>
            </div>
        </>
    )
}
export default AboutPage;