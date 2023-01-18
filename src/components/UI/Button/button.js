


function Button({text,backGroundColor,handleDataFromChild,data, disabled}) {
  

    return (
        <button onClick={() => handleDataFromChild(data.questionId,text)} className="p-3 w-100  text-center border-0" disabled={disabled} style={{ backgroundColor: backGroundColor || "#feb993"}}>
            {text}
        </button>
    )
}

export default Button;