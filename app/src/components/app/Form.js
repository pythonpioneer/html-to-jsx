import React, { useRef, useState } from 'react';
import { htmlToJSX } from '../../utility';
import { toast } from 'react-toastify';


// to display the form
export default function Form() {

    // to store the form text
    const htmlTextRef = useRef('');  // for HTML
    const [jsxText, setJsxText] = useState('Your JSX will be here');  // for JSX

    // creating a method to handle html to jsx converter
    const convertHtmlToJsx = (text) => {
        const jsxCode = htmlToJSX(text);
        setJsxText(jsxCode);

        // to notify the user
        toast.success('Converted Successfully!!');
    }

    // now fetch the form data
    const fetchFormData = () => {
        convertHtmlToJsx(htmlTextRef.current.value);
    }

    // handling event, when clicked on "copy" textarea
    const handleCopy = () => {
        const copiedText = document.getElementById('jsx-code');
        if (copiedText.value.length > 0 && copiedText.value !== "Your JSX will be here") {  // if something converted
            navigator.clipboard.writeText(copiedText.value);
            toast.success('Copied!');
        }
        else {  // if there is nothing to copy
            toast.info('No content has been copied!');
        }
    }

    return (
        <>
            <div className='container mt-2'>
                <div>
                    <label htmlFor="inputHtml" style={{ fontSize: '16px', fontWeight: 'bold' }}>Your HTML</label>
                    <textarea id="inputHtml" ref={htmlTextRef} style={{ width: '100%', height: '30vh', backgroundColor: 'transparent', resize: 'none', outline: 'none' }} defaultValue='<input class="demo" for="demo">'></textarea>
                </div>

                <div className='' style={{ justifyContent: 'center', display: 'flex' }}>
                    <button onClick={fetchFormData} className='mt-4 mb-2' style={{ backgroundColor: '#343434', width: '25%', color: 'whitesmoke', outline: 'none' }}>CONVERT</button>
                </div>

                <div>
                    <label htmlFor="jsx-code" style={{ fontSize: '16px', fontWeight: 'bold' }}>Your JSX</label>
                    <textarea id="jsx-code" style={{ width: '100%', height: '30vh', backgroundColor: 'transparent', resize: 'none', outline: 'none' }} readOnly={true} value={jsxText} onClick={handleCopy}></textarea>
                </div>
            </div>
        </>
    );
}
