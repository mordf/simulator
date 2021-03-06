import { handleActions } from 'redux-actions';
import dateformat from 'dateformat';
import Immutable from 'seamless-immutable';
import actions from '../constants/actions';

// const dataSource = [
//   { key: 1, podName: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
//   { key: 2, podName: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
//   { key: 3, podName: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
// ];
const dataSource = [{
  timestamp: dateformat('2017-11-29T12:54:51.385Z', 'dddd, mmmm dS, yyyy, h:MM:ss TT'),
  execution_id: 'myFlow2:1f8af316-1b20-446f-9f27-a2147ab0353d',
  data: { level: 'info', status: 'active', progress: '85.71', details: '85.71% completed, 6 completed, 1 creating' }
}];


// const dataSource = [
//   {
//     key: 1,
//     serviceName: 'streaming-worker',
//     hostIp: '',
//     podName: '',
//     metrics: {
//       netStats: {
//         operstate: 'up',
//         rx: 688773626,
//         tx: 113531856695,
//         rx_sec: 713.021302130213,
//         tx_sec: 472638.4138413841
//       },
//       memory: {
//         total: '33.6760 giga',
//         free: '21.1066 giga',
//         persentage_used: '25.0716% ',
//         swap: {
//           total: '0.0000 giga',
//           free: '0.0000 giga',
//           persentage: 'NaN% '
//         }
//       },
//       cpu: {
//         manufacturer: 'Intel®', brand: 'Core™ i7-4790', speed: '3.60', cores: 8
//       },
//       processes: { all: 375, running: 0, blocked: 0, sleeping: 0 }
//     },
//     additional: {

//       worker: {
//         lastInitTime: '2017-05-04T13:09:16.633Z',
//         lastStatus: 'streaming',
//         lastVid: 'ch__652',
//         ch__652: {
//           initTime: '2017-05-04T13:09:16.633Z',
//           labels: ['init', 'streaming']        console.log('result', res)

//         }
//       }
//     },
//     hostName: 'xxx'
//   }];

const tmp = { dataSource };
// columns


const inititalState = Immutable.from(tmp);

export default handleActions({
  [actions.UPDATE_ROW_DATA_TABLE](state, { type, payload, meta, error }) {
    const data = payload || [];
    const timedData = data.jobs.map((d) => {
      d.timestamp = dateformat(d.timestamp, 'd/mm/yy, HH:MM:ss');
      return d;
    });
    return state.merge({ dataSource: timedData });
  }

}, inititalState);
