import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { addTodo, setCompletedTodo } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { todoListRemaining } from "../../store/selectors";
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListRemaining);
  const [todoInput, setTodoInput] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  const onChangeTodoInput = (e) => {
    setTodoInput(e.target.value);
  };
  const handleChangeTodoPriority = (value) => {
    setTodoPriority(value);
  };
  const handleSetPriority = (id) => {
    dispatch(setCompletedTodo(id));
  };
  const handleAddTodo = () => {
    if (todoInput.trim() === "") {
      return;
    }
    const newsJobs = {
      id: uuidv4(),
      title: todoInput,
      priority: todoPriority,
      completed: false,
    };
    dispatch(addTodo(newsJobs));

    setTodoInput("");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.title}
            prioriry={todo.priority}
            completed={todo.completed}
            onClick={() => handleSetPriority(todo.id)}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoInput} onChange={onChangeTodoInput} />
          <Select defaultValue="Medium" onChange={handleChangeTodoPriority}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
