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

/*
<ul className="nav">
<li className= "desktop"><a href="*">Cryptocurrecies</a></li>
<li className= "desktop"><a href="*">Products</a>
    <ul>
        <li><a href="*">Where to buy</a></li>
        <li><a href="*">Mobile Apps</a></li>
        <li><a href="*">Interest</a></li>
        <li><a href="*">Jobs Board</a>
        
        </li>
    </ul>
</li>
<li className= "desktop"><a href="*">Learn</a>
    <ul>
        <li><a href="*">Crypto basics</a></li>
        <li><a href="*">How-to Guide</a></li>
        <li><a href="*">Glossary</a></li>
        <li><a href="*">FAQ</a></li>
    </ul>
</li>
<li><a href="*">Home</a></li>
<li><a href="*">About</a></li>
<li><a href="*">Log In</a></li>
</ul>*/