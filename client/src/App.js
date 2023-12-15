import './App.css';

import React from 'react';
import { useSubscription, gql, ApolloProvider } from '@apollo/client';
import client from './client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {  Col, Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TradeWidget from './components/trade-widget';
import TradesView from './components/trades-view';
import RealtimeChart from './components/realtime-chart';


loadDevMessages();
loadErrorMessages();

const GetLiveTradeGQL = gql`
 subscription live_trade {
  liveTrade(symbol:"DELTA") {
    symbol
    last_price
    volume
    high
    low
    timestamp
  }
}
`;

const LiveTrade = () => {

  const { data, loading, error } = useSubscription(GetLiveTradeGQL);


  if (error !== undefined) {
    return (
      <div>{error}</div>
    )
  }

  return (
    <>
      <Container className='p-5'>
        <Row>
          <Col md={6}>
            <TradeWidget data={data}></TradeWidget>
          </Col>
          <Col md={6}>
            <RealtimeChart data={data}></RealtimeChart>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col md={12}>
            <TradesView data={data}></TradesView>
          </Col>
        </Row>

      </Container>
    </>
  )
}

const App = () => {

  return (
    <ApolloProvider client={client}>
      <LiveTrade />
    </ApolloProvider>
  )
}
export default App
