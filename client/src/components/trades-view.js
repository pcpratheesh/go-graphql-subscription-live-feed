import React from 'react';
import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap"
import Moment from 'moment';
import moment from 'moment';


const TradesView = ({ data }) => {
  const [trades, setTrades] = useState([])
  useEffect(() => {
    if (data?.liveTrade !== undefined) {
      setTrades(prevTrades => {
        return [
          ...prevTrades,
          data.liveTrade
        ];
      });
    }

  }, [data])

  return (
    <Card className='text-center'>
      <Card.Header>
        <Card.Title>Recent Trades</Card.Title>
      </Card.Header>
      <Card.Body >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Symbol</th>
              <th>Last Price</th>
              <th>Volume</th>
              <th>High</th>
              <th>Low</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {
              trades.map((trade, sl) => (
                <tr>
                  <td>{sl + 1}</td>
                  <td>{trade.symbol}</td>
                  <td>{trade.last_price}</td>
                  <td>{trade.volume}</td>
                  <td>{trade.high}</td>
                  <td>{trade.low}</td>
                  <td>
                  {moment(data.liveTrade.timestamp).format('DD/MM/YY HH:mm:s')}
                  </td>
                </tr>

              ))
            }

          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default TradesView