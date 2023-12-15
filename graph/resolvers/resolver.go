package resolvers

import (
	"math/rand"
	"time"

	"github.com/pcpratheesh/go-graphql-subcscription-live-feed/graph/model"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	Trades []*model.TradeData
}

func (r *Resolver) GenerateTradeData() *model.TradeData {
	return &model.TradeData{
		Symbol:    "DELTA",
		LastPrice: rand.Intn(5000),
		Volume:    rand.Intn(1000),
		High:      rand.Intn(200),
		Low:       rand.Intn(100),
		Timestamp: time.Now(),
	}
}
