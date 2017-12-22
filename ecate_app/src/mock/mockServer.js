import Mock from 'mockjs'
import data from './data.json'
import homedata from './homedata.json';


Mock.mock('/api/select', {code:0, data:data.classifyName})
Mock.mock('/api/menus', {code:0, data:homedata})
// Mock.mock('/api2/ratings', {code:0, data:apiData.ratings})
console.log("执行mockSever")

