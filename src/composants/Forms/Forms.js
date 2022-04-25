function Input({label,type,name}) {
    return ( 
        <>
            <div className="div-form">
                <label>{label}</label>
                <input type={type === "" ? "text" : type} name={name}/>
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

function Checkbox({type,name,text}) {
    return ( 
        <>
            <div className="div-grid-rgpd">
                <div className="grid1-rgpd">
                    <input type={type === "" ? "checkbox" : type} name={name}/>
                </div>
                <p className="text-rgpd">{text}</p>
            </div>
        </>
    );
}

function Button({type,className,name,value}) {
    return ( 
        <>
            <div className="div-boutton">
                <button type={type === "" ? "submit" : type} className={className} name={name}>{value}</button>
            </div>  
        </>
    );
}

export {Input,Textarea,Checkbox,Button}
