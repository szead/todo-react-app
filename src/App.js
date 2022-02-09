import Button from 'react-bootstrap/Button';
import {Card, Container, Form} from "react-bootstrap";
import TodoItem from "./TodoItem";
import {useState} from "react";
import uuid from 'react-native-uuid';

function App() {

  const todoList = [{title: '', description: '', id: uuid.v4()}]
  const [list, setList] = useState(todoList)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleTitleChange(event) {
    setTitle(event.target.value);
    console.log(event)
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function addNewItem() {
    const newList = list
    newList.push({title: title, description: description, id: uuid.v4()})
    setList([...newList])
    setTitle('')
    setDescription('')
  }

  function removeItem(id) {
    let newList = list
    newList = newList.filter((item)=>(item.id !== id))
    setList([...newList])
  }

  return (
      <Container>
        <Card style={{width: '18rem'}}>
          <Form>
            <Form.Label htmlFor="inputTitle">Title</Form.Label>
            <Form.Control id="inputTitle" value={title} onChange={handleTitleChange}/>
            <Form.Text id="passwordHelpBlock" muted>
            </Form.Text>
          </Form>
          <Form>
            <Form.Label htmlFor="inputDescription">Description</Form.Label>
            <Form.Control id="inputTitle" value={description} onChange={handleDescriptionChange}/>
            <Form.Text id="passwordHelpBlock" muted>
            </Form.Text>
          </Form>
          <Button onClick={addNewItem}>
            +
          </Button>
        </Card>
        <Container>
          {list.map((todoCard) => (
              <TodoItem key={todoCard.id} title={todoCard.title}
                        description={todoCard.description} id={todoCard.id} remove={()=>removeItem(todoCard.id)}/>
          ))}
        </Container>
      </Container>
  );
}

export default App;
