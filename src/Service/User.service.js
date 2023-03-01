import axios from "axios";
export async function signUpUser(name, email, password, address) {
  const postConfig = {
    UserName: name,
    Email: email,
    Password: password,
    Address: address,
  };
  const response = await axios.post(
    "https://animal-welfare-api.herokuapp.com/SignUp",
    postConfig
  );
  if (!response.ok) {
    return response.data;
  } else {
    return response.data;
  }
}
