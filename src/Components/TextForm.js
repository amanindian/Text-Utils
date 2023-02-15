import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, SetText] = useState("");
    const inputRef = useRef(null);


    const hendleUpClick = () => {
        let newtext = text.toUpperCase()
        SetText(newtext)
    }
    const hendleLoClick = () => {
        let newtext = text.toLowerCase()
        SetText(newtext)
    }

    const hendleClearClick = () => {
        let newtext = ""
        SetText(newtext)
    }
    const hendleCopyText = () => {
        inputRef.current.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }

    const hendleExtraSpace = () => {
        let newtext = text.replace(/\s+/g, ' ').trim();
        SetText(newtext)
    }
    const hendleFLUC = () => {
        let newtext = text.replace(/(^\w{1}|\.\s+\w{1})/g, letter => letter.toUpperCase());
        SetText(newtext)
    }
    const hendleFNUC = () => {
        let newtext = text.replace(/(\b\w{1})/g, letter => letter.toUpperCase());
        SetText(newtext)
    }
    const hendleonChange = (event) => {
        SetText(event.target.value);
    }

    return (
        <>
            <div style={
                {
                    minWidth: "100%"
                }
            } className={`container px-5 text-${props.Mode === "dark" ? "light" : "dark"}`} >
                <h1>{props.heading}</h1>
                <textarea value={text} ref={inputRef} onChange={hendleonChange} className="form-control"
                    style={{ backgroundColor: 'transparent', color: `${props.Mode === "light" ? "black" : "white"}` }} rows="10"></textarea>
                <button className='btn btn-primary my-2 mx-1' onClick={hendleUpClick} >Convert to UpperCase</button>
                <button className='btn btn-primary  my-2 mx-1' onClick={hendleLoClick} >Convert to LowerCase</button>
                <button className='btn btn-primary  my-2 mx-1' onClick={hendleClearClick} >Clear Text Box</button>
                <button className='btn btn-primary  my-2 mx-1' onClick={hendleCopyText} >Copy Text</button>
                <button className='btn btn-primary  my-2 mx-1' onClick={hendleExtraSpace} >Remove Extra Space Text</button>
                <button className='btn btn-primary  my-2 mx-1' onClick={hendleFLUC} >First Letter UpperCase of Sentences</button>
                <button className='btn btn-primary  my-2 mx-1' onClick={hendleFNUC} >First Letter UpperCase of Words</button>
            </div>
            <div style={
                { minWidth: "100%" }
            } className={`container py-5 px-5  text-${props.Mode === "dark" ? "light" : "dark"} `}>
                <p>Your text length is :{text.length}</p>
                <p>Your text length is : {text.split(" ").length}</p>
                <p>You will take <b> {0.008 * text.split(" ").length}</b> minute for reading this text</p>
                <h1>Text Preview</h1>
                <p className='red'>{text.length > 0 ? text : "Enter Somthing in TextBox"}</p>
            </div>
        </>
    )
}



TextForm.defaultProps = {
    heading: `This is Your heading`
}
TextForm.propType = {
    heading: PropTypes.string
}
