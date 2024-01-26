import { Button, Col, Image, Row, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const loginImage = "https://sig1.co/img-twitter-1";
  const url =
    "https://e86d16fc-32a9-4adc-91f1-84e10bbd5c6e-00-1a639ppyyt8ng.riker.replit.dev";

  // Possible values: null (no modal shows), "Login", "SignUp"
  const [modalShow, setModalShow] = useState(null);
  const handleShowSignUp = () => setModalShow("SignUp");
  const handleShowLogin = () => setModalShow("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useLocalStorage("authToken", "");
  const [usernameError, setUsernameError] = useState(""); 
  const [passwordError, setPasswordError] = useState("");  
  const [passwordStrengthError, setPasswordStrengthError] = useState("");
  const [usernameAvailabilityError, setUsernameAvailabilityError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      navigate("/profile");
    }
  }, [authToken, navigate]);

  // Function to check password strength
  const isPasswordStrong = (password) => {
  // Implement your password strength validation logic here
  // For example, check if the password contains a special symbol, an uppercase letter, and a number
  const specialSymbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  if (
    specialSymbolRegex.test(password) &&
    uppercaseRegex.test(password) &&
    numberRegex.test(password)
  ) {
    return true;
  } else {
    return false;
  }
};

// Function to check username availability
const isUsernameAvailable = async (username) => {
  try {
    const res = await axios.get(`${url}/check-username/${username}`);
    res.data.available;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Reset previous error messages    
    setPasswordStrengthError("");
    //setUsernameError("");
    setUsernameAvailabilityError("");

    // Check username availability
  const isAvailable = await isUsernameAvailable(username);
  if (!isAvailable) {
    setUsernameAvailabilityError("Username is already in use. Please choose another.");
    return;
  } else {
    setUsernameAvailabilityError("Username is available.");
    
  }
  


  // Check password strength
  if (!isPasswordStrong(password)) {
    setPasswordStrengthError(
      "Password must contain a special symbol, an uppercase letter, and a number."
    );
    return;
  }

    try {
      const res = await axios.post(`${url}/signup`, { username, password });
      console.log(res.data);     
    } catch (error) {
      if (error.response || error.response.data || error.response.data.error || error.response.data.message === "Username already taken") {
        //setUsernameError("Username already taken. Please choose a different one.");        
      } else {
        console.error(error);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/login`, { username, password });
      if (res.data && res.data.auth === true && res.data.token) {
        setAuthToken(res.data.token); // Save token to localStorage.
        console.log("Login was successful, token saved");
      }
    } catch (error) { 
      if (error.response) {
      if (error.response && error.response.status === 400) {
      // No such username
      setUsernameError("No such username.");
      setPasswordError("");
    } else if (error.response && error.response.status === 401) {
      // Wrong password
      setUsernameError("");
      setPasswordError("Incorrect password.");
    } else {
      console.error(error);
        setUsernameError("An unexpected error occurred.");
        setPasswordError("");
    }
   } else {
    console.error(error);
    setUsernameError("An unexpected error occurred.");
    setPasswordError("");
  }
 }
};

  const handleClose = () => {
    setModalShow(null);
    //setUsernameError("");
    setPasswordStrengthError("");
    setUsernameAvailabilityError("");
  };

  return (
    <Row>
      <Col sm={6}>
        <Image src={loginImage} fluid />
      </Col>
      <Col sm={6} className="p-4">
        <i
          className="bi bi-twitter"
          style={{ fontSize: 50, color: "dodgerblue" }}
        ></i>

        <p className="mt-5" style={{ fontSize: 64 }}>
          Happening Now
        </p>
        <h2 className="my-5" style={{ fontSize: 31 }}>
          Join Twitter today.
        </h2>
        <Col sm={5} className="d-grid gap-2">
          <Button className="rounded-pill" variant="outline-dark">
            <i className="bi bi-google"></i> Sign up with Google
          </Button>
          <Button className="rounded-pill" variant="outline-dark">
            <i className="bi bi-apple"></i> Sign up with Apple
          </Button>
          <p style={{ textAlign: "center" }}>or</p>
          <Button className="rounded-pill" onClick={handleShowSignUp}>
            Create an account
          </Button>
          <p style={{ fontSize: "12px" }}>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>

          <p className="mt-5" style={{ fontWeight: "bold" }}>
            Already have an account?
          </p>
          <Button
            className="rounded-pill"
            variant="outline-primary"
            onClick={handleShowLogin}
          >
            Sign in
          </Button>
        </Col>
        <Modal
          show={modalShow !== null}
          onHide={handleClose}
          animation={false}
          centered
        >
          <Modal.Body>
            <h2 className="mb-4" style={{ fontWeight: "bold" }}>
              {modalShow === "SignUp"
                ? "Create your account"
                : "Log in to your account"}
            </h2>
            <Form
              className="d-grid gap-2 px-5"
              onSubmit={modalShow === "SignUp" ? handleSignUp : handleLogin}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => setUsername(e.target.value)}
                  type="email"
                  placeholder="Enter username"
                />
                {modalShow === 'SignUp' && usernameAvailabilityError && (
                    <p style={{ color: 'red' }}>{usernameAvailabilityError}</p>
                  )}
                {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
                {modalShow === 'SignUp' && passwordStrengthError && (
                  <p style={{ color: 'red' }}>{passwordStrengthError}</p>
                )}
                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
              </Form.Group>
              <p style={{ fontSize: "12px" }}>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use. SigmaTweets may use your contact
                information, including your email address and phone number for
                purposes outlined in our Privacy Policy, like keeping your
                account secure and personalising our services, including ads.
                Learn more. Others will be able to find you by email or phone
                number, when provided, unless you choose otherwise here.
              </p>

              <Button className="rounded-pill" type="submit">
                {modalShow === "SignUp" ? "Sign up" : "Log in"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
}
