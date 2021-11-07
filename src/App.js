import React, {useCallback, useRef, useState} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
    const array = [];
    for(let i = 1; i <= 2500; i ++){
        array.push({
            id:i,
            text: `할 일 ${i}`,
            checked: false,
        });
    }
    return array;
}

const App = () => {
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         text: '리액트의 기초 알아보기',
    //         checked: true,
    //     },
    //     {
    //         id: 2,
    //         text: '컴포넌트 스타일링 해보기',
    //         checked: true,
    //     },
    //     {
    //         id: 3,
    //         text: '일정 관리 앱 만들어 보기',
    //         checked: false,
    //     },
    // ]);

    //createBulkTodos() 로 넘기면 리렌더링 될때마다 createBulkTodos가 호출되고
    //createBulkTodos 로 넘기면 처음 마운트 될때만 호출된다.
    const [todos, setTodos] = useState(createBulkTodos);

    //id 값이 변경된다고 리렌더링을 할 필요가 없으므로 state가 아닌 ref를 사용한다.
    // const nextId = useRef(4);
    const nextId = useRef(2501);

    //props로 넘기는 함수는 useCallback를 사용한다. todos를 사용하므로 todos가 바뀔때마다 함수 새로 만들도록 넘겨준다.
    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    },[todos]);

    const onRemove = useCallback(id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]);

    const onToggle = useCallback(id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, checked:!todo.checked} : todo))
    }, [todos]);

    return (
        <TodoTemplate>
            <TodoInsert onInsert = {onInsert}/>
            <TodoList todos={todos} onRemove = {onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
};

export default App;
