import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { useAPI } from "../../hooks/useAPI";
import { useQuery } from "../../hooks/useQuery";
import { ReactComponent as Gitlogo } from "../../assets/navbar/gitlogo.svg";
import './Login.css';

const Login = () => {
  const { client_id, redirect_uri, client } = useSelector(
    (state) => state.auth
  );
  const { query } = useQuery();
  const { authenticate } = useAPI();

  useLayoutEffect(() => {
    if (query.code) {
      authenticate({ client_id, redirect_uri, client, code: query.code });
    }
  }, [authenticate, client, client_id, query.code, redirect_uri]);
  return (
    <div className="App-header Login-header">
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user&redirect_uri=${redirect_uri}`}
      >
        {/* <Gitlogo /> {'  '} */}
        <img src='https://github.com/github.png?size=460' height='37' weight='50' className='mr-3 avatar' alt='Avatar' /> {' '}
        Login to my github Repositories.
      </a>
      <ToastContainer />
    </div>
  );
};

export default Login;
