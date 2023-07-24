import React, { useState } from 'react';

/**
 * This component is used as form.
 * @returns {JSX.Element} - A JSX element used to take input and show output
 */
export default function TextForm(props) {

    const [text, setText] = useState('<input class="demo" for="demo">');  // state varible for html textarea
    const [jsxText, setJsxText] = useState('');  // state varible for jsx textarea

    // create an object for dark mode and light mode
    const darkColor = {
        color: 'white',
        backgroundColor: '#2F4F4F',
        marginTop: '10px'
    }

    const lightColor = {
        color: 'black',
        backgroundColor: 'white',
        marginTop: '10px',
    }

    // creating a funciton to convert html to jsx
    // creating a method to handle html to jsx converter
    const convertHtmlToJsx = () => {
        const jsxCode = htmlToJSX(text);
        setJsxText(jsxCode);
        
        // when user passes JSX
        if(text.length === jsxText.length)
            props.showAlertMsg("You passed JSX!", 'info');
        else props.showAlertMsg("Converted to JSX!!", "success");
    }

    // this method allows us to write on html-textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // handling event, when clicked on "copy"
    const handleCopy = () => {
        const copiedText = document.getElementById('jsx-code');
        // copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
        props.showAlertMsg("Copied!!", 'success');
    }

    return (
        <div>
            <div style={props.colorMode==='dark'?darkColor:lightColor}>
                <form>
                    <div className="row">
                        <div className="col">
                            <textarea type="text" className="form-control" value={text} onChange={handleOnChange} rows='22' style={Object.assign({width: '98%', marginLeft: '12px'}, props.colorMode==='dark'?darkColor:lightColor)}></textarea>
                        </div>
                        <div className="col">
                            <textarea type="text" className="form-control" id="jsx-code" onChange={null} value={jsxText} onClick={handleCopy} readOnly={true} placeholder="JSX, comes here!!" rows='22' style={Object.assign({ width: '98%'},  props.colorMode==='dark'?darkColor:lightColor)}></textarea>
                        </div>
                    </div>
                </form>
            </div>

            {/* adding button to convert html to jsx */}
            <div className='container'>
                <button type="button" className="container btn" style={{backgroundColor: 'teal', color: 'white'}} onClick={convertHtmlToJsx}>Convert HTML to JSX</button>
            </div>
        </div>
    )
}

function htmlToJSX(html) {
    // Replace self-closing tags in HTML with equivalent JSX tags
    const jsx = html.replace(/<(\w+)\s*\/>/g, '<$1 />');

    const jsxInputClosed = endInput(jsx);

    // Replace class attributes with className in JSX
    const jsxWithClassName = jsxInputClosed.replace(/class=/g, 'className=');

    // Replace for attributes with htmlFor in JSX
    const jsxWithHtmlFor = jsxWithClassName.replace(/for=/g, 'htmlFor=');

    return jsxWithHtmlFor;
}

// creating a method to convert html to jsx
function endInput(text) {

    // splitting string into list and find the input tag position
    let lst = text.split('<input');

    // now find '<' tag in every string, if not, it means there was '<input'
    for (let tag in lst) {
        if (lst[tag][0] !== '<') {

            // now, find the greater than symbol in the string
            let ss = lst[tag];
            for (let idx in ss) {
                if (ss[idx] === '>' && ss[idx-1] !== '/') {
                    ss = "<input" + ss.slice(0, idx) + "/" + ss.slice(idx);
                    lst[tag] = ss;
                    break;
                }
                else if (ss[idx] === '>' && ss[idx-1] === '/'){
                    return text;
                }
                
            }
        }
    }
    text = lst.join('');
    return text;
}
