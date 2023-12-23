import React, { useState } from 'react'
export default function TextForm(props) {
    // converting to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClear = () => {
        let newText = '';
        setText(newText)
    }
    const handleSpeach = () => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    // on change event
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h3>{props.title}</h3>
                <div className="form-group">
                    <label htmlFor="myBox">Write here:</label>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleSpeach}>Read text</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length} Minutes to  read </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>


    )
}
