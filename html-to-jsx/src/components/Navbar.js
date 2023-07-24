import React from 'react';

/**
 * This componet will contain features for navigation bar
 * @returns {JSX.Element} - A JSX element shows navigation bar.
 */
export default function Navbar(props) {

    // demo method (should be deleted before commit)
    const demoMethod = () => {

    }

    // create an object for dark mode
    const darkColor = {
        color: 'white',
        backgroundColor: '#244242',
    }

    const lightColor = {
        color: 'black',
        backgroundColor: 'whitesmoke',
    }

    return (
        <>
            <nav className={`navbar justify-content-between`} style={props.colorMode === 'dark' ? darkColor : lightColor}>
                <a className={`navbar-brand text-${props.colorMode === 'light' ? 'dark' : 'light'}`}><strong>HTML to JSX</strong></a>
                <div className="my-2 my-sm-0">

                    {/* light mode (ternary operator used here)*/}
                    <div onClick={props.changeColorMode}>
                        {props.colorMode === 'light'
                            ? <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#B8860B" className="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
                                    <path fill="#B8860B" d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                    <path fill="#708090" d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                                </svg>
                            </div>

                            : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#708090" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                                <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                            </svg>}
                    </div>

                </div>

            </nav>
        </>
    )
}
