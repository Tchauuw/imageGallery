import React, { useReducer } from "react";
import LoginForm from "../components/LoginForm";
import Alert from "../components/Alert";

const initialState = {
	loading: false,
	error: false,
	user: null,
	message: ""
};

const reducer = (state, action) => {
	switch (action.step) {
		case "login_start":
			return {
				...state,
				loading: true,
				error: false,
				message: ""
			};
		case "login_success":
			return {
				...state,
				loading: false,
				error: false,
				user: {
					username: action.identity.username,
				},
				message: "Connexion réussie"
			};
		case "login_error":
			return {
				...state,
				loading: false,
				error: true,
				user: null,
				message: "Connexion échouée"
			};
		default:
			return state;
	}
};

const Login = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

	const handleSubmit = (credentials) => {
    dispatch({step: 'login_start'});
    
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
			.then((data) => {
        dispatch({ step: "login_success", identity: { username: data.username } })
      })
			.catch((err) => {
        dispatch({step: "login_error"});
      });
	};
	return (
		<div className="container mx-auto px-4 h-full">
			<div className="flex content-center items-center justify-center h-full">
				<div className="w-full lg:w-4/12 px-4">
					{state.message !== "" && (
						<Alert
							status={state.error ? "error" : "success"}
							variant="outlined"
							description={state.message}
						/>
            		)}
					<LoginForm onSubmit={handleSubmit} disabled={false} />
				</div>
			</div>
		</div>
	);
};

export default Login;
