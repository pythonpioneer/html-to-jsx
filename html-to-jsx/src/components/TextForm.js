import React, { useState } from 'react';

/**
 * This component is used as form.
 * @returns {JSX.Element} - A JSX element used to take input and show output
 */
export default function TextForm() {

    const [text, setText] = useState("<h1> Enter Your HTML Here </h1>");  // state varible for textarea
    const [jsxText, setJsxText] = useState('');
    
    // creating a funciton to convert html to jsx
    // creating a method to handle html to jsx converter
    const convertHtmlToJsx = () => {
        const jsxCode = htmlToJSX(text);
        setJsxText(jsxCode);
    }

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
                            <textarea type="text" class="form-control" value={jsxText} placeholder="JSX, comes here!!" rows='22' style={{ width: '98%' }}></textarea>
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
                if (ss[idx] === '>') {
                    ss = "<input" + ss.slice(0, idx) + "/" + ss.slice(idx);
                    lst[tag] = ss;
                    break;
                }
            }
        }
    }
    text = lst.join('');
    return text;
}

