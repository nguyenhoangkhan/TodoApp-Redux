import { useState } from "react";
import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import {
  setFilterInput,
  setFilterPriority,
  setFilterStatus,
} from "../../store/actions";
const { Search } = Input;
export default function Filters() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState([]);
  const handleChangeTodoInput = (e) => {
    setSearchInput(e.target.value);
    dispatch(setFilterInput(e.target.value));
  };
  const handleChangeTodoStatus = (e) => {
    setStatus(e.target.value);
    dispatch(setFilterStatus(e.target.value));
  };
  const handleChangeFilterPriority = (value) => {
    setPriority(value);
    dispatch(setFilterPriority(value));
  };
  console.log(status);
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="Input search text"
          onChange={handleChangeTodoInput}
          value={searchInput}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleChangeTodoStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priority}
          onChange={handleChangeFilterPriority}
        >
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
      </Col>
    </Row>
  );
}
