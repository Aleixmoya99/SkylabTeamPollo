import React from 'react';
import './DropDown.css';


function DropDown({options, ulClassName, liClassName}) {
    let ulClass = ulClassName;
    let liClass = liClassName;
   

    return (
        <>
            <ul className={ulClass}>
                {Object.keys(options).map((optionKey, index) => {
                    
                    let value = options[optionKey];
                    if (value === null){
                        return <li className={liClass}><a href="*">{optionKey}</a></li>
                    }
                    else {
                        return <>
                                    <li className={liClass}><a href="*">{optionKey}</a>
                                    <DropDown options = {value}/>
                                    </li>
                                    
                                </>
                    }
                })}
            </ul> 
            
        </>
    );

}


export default DropDown




/*
function DropDown({options, nestedDropDown}) {
    let ulClassName = "nav";
    let liClassName = "desktop";
    if (nestedDropDown) {
        ulClassName = "";
        liClassName = "";
    }

    return (
        
            <ul className={ulClassName}>
                {Object.keys(options).map((optionKey, index) => {
                    
                    let value = options[optionKey];
                    if (value === null){
                        return <li className={liClassName}><a href="*">{optionKey}</a></li>
                    }
                    else {
                        return <li className={liClassName}><a href="*">{optionKey}</a>
                                    <DropDown options = {value} nestedDropDown = {true}/>
                                </li>
                    }
                })}
            </ul> 
    
    );

}*/