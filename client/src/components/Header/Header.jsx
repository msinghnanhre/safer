import './Header.scss'

import { Link } from 'react-router-dom'


// function Header({ defaultPrevent }) {
//     return (
//         <header className="header">
//             <Link to="/"><img className="header__logo" src={Logo} alt="Safer logo"/></Link>
//             <form className="header__form" onSubmit={defaultPrevent}>
             
//                 <div className="header__form-bottom">
//                     <Link to="/upload" className="header__button" type="submit" >
//                         <img className="header__uploadImg" src={Upload} alt="Safer seaerch icon"/>
//                         Location
//                     </Link>
//                     <Link to="/upload" className="header__button" type="submit" >
//                         <img className="header__uploadImg" src={Upload} alt="Safer seaerch icon"/>
//                         Healthcare Provider
//                     </Link>
//                     <Link to="/upload" className="header__button" type="submit" >
//                         <img className="header__uploadImg" src={Upload} alt="Safer seaerch icon"/>
//                         Annual
//                     </Link>
//                     <div className="header__mohan"></div>
//                 </div>
//             </form>
//         </header>
//     )
// }
// export default Header

function Header() {
    return (
        <header className="header">
            <Link className = "header__logo" to="/">SAFER</Link>
            <form className="header__form">
             
                <div className="header__form-bottom">
                    <Link  className="header__button" type="submit" >
                        
                        Location
                    </Link>
                    <Link  className="header__button" type="submit" >
                        Healthcare Provider
                    </Link>
                    <Link  className="header__button" type="submit" >
                        Annual
                    </Link>
                </div>
            </form>
        </header>
    )
}
export default Header