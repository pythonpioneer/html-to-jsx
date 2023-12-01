import React from 'react';


// to display the navigation bar
export default function Navbar() {
    return (
        <>
            <nav className='spacer layer' style={{ width: '100%', height: '14vh' }}>
                <div style={{ fontWeight: 'bold', fontSize: '25px', marginLeft: '2%', paddingTop: '1vh', color: 'beige' }}>
                    HTML to JSX
                    <div style={{ float: 'right', fontSize: '12px', color: 'black', marginRight: '2%' }}>@pythonpioneer</div>
                </div>
            </nav>
        </>
    )
}

