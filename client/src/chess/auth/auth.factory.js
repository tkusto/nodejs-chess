module.exports = AuthFactory;

AuthFactory.$inject = ['$http'];
function AuthFactory($http) {
	return {
    login: login,
    register: register,
    logout: logout
	};

  function login(data) {
    return $http.post(process.env.API_URL + '/login', data, {withCredentials: true}).
    then(function (response) {
      return response.status + ' ' + response.statusText;
    });
  }
  function register(data) {
  	return $http.post(process.env.API_URL + '/register', data).
  	then(function (response) {
  		return response.status + ' ' + response.statusText;
  	});
  }
  function logout() {
    return $http.post(process.env.API_URL + '/logout', null, {withCredentials: true}).
    then(function (response) {
      return response.status + ' ' + response.statusText;
    });
  }
};