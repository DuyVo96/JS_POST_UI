import axiosClient from './axiosClient';

const postApi = {
  getAll(params) {
    const url = '/posts';
    return axiosClient.get(url, { params });

    // change the baseURL in here it will replace the root baseUrl with a specify requirement
    // return axiosClient.get(url, { params, baseURL: 'https://abc.com' });
  },

  getById(id) {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/posts';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/posts/${data.id}`;
    return axiosClient.patch(url, data);
  },

  updataFormData(data) {
    const url = `/posts/${data.id}`;
    return axiosClient.patch(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  remove(id) {
    const url = `/posts/${id}`;
    return axiosClient.delete(url);
  },
};
export default postApi;
