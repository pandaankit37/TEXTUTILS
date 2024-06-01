import React,{useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick = ()=>{
        // console.log("upper case clicked"+text)
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to upper case ","success");
    }
    const handleLoClick = ()=>{
      // console.log("lower case clicked"+text)
      let newtext=text.toLowerCase();
      setText(newtext)
      props.showAlert("converted to lower case ","success");
  }
  const handleClear = ()=>{
    // console.log("lower case clicked"+text)
    let newtext='';
    setText(newtext)
    props.showAlert("Text cleared ","success");
}
    const handleUnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
        // props.showAlert("converted to lower case ","success");
        
    }
    const handleCopy = ()=>{
    //   var text=document.getElementById("myBox");
    //  text.select();
     navigator.clipboard.writeText(text);
     props.showAlert("Copy text successfylly ","success");
    }
    const handleExtraSpaces = () =>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("no extraspaces here ","success");
    }
    const [text, setText] = useState('Enter text here');
    // setText("Ankit");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#070951'}}>
           <h1 className='mb-4'>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value= {text} onChange={handleUnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#070951'}} id="myBox" rows="8"></textarea>
           <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Covert to upper case</button>
           <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Covert to lower case</button>
           <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClear}>Clear the page</button>
           <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy text </button>
           <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove ExtraSpaces </button>
       </div>
    </div> 
    <div className="container " style={{color:props.mode==='dark'?'white':'#070951'}}>
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} chracters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
      
      
      {/* <textarea className="form-control" value= {text} onChange={handleUnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#070951'}} id="myBox" rows="8">
      <h2>preview</h2>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
      </textarea> */}

      <div>
        <h2>preview</h2>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
      </div>
    </div>
    </>

  );
}
