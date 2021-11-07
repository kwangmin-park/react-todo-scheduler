import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text, checked} = todo;
    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>
    );
};

//React.memo로 감싸 property인 todo, onRemove, onToggle이 바뀔 때만 리렌더링 함으로 성능 개선.
export default React.memo(TodoListItem);