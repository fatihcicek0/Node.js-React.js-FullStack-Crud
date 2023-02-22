import { api } from '../utility/api';
import Axios from 'axios';

export const getContents = () => (dispatch) => {
   api().get('/contents')
      .then(response => {
         dispatch({ type: "GET_CONTENTS", payload: response.data.result });
      }).catch(err => { console.log(err) });
}

export const addContent = (content) => dispatch => {
   api().post('/content', { content })
      .then(() => {
         dispatch({ type: "ADD_CONTENT", payload: content });
      }).catch(err => { console.log(err) });
}
export const getContentById = (id) => (dispatch) => {
   Axios.all([api().get(`/content/${id}`), api().get(`/comments/${id}`)])
      .then(responses => {
         const payload = {
            ...responses[0].data.content,
            comments: responses[1].data.result
         }
         dispatch({ type: "GET_CONTENT_DETAİL", payload: payload });
      }).catch(err => { console.log(err) });
}
export const updateContent = (id, data) => (dispatch) => {
   api().put(`/content/${id}`, data)
      .then(() => {
         dispatch({ type: "EDİT_CONTENT", payload: data });
      }).catch(err => { console.log(err) });
}

export const deleteContent = (id) => (dispatch) => {
   api().delete(`/content/${id}`)
      .then(() => {
         dispatch({ type: "DELETE_CONTENT", payload: id });
      }).catch(err => { console.log(err) });
}

export const addComment = (id, data) => (dispatch) => {
   api().post(`/content/${id}/comment`, data)
      .then(() => {
         dispatch({ type: "ADD_COMMENT", payload: data });
      }).catch(err => { console.log(err) });
}