import React, {useEffect} from "react";
import useStorage from "../hooks/useStorage";

const Progress = ({file, setFile}) => {
    const {url, progress} = useStorage(file)
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    },[url, setFile])

    return (
        <div className="progress__bar" style={{width: progress + `%`}}/>
    )
}

export default Progress