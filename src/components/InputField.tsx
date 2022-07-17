import React from 'react'
import './inputField.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

// const InputField = ({ todo, setTodo }: Props) => {
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form action="" className="input">
        <input type="input" value={todo} onChange={(evt) => setTodo(evt.target.value)} placeholder='Enter a task' className='input__box' />
        <button className="input_submit" type='submit'>Add</button>
    </form>
  )
}

export default InputField