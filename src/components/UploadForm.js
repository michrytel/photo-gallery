import React, { useState } from "react";
import Progress from "./Progress";

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = [`image/png`, `image/jpeg`]
    const changeHandler = e => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError("")
        } else {
            setError('Select image file (jpeg or png)');
        }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file__name">{file.name}</div>}
                {file && <Progress/>}
            </div>
        </form>
    )
}

export default UploadForm