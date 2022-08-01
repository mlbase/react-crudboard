import {useState, useRef} from "react";

const BBSeditor = ({onCreate}) => {
    
    const [state,setState] = useState({
        writer:"",
        title:"",
        content:"",
        password:""
    });

    const titleInput = useRef();
    const writerInput = useRef();
    const contentTextarea = useRef();
    const passwordInput = useRef();

    const handleChangeState= (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });

    
    };

    const handleSubmit = () => {
        if(state.title.length < 1){
            titleInput.current.focus();
            return;
        }
        if(state.writer.length < 1){
            writerInput.current.focus();
            return;
        }
        if(state.content.length < 1){
            contentTextarea.current.focus();
            return;
        }
        if(state.password.length < 4){
            passwordInput.current.focus();
            alert('비밀번호는 4자이상 입력');
            return;
        }

        onCreate(state.writer, state.content, state.password);
        alert('저장성공');

        setState({
            writer:"",
            title:"",
            content:"",
            password:""           
        });
    }

    return (
        <div className="BBSeditor">
            <h2>게시판 글쓰기</h2>
            <div>
                <input 
                ref={writerInput}
                name="writer"
                value={state.writer}
                onChange={handleChangeState}
                />
            </div>
            <div>
                <input
                ref={titleInput}
                name="title"
                value={state.title}
                onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea
                ref={contentTextarea}
                name="content"
                value={state.content}
                onChange={handleChangeState}
                />
            </div>
            <div>
                <input
                type="password"
                ref={passwordInput}
                name="password"
                value={state.password}
                onChange={handleChangeState}
                />
            </div>

            <div>
                <button onClick={handleSubmit}>글 작성하기</button>
            </div>
        </div>
    );
}

export default BBSeditor;