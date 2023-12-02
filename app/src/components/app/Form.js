import React, { useRef, useState } from 'react';
const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;


// to display the form
export default function Form() {

    // to store the form text
    const htmlTextRef = useRef('');  // for HTML
    const [jsxText, setJsxText] = useState('Your JSX will be here');  // for JSX

    // creating a method to handle html to jsx converter
    const convertHtmlToJsx = (text) => {
        const jsxCode = htmlToJSX(text);
        setJsxText(jsxCode);
    }
    
    // now fetch the form data
    const fetchFormData = () => {
        convertHtmlToJsx(htmlTextRef.current.value);
    }

    // handling event, when clicked on "copy" textarea
    const handleCopy = () => {
        const copiedText = document.getElementById('jsx-code');
        if (copiedText.value.length > 0) {
            navigator.clipboard.writeText(copiedText.value);
        }
    }

    return (
        <>
            <div className='container mt-2'>
                <div>
                    <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Your HTML</label>
                    <textarea ref={htmlTextRef} style={{ width: '100%', height: '30vh', backgroundColor: 'transparent' }} defaultValue='<input class="demo" for="demo">'></textarea>
                </div>

                <div className='' style={{ justifyContent: 'center', display: 'flex' }}>
                    <button onClick={fetchFormData} className='mt-4 mb-4' style={{ backgroundColor: '#e68f71', width: '25%' }}>CONVERT</button>
                </div>

                <div>
                    <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Your JSX</label>
                    <textarea id="jsx-code" style={{ width: '100%', height: '30vh', backgroundColor: 'transparent' }} readOnly={true} value={jsxText} onClick={handleCopy}></textarea>
                </div>
            </div>
        </>
    );
}

// to convert the html text into jsx
function htmlToJSX(html) {

    // Replace self-closing tags in HTML with equivalent JSX tags
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(html);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
     
    // Replace class attributes with className in JSX
    const jsxWithClassName = reactHtml.replace(/class=/g, 'className=');

    // Replace for attributes with htmlFor in JSX
    const jsxWithHtmlFor = jsxWithClassName.replace(/for=/g, 'htmlFor=');  
    return jsxWithHtmlFor; 
}  
