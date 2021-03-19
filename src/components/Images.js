import React from "react";
import useFirestore from "../hooks/useFirestore";
const Images = () => {
    const {docs} = useFirestore(`images`)
    return (
        <div className="images">
            {docs && docs.map(doc => (
                <div key={doc.id}><img src={doc.url} className="img" alt="collection"/></div>
                )
            )}
        </div>
    )
}

export default Images