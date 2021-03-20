import './styles.css'
import { ReactComponent as Youtube } from './youtube.svg'
import { ReactComponent as Insta } from './instagram.svg'
import { ReactComponent as Likedin } from './linkedin.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido pela Nossa Tecnologia
            <div className="footer-icon">
                <a href="https://github.com/wlbruno" target="_new">
                    <Youtube />
                </a>
                <a href="https://github.com/wlbruno" target="_new">
                    <Insta />
                </a>
                <a href="https://github.com/wlbruno" target="_new">
                    <Likedin />
                </a>
            </div>
        </footer>
    )
}


export default Footer;