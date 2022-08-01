import React,{useState} from "react";
import BBSeditor from "./BBSeditor";

const Write = () => {
    const [data, setData] = useState([]);
    const dataId = useState(0);
    const onCreate = (writer, title, content, password) => {
        const createDate = new Date().getTime();
        const newBBS = {
            writer,
            title,
            content,
            password,
            createDate,
            id: dataId.current
        }

        dataId.current += 1;

        setData([newBBS, ...data]);
    }

    return(
        <div className="write">
            <BBSeditor onCreate={onCreate} />
        </div>
    );

}

export default Write;