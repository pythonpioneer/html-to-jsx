import React, { useState } from 'react';

/**
 * This component is used as form.
 * @returns {JSX.Element} - A JSX element used to take input and show output
 */
export default function TextForm() {

    const [text, setText] = useState("<h1> Enter Your HTML Here </h1>");  // state varible for textarea
    
    // creating a funciton to convert html to jsx
    const convertHtmlToJsx = 0;

    // this method allows us to write on html-textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
            <div style={{ marginTop: '10px' }}>
                <form>
                    <div class="row">
                        <div class="col">
                            <textarea type="text" class="form-control" value={text} onChange={handleOnChange} rows='22' style={{ width: '98%', marginLeft: '12px' }}></textarea>
                        </div>
                        <div class="col">
                            <textarea type="text" class="form-control" value={''} placeholder="JSX, comes here!!" rows='22' style={{ width: '98%' }}></textarea>
                        </div>
                    </div>
                </form>
            </div>

            {/* adding button to convert html to jsx */}
            <div className='container'>
                <button type="button" className="container btn btn-primary" onClick={convertHtmlToJsx}>Convert HTML to JSX</button>
            </div>
        </>
    )
}
