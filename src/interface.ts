export type OrderState = 'wait' | 'done' | 'cance';

// ws definitions
export enum WsType {
  ticker = 'ticker',
  trade = 'trade',
  orderbook = 'orderbook'
}

export interface WsTickerValue {
  error?: any;
  type?: string;
  code?: string;
  opening_price?: number;
  high_price?: number;
  low_price?: number;
  trade_price?: number;
  prev_closing_price?: number;
  acc_trade_price?: number;
  change?: string;
  change_price?: number;
  signed_change_price?: number;
  change_rate?: number;
  signed_change_rate?: number;
  ask_bid?: number;
  trade_volume?: number;
  acc_trade_volume?: number;
  trade_date?: string;
  trade_time?: string;
  trade_timestamp?: number;
  acc_ask_volume?: number;
  acc_bid_volume?: number;
  highest_52_week_price?: number;
  highest_52_week_date?: string;
  lowest_52_week_price?: number;
  lowest_52_week_date?: string;
  trade_status?: any;
  market_state?: string;
  market_state_for_ios?: any;
  is_trading_suspended?: boolean;
  delisting_date?: any;
  market_warning?: string;
  timestamp?: number;
  acc_trade_price_24h?: number;
  acc_trade_volume_24h?: number;
  stream_type?: string;
}

export interface WsOrderbookValue {
  error?: any;
  type?: string;
  code?: string;
  timestamp?: number;
  total_ask_size?: number;
  total_bid_size?: number;
  orderbook_units?: OrderBookUnit[];
}

interface OrderBookUnit {
    ask_price: number;
    bid_price: number;
    ask_size: number;
    bid_size: number;
}

export interface WsTradeValue {
  error?: any;
  type?: string;
  code?: string;
  timestamp?: number;
  trade_date?: string;
  trade_time?: string;
  trade_timestamp?: number;
  trade_price?: number;
  trade_volume?: number;
  ask_bid?: string;
  prev_closing_price?: number;
  change?: string;
  change_price?: number;
  sequential_id?: number;
  stream_type?: string;
}
