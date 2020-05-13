import React from 'react';

const Login = () => {
  return (
    <div className="container login-container">
      <div className="row h-100 justify-content-center align-items-center text-center">
        <div className="col-12 col-lg-6">
          <h3>로그인</h3>
          <input type="text" className="form-control mt-4" placeholder="아이디" autoFocus />
          <input type="password" className="form-control mt-3" placeholder="비밀번호" />
          <button type="button" className="btn btn-success btn-lg mt-4">로그인</button>
        </div>
      </div>
    </div>
  );
}

export default Login;