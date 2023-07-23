import React from 'react';

/**
 * This component is used as form.
 * @returns {JSX.Element} - A JSX element used to take input and show output
 */
export default function TextForm() {
    return (
        <>
            <div style={{ marginTop: '10px' }}>
                <form>
                    <div class="row">
                        <div class="col">
                            <textarea type="text" class="form-control" placeholder="Enter Html here" rows='22' style={{ width: '98%', marginLeft: '12px' }}></textarea>
                        </div>
                        <div class="col">
                            <textarea type="text" class="form-control" placeholder="JSX, comes here!!" rows='22' style={{ width: '98%' }}></textarea>
                        </div>
                    </div>
                </form>
            </div>

            {/* adding button to convert html to jsx */}
            <div className='container'>
                <button type="button" className="container btn btn-primary" style={{}}>Convert HTML to JSX</button>
            </div>
        </>
    )
}
