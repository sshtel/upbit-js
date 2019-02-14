import * as crypto from 'crypto';
import { sign } from 'jsonwebtoken';
import * as querystring from 'querystring';
import * as request from 'superagent';
import * as url from 'url';
import { constant } from './constant';
import { OrderState } from './interface';
// import * as queryEncode from '../../node_modules/querystring';

export async function getAccounts() {
  const payload = {access_key: constant.UPBIT_ACCESS_KEY, nonce: (new Date).getTime()};
  const token = sign(payload, constant.UPBIT_SECRET_KEY as string);
  const uri = url.format({
    protocol: 'https',
    hostname: constant.UPBIT_URL_V1,
    pathname: constant.UPBIT_URL_ACCOUNTS
  });
  const res = await request.get(uri)
    .set('Authorization', `Bearer ${token}`);
  return res.body;
}

export async function getOrdersChance(market: string) {
  const query = querystring.stringify({market});
  const payload = {
    access_key: constant.UPBIT_ACCESS_KEY,
    nonce: (new Date).getTime(),
    query
  };
  const token = sign(payload, constant.UPBIT_SECRET_KEY as string);
  const uri = url.format({
    protocol: 'https',
    hostname: constant.UPBIT_URL_V1,
    pathname: constant.UPBIT_URL_ORDERS_CHANCE
  });
  const res = await request.get(uri)
    .set('Authorization', `Bearer ${token}`)
    .query({ market });
  return res.body;
}

export async function getOrder(uuid?: string, identifier?: string) {

  const query = querystring.stringify({uuid, identifier});
  const payload = {
    access_key: constant.UPBIT_ACCESS_KEY,
    nonce: (new Date).getTime(),
    query
  };
  const token = sign(payload, constant.UPBIT_SECRET_KEY as string);
  const uri = url.format({
    protocol: 'https',
    hostname: constant.UPBIT_URL_V1,
    pathname: constant.UPBIT_URL_ORDER
  });
  const res = await request.get(uri)
    .set('Authorization', `Bearer ${token}`)
    .query({ uuid })
    .query({ identifier });
  return res.body;
}

export async function getOrders(market: string, state?: OrderState, page?: number, orderBy?: string) {
  const query = querystring.stringify({market, state, page, order_by: orderBy});
  const payload = {
    access_key: constant.UPBIT_ACCESS_KEY,
    nonce: (new Date).getTime(),
    query
  };
  const token = sign(payload, constant.UPBIT_SECRET_KEY as string);
  const uri = url.format({
    protocol: 'https',
    hostname: constant.UPBIT_URL_V1,
    pathname: constant.UPBIT_URL_ORDERS
  });
  const res = await request.get(uri)
    .set('Authorization', `Bearer ${token}`)
    .query({ market })
    .query({ state })
    .query({ page })
    .query({ order_by: orderBy });
  return res.body;
}

export async function postOrders(market: string, side: string, volume: string, price: string, ordType: string) {
  const randomBytes = await crypto.randomBytes(64);
  const identifier = randomBytes.toString('hex');
  const body = {market, side, volume, price, ord_type: ordType, identifier};
  console.log(body);
  const payload = {
    access_key: constant.UPBIT_ACCESS_KEY,
    nonce: (new Date).getTime(),
    query: querystring.stringify(body)
  };
  const token = sign(payload, constant.UPBIT_SECRET_KEY as string);
  const uri = url.format({
    protocol: 'https',
    hostname: constant.UPBIT_URL_V1,
    pathname: constant.UPBIT_URL_ORDERS
  });
  const res = await request.post(uri)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-type', 'application/json')
    .send(body);
    // .query({ market })
    // .query({ side })
    // .query({ volume })
    // .query({ price })
    // .query({ ord_type: ordType })
    // .query({ identifier });
  return res.body;
}
