import Logo from '../assets/images/logo.png';
import '../styles/home.scss';

import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="containerImagem">
            <div className="containerLogo">
                <img src={Logo} alt="Logo do Star Wars com cor amarela" />
            </div>
            <div className="break"></div>
            <div className="containerButtons">
                <Link to="/filmes">
                    { <Button title="Filmes" /> }
                </Link>
                <Link to="/personagens">
                    { <Button title="Personagens" /> }
                </Link>
                <Link to="/planetas">   
                    { <Button title="Planetas" /> }
                </Link>
                <Link to="/especies">
                    { <Button title="Espécies" /> }
                </Link>
                <Link to="/naves">
                    { <Button title="Naves" /> }
                </Link>
                <Link to="/veiculos">    
                    { <Button title="Veículos" /> }
                </Link>
            </div>
        </div>
    )
}