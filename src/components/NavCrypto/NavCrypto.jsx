import React from 'react';
import './NavCrypto.css';
import DropDown from './DropDown';

function NavCrypto() {
    let options = {
        "Cryptocurrecies": null, 
        "Products": {
            "Where to buy": null, 
            "Mobile Apps": null,
            "Interest": null,
            "Jobs Board": null,
        },
        "Learn": {
            "Crypto basics": null, 
            "How-to Guide": null,
            "Glossary": null,
            "FAQ": null
        },
        "Home": null,
        "About": null,
        "Log In": null

    }

    return (
        <nav className="header">

            <DropDown options = {options}/>
	
		</nav>
    )
}




export default NavCrypto
