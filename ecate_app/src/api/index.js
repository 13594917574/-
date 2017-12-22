import axios from 'axios';

export function getSelect() {
  console.log('getSelect');
  return axios.get('/api/select')
}
export function getMenus() {
  console.log('getMenus');
  return axios.get('/api/menus')
}
