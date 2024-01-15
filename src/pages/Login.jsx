import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import Alert from "../components/Alert";

const Login = () => {
	const [user, setUser] = useState(null);

	const handleSubmit = (credentials) => {
		fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Not ok");
				}
				return res.json();
			})
			.then((data) => setUser({success: true, message: "Connexion réussie"}))
			.catch((err) => {
        setUser({success: false, message: "La connexion n'a pas abouti, réessayez :)"})
			});
      console.log(`Success: ${user.success}`)
    };
    return (
      <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          { user && <Alert
           status={user.success ? "success" : "error"}
           variant="outlined"
           description={user.message}
           />
          }
          <LoginForm
            onSubmit={handleSubmit}
            disabled={false}
            />
        </div>
      </div>
    </div>
  );
};

export default Login;