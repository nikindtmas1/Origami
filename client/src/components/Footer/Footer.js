import style from './Footer.module.css';

const Footer = () => {

    return (
        <footer className="footer">
            <ul>
              <li className={style.listItem}><img src="white-origami-bird.png" alt="white-origami" /></li>
                <li className={style.listItem}>
                    <a href="#">Going to 1</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 2</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 3</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 4</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 5</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 6</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 7</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 8</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 9</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 10</a>
                </li>
                <li className={style.listItem}>
                    <a href="#">Going to 11</a>
                </li>
                <li className={style.listItem}><im src="blue-origami-bird-flipped.png" alt="blue-origami-bird"></im></li>
            </ul>
            <p>Software university &copy; 2019</p>
        </footer>
    );
};

export default Footer;