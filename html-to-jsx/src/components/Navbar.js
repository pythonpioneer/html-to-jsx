import React from 'react';

/**
 * This componet will contain features for navigation bar
 * @returns {JSX.Element} - A JSX element shows navigation bar.
 */
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Navbar</a>
                <div className="my-2 my-sm-0">
                    
                    <div className="content">
                        <input type="checkbox" id="btn" />
                        <label for="btn">
                            <span className="thumb"></span>
                        </label>
                        <div className="lights">
                            <span className="light-off"></span>
                            <span className="light-on"></span>
                        </div>
                    </div>

                </div>

            </nav>
        </>
    )
}
