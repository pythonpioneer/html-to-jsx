import React, { useRef } from 'react'


// to display the form
export default function Form() {

    // to store the form text
    const htmlTextRef = useRef('');
    
    // now fetch the form data
    const fetchFormData = () => {
        console.log(htmlTextRef.current.value);
    }

    return (
        <>
            <div className='container mt-2'>
                <div>
                    <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Your HTML</label>
                    <textarea ref={htmlTextRef} style={{ width: '100%', height: '30vh', backgroundColor: 'transparent' }} defaultValue="Write your HTML here"></textarea>
                </div>

                <div className='' style={{ justifyContent: 'center', display: 'flex' }}>
                    <button onClick={fetchFormData} className='mt-4 mb-4' style={{ backgroundColor: '#e68f71', width: '25%' }}>CONVERT</button>
                </div>

                <div>
                    <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Your JSX</label>
                    <textarea style={{ width: '100%', height: '30vh', backgroundColor: 'transparent' }} defaultValue="Your JSX will be here"></textarea>
                </div>
            </div>
        </>
    )
}
