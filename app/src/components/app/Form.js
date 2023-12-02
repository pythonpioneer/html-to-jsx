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
                    <label htmlFor="inputHtml" style={{ fontSize: '16px', fontWeight: 'bold' }}>Your HTML</label>
                    <textarea id="inputHtml" ref={htmlTextRef} style={{ width: '100%', height: '30vh', backgroundColor: 'transparent', resize: 'none', outline: 'none' }} defaultValue='<input class="demo" for="demo">'></textarea>
                </div>

                <div className='' style={{ justifyContent: 'center', display: 'flex' }}>
                    <button onClick={fetchFormData} className='mt-4 mb-4' style={{ backgroundColor: '#e68f71', width: '25%' }}>CONVERT</button>
                </div>

                <div>
                    <label htmlFor="jsx-code" style={{ fontSize: '16px', fontWeight: 'bold' }}>Your JSX</label>
                    <textarea id="jsx-code" style={{ width: '100%', height: '30vh', backgroundColor: 'transparent', resize: 'none', outline: 'none' }} readOnly={true} value={jsxText} onClick={handleCopy}></textarea>
                </div>
            </div>
        </>
    );
}

// to convert the html text into jsx
function htmlToJSX(html) {

    // convert html comments into jsx comments
    html = convertComment(html);

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

// to find all the occurence of the string
function findAllOccurrences(mainString, substring) {
    const indices = [];
    let currentIndex = mainString.indexOf(substring);

    while (currentIndex !== -1) {
        indices.push(currentIndex);
        currentIndex = mainString.indexOf(substring, currentIndex + 1);
    }

    return indices;
}

// to merge two array one by one
function mergeArray(arr1, arr2) {  // length will be same

    const mergedArr = [];
    const n = arr1.length;

    // traverse in array to merge
    for (let i = 0; i < n; i++) {
        mergedArr.push(arr1[i]);
        mergedArr.push(arr2[i]);
    }

    // return the merged array
    return mergedArr;
}

// to check that the array is sorted or not
function isSorted(arr) {
    return arr.every((value, index, array) => index === 0 || value >= array[index - 1]);
}

// to convert the html comments into jsx comment for react
function convertComment(html) {
    html = `<link rel="icon" href="%PUBLIC_URL%/app.png" />
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!-- <meta name="description" content="Design Your Day Like Pro" /> -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/app.png" />  -->`;

    // find the comment syntax <!-- 
    const commentStartSymbol = html.match(/<!--/g);
    const commentEndSymbol = html.match(/-->/g);

    // if there is no comments
    if (!commentStartSymbol) return html;

    // if both lengths are equal then comment sequentially
    if (commentStartSymbol?.length === commentEndSymbol?.length) {

        // merging the indicies array to check that every start comment has its own closing comment symbol
        const indiciesArr = mergeArray(findAllOccurrences(html, '<!--'), findAllOccurrences(html, '-->'));

        // if array is sorted means every start comment tag comes with closing tags
        if (isSorted(indiciesArr)) {

            // replace the symbols with thier respective comment symbols
            let jsxComment = html.replaceAll('<!--', '{/*');
            jsxComment = jsxComment.replaceAll('-->', '*/}');

            // console.log(jsxComment)
            return jsxComment;
        }
        else {
            // find the first index of the comment start symbol
            let firstIndex = html.indexOf('<!--');
            let lastIndex = html.lastIndexOf('-->');

            // now, insert the jsx comment symbol at the firstIndex and lastIndex
            let jsxComment = html.slice(0, firstIndex) + '{/*' + html.slice(firstIndex + 4, lastIndex) + '*/}' + html.slice(lastIndex + 3);
            return jsxComment;
        }
    }
    else {  // if both lengths are not equal then comment from the first to the last

        // find the first index of the comment start symbol
        let firstIndex = html.indexOf('<!--');
        let lastIndex = html.lastIndexOf('-->');

        // now, insert the jsx comment symbol at the firstIndex and lastIndex
        let jsxComment = html.slice(0, firstIndex) + '{/*' + html.slice(firstIndex + 4, lastIndex) + '*/}' + html.slice(lastIndex + 3);
        return jsxComment;
    }

}
convertComment();