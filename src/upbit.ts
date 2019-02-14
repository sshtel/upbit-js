
import * as fs from 'fs';
// import { Auth } from './auth';
import { constant } from './constant';
import * as exchange from './exchange';
import { OrderState } from './interface';
import * as quotation from './quotation';

export class Upbit {

  // private auth: Auth;
  private marketList = [];
  constructor() {
  }

  public async updateMarketAll() {

    try {
      this.marketList = await quotation.marketAll();
    } catch (e) {
      const marketAll = await fs.readFileSync('./marketAll.json', { encoding: 'utf-8'});
      this.marketList = JSON.parse(marketAll);
    }
  }

  public setAuth(accessKey: string, secretKey: string) {
    constant.UPBIT_ACCESS_KEY = accessKey;
    constant.UPBIT_SECRET_KEY = secretKey;
  }

  public getAccessToken() {
    return constant.UPBIT_ACCESS_KEY;
  }
  public getSecretToken() {
    return constant.UPBIT_SECRET_KEY;
  }

  public getMarketList() {
    return this.
    marketList;
  }

  public async marketAll() {
    return quotation.marketAll();
  }
  public async candlesMinutes(param: {unit: number, market: string, count?: number, to?: string}) {
    return quotation.candlesMinutes(param);
  }
  public async candlesDays(param: {market: string, count?: number, to?: string}) {
    return quotation.candlesDays(param);
  }
  public async candlesWeeks(param: {market: string, count?: number, to?: string}) {
    return quotation.candlesWeeks(param);
  }
  public async candlesMonths(param: {market: string, count?: number, to?: string}) {
    return quotation.candlesMonths(param);
  }
  public async tradesTicks(param: {market: string, to: string, count: number, cursor: string}) {
    return quotation.tradesTicks(param);
  }
  public async ticker(param: {markets: string}) {
    return quotation.ticker(param);
  }
  public async orderBook(param: {markets: string}) {
    return quotation.orderBook(param);
  }

  // exchange
  public async getAccounts() {
    return exchange.getAccounts();
  }
  public async getOrdersChance(market: string) {
    return exchange.getOrdersChance(market);
  }
  public async getOrder(uuid?: string, identifier?: string) {
    return exchange.getOrder(uuid, identifier);
  }
  public async getOrders(market: string, state?: OrderState, page?: number, orderBy?: string) {
    return exchange.getOrders(market, 'wait', 1);
  }

  public async postOrder(market: string, side: string, volume: string, price: string, ordType: string) {
    return exchange.postOrders(market, side, volume, price, ordType);
  }
}
