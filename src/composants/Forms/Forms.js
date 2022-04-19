function Input({label,type,name}) {
    return ( 
        <>
            <div className="div-form">
                <label>{label}</label>
                <input type={type} name={name}/>
            </div>
        </> 
    );
}

function Textarea({label,name,maxLength}) {
    return ( 
        <>
            <div className="div-form">
                <label>{label}</label>
                <textarea name={name} maxlength={maxLength}></textarea>
            </div>
        </> 
    );
}

function Button({type,className,name,value}) {
    return ( 
        <>
            <div className="div-boutton">
                <button type={type} className={className} name={name}>{value}</button>
            </div>  
        </>
    );
}

export {Input,Textarea,Button}
