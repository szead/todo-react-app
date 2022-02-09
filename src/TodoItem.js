import {Card, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";

export default function TodoItem({title, description, id, remove}) {
  const [disabled, setDisabled] = useState(false)

  function makeItDone() {
    setDisabled(true)
  }

  function whatIsMyColor() {
    return disabled ? "secondary" : "info";
  }

  function editItem() {

  }

  return (
      <Row>
        <Card style={{width: '18rem'}} bg={whatIsMyColor()}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="success" onClick={makeItDone}
                    disabled={disabled}>Done</Button>
            <Button variant="danger" onClick={()=>remove(id)}>Remove</Button>
            <Button variant="secondary" onClick={editItem}>Edit</Button>
          </Card.Body>
        </Card>
      </Row>
  )
}