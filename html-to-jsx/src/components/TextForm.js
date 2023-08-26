import React, { useState } from "react";
import PropTypes from "prop-types";
const ReactDOMServer = require("react-dom/server");
const HtmlToReactParser = require("html-to-react").Parser;

/**
 * This component is used as form.
 * @param {string} colorMode - this useState variable is used to set the color for day and night mode.
 * @param {function} showAlertMsg - this function is used to change the color on the screen.
 * @returns {JSX.Element} - A JSX element used to take input and show output.
 */
export default function TextForm(props) {
  const [text, setText] = useState('<input class="demo" for="demo">'); // state varible for html textarea
  const [jsxText, setJsxText] = useState(""); // state varible for jsx textarea

  // create an object for dark mode and light mode
  const darkColor = {
    color: "white",
    backgroundColor: "#2F4F4F",
    marginTop: "10px",
  };

  const lightColor = {
    color: "black",
    backgroundColor: "white",
    marginTop: "10px",
  };

  // creating a method to handle html to jsx converter
  const convertHtmlToJsx = () => {
    const jsxCode = htmlToJSX(text);
    setJsxText(jsxCode);

    // when user passes JSX
    if (text.length === jsxText.length)
      props.showAlertMsg("You passed JSX!", "info");
    else props.showAlertMsg("Converted to JSX!!", "success");
  };

  // this method allows us to write on html-textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // handling event, when clicked on "copy" textarea
  const handleCopy = () => {
    const copiedText = document.getElementById("jsx-code");
    if (copiedText.value.length > 0) {
      props.showAlertMsg("Copied!!", "success");
      navigator.clipboard.writeText(copiedText.value);
    } else props.showAlertMsg("Nothing to Copy!", "warning");
  };

  return (
    
    <div style={{ overflowX: "hidden",  }}>
         
      <div style={props.colorMode === "dark" ? darkColor : lightColor}>
        {/* adding button to convert html to jsx */}
       
        <form style={{zIndex: 2}}>
       
          <div className="row" style={{zIndex: 2}}>
            <div className="col"style={{zIndex: 2}}>
              <textarea
                type="text"
                className="form-control"
                value={text}
                onChange={handleOnChange}
                rows="22"
                style={Object.assign(
                  { width: "98%", marginLeft: "12px"},
                  props.colorMode === "dark" ? darkColor : lightColor
                )}
              ></textarea>
            </div>

            <div className="col" style={{zIndex: 2 }}>
              <textarea
                type="text"
                className="form-control"
                id="jsx-code"
                onChange={null}
                value={jsxText}
                onClick={handleCopy}
                readOnly={true}
                placeholder="JSX, comes here!!"
                rows="22"
                style={Object.assign(
                  { width: "98%",  },
                  props.colorMode === "dark" ? darkColor : lightColor
                )}
              ></textarea>
            </div>
          </div>
        </form>

        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <button 
            // type="button"
            className=""
            style={{
              backgroundColor: "#8FBC8B",
              color: "white",
              height: "20vh",
              borderRadius: "50%",
              zIndex: 100,
              position: 'fixed',
              bottom: '40vh',
            //   left: '43.5%',
            //   margin: 'auto'
            }}
            onClick={convertHtmlToJsx}
          >
            Convert HTML to JSX
          </button>
          </div>
      </div>
    </div>
  );
}

function htmlToJSX(html) {
  // Replace self-closing tags in HTML with equivalent JSX tags

  const htmlToReactParser = new HtmlToReactParser();
  const reactElement = htmlToReactParser.parse(html);
  const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

  // Replace class attributes with className in JSX
  const jsxWithClassName = reactHtml.replace(/class=/g, "className=");

  // Replace for attributes with htmlFor in JSX
  const jsxWithHtmlFor = jsxWithClassName.replace(/for=/g, "htmlFor=");
  return jsxWithHtmlFor;
}

// defining the type of properties
TextForm.propTypes = {
  colorMode: PropTypes.string,
  showAlertMsg: PropTypes.func.isRequired,
};

// setting default value for the properties
TextForm.defaultProps = {
  colorMode: "light",
};
