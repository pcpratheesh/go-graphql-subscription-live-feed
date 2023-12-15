import React from 'react';
import { Card, Col, Row } from "react-bootstrap"


const TradeWidget = ({data}) => {
  if (data === undefined) {
    return 
  }
  return (
    <Card className='text-center'>
      <Card.Header>
        <Card.Title>Live Trade</Card.Title>
      </Card.Header>
      <Card.Body >
        <Row>
          <Col className='p-2 m-2'>Symbol : <b>{data.liveTrade.symbol}</b></Col>
          <Col className='p-2 m-2'>Last price : <b>{data.liveTrade.last_price}</b></Col>
        </Row>
        <Row>
          <Col className='border p-2 m-2'>Volume : <b>{data.liveTrade.volume}</b></Col>
          <Col className='border p-2 m-2 '>High : <b>{data.liveTrade.high}</b></Col>
          <Col className='border p-2 m-2'>Low : <b>{data.liveTrade.low}</b></Col>
        </Row>
        <Row>
          <Col className='p-2 m-2' >
            {data.liveTrade.timestamp}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default TradeWidget