import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the Text here :");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted Into The UpperCase","success")
  };

  const hadleCopy=() =>{
    console.log("i am copy ");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();  
     props.showAlert("Text Has Been Copied","success")
  };
  const handleLoClick = () => {
    setText(text.toLowerCase()); // ✅ Converts current text to uppercase
    props.showAlert("Text Has Been Converted Into The lowecase ","success")
  };
  
  function capitalizeEachWord(text) {
  return text.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
    const handleCapitalizeClick = () => {
    setText(capitalizeEachWord(text));
    props.showAlert("Tect Has Been Capitalized","success");
     // ✅ Converts current text to uppercase
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText); 
    props.showAlert("Text Has Been Cleared ","success")// ✅ Converts current text to uppercase
  };
  const handleOnChange = (evt) => {
      setText(evt.target.value); // ✅ Correct usage
  };
  return (
    <>
      <div className="container"  style={{color:
                props.Mode === "dark" ? "white" : "black"}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <label htmlfor="myBox" className="form-label">
            Example Textarea
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{background:props.Mode === "dark" ? '#33496bff' : "white",
                color:props.Mode === "dark" ? "white" : "black"}}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
          {" "}
          Convert To UpperCase{" "}
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>
          {" "}
          Convert To Lowercase{" "}
        </button>
        <button  disabled={text.length===0}className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCapitalizeClick}>Capitalize Text</button>
         <button  disabled={text.length===0}className="btn btn-primary mx-1 my-2" onClick={hadleCopy}>Copy Text</button>
      </div>
      <div className="container my-3 " style={{color:
                props.Mode === "dark" ? "white" : "black"}} >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{
            return element.length!==0
          }).length} Words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to reads</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing Into prievew"}</p>
      </div>
    </>
  );
}
