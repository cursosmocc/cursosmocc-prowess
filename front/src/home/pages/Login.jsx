function Login() {
  return (
    <form id="login" action="http://localhost/login/index.php" method="post">
      <input hidden type="text" id="username" name="username" value="admin" />
      <input
        hidden
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        value="Admin.123"
      />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default Login;
