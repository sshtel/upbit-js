import {
  delOrders,
  postOrders
} from '../exchange';
describe('Upbit API exchange', () => {
  // To test exchange APIs, you should set proper Access Key and Secret Key
  // which can be able to generate at Upbit site
  beforeEach( (async () => {
  }));

  xit('postOrders', (async () => {
    const res = await postOrders('KRW-XRP', 'ask', '2', '340', 'limit');
    console.log(res);
  }));

  xit('delOrders', (async () => {
    const res = await delOrders('d99e51ba-d7a3-4b46-8e0f-1fb55db8cbc1');
    console.log(res);
  }));

});
