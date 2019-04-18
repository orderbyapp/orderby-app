import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor'

toast.configure({
  autoClose: 4000,
  draggable: TextTrackCueList,
});

const Toast = () => {
  const notify = () => toast(
  <div>asdladlkasd</div>
  ,{
    className: css({
      background: 'black'
    }),
    bodyClassName: css({
      fontSize: '16px'
    }),
    progressClassName: css({
      background: "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
    })
  });
  
  return <button onClick={notify()}>Notify !</button>;
}
export default Toast