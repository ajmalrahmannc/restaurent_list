import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurantsAction'
import RestaurantsCard from './RestaurantsCard'

function Home() {
  // const [ hotel , setHotel ] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch ('/restaurants.json')
  //     .then(data => data.json())
  //     .then(data => setHotel(data.restaurants))
  //   }
  //   fetchData();
  
  // }, [])
  

  // console.log('our data is',hotel); 

  const dispatch = useDispatch()
  const restaurantReducer = useSelector(state => state.restaurantReducer)
  const {restaurants } = restaurantReducer
  useEffect(() => {
    dispatch(listRestaurants())
  },[])
  
  return (
    <Row>
      {restaurants.map(item => (
        <Col sm={12} md={8} lg={4} xl={3}>
          <RestaurantsCard data={item}/>
        </Col>
      ))}
    </Row>
  )
}

export default Home