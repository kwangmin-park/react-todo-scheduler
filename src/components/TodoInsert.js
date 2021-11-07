import React, {useCallback, useState} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    //컴포넌트가 리렌더링 될때마다 함수를 새로 만들지 않고, 한번 함수를 만들어서 재사용한다.
    //useCallback 함수 내에서 state를 사용하지 않아서 가능한 방법.
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        //submit의 페이지 새로고침 방지
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;
