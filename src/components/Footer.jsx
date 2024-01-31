import trees from '../assets/bottom-trees.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return (
		<div className='footer'>
			<img className="footer-trees" src={trees} alt='' style={{width: '100%', fill: "#fff"}}/>
			<a className="footer-links portfolio" href='https://littlebugbest.com'>Aloe - littlebugbest.com</a>
			<span className='logos'>
			<a className="footer-links" href='https://github.com/eonflower' ><FontAwesomeIcon icon={faGithub}/></a>
			<a className="footer-links" href='https://linkedin.com/in/aloenelson' ><FontAwesomeIcon icon={faLinkedin}/></a>
			</span>
		</div>
	)
}
