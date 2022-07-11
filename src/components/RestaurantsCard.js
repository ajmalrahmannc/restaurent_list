import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function RestaurantsCard({ data }) {
  return (
    <Link to = {`/restaurants/${data.id}`}>
      <Card className="my-3 p-3 rounded cards">
        <Card.Img variant="top" src={data.photograph} className="p-3" />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            <p><strong>Cuisine:{data.cuisine_type}</strong></p>
          </Card.Text>
          <Card.Text>
            <p>Address:{data.address}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </Link>
  )
}

export default RestaurantsCard