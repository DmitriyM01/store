import { Link } from 'react-router-dom';

import styles from '../../styles/Footer.module.css'

import { ROUTES } from '../../utils/routes'

import logo from '../../images/logo.svg';

const Footer = () => {
    return (
        <section className={styles.footer}>

            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by <a href="https://github.com/DmitriyM01" target='_blank' rel="noreferrer">Dmitrii</a>
            </div>

            <div className={styles.socials}>

                <a
                    href="https://www.instagram.com"
                    target='_blank'
                    rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>

                <a
                    href="https://facebook.com"
                    target='_blank'
                    rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>

                <a
                    href="https://www.youtube.com"
                    target='_blank'
                    rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>

            </div>
        </section>
    )
}

export default Footer;