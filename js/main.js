import axiosClient from './api/axiosClient';
import postApi from './api/postApi';

async function main() {
  //   const response = await axiosClient.get('/posts');

  // resolve error for each request so must use try catch
  // anywhere that call API must use Try/Catch
  // use Try/Catch to solve error for each request
  try {
    const queryParams = {
      _page: 1,
      _limit: 3,
    };

    const data = await postApi.getAll(queryParams);
    console.log('main.js data', data);
  } catch (error) {
    console.log('get all failed', error);
    // show modal, toast error
  }

  await postApi.update({
    id: 'sktwi1cgkkuif36dj',
    title: 'Dicta molestiae aut change here ne hello world',
  });
}

main();
