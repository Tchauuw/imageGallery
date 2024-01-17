import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import Alert from "../components/Alert";
import { AuthContext } from "../components/App";
import { Navigate } from "react-router-dom";

const Login = (props) => {

	const [state, actions] = useContext(AuthContext);
	
	return (
		<div className="container mx-auto px-4 h-full">
		{state.user !== null && (
            <Navigate to={{pathname: "/gallery" }} state={{ from:"/login" }} />
        )}
			<div className="flex content-center items-center justify-center h-full">
				<div className="w-full lg:w-4/12 px-4">
					{state.message !== "" && (
						<Alert
						status={state.error ? "error" : "success"}
						variant="outlined"
						description={state.message}
						/>
						)}
					<LoginForm onSubmit={actions.login} disabled={false} />
				</div>
			</div>
		</div>
	);
};

export default Login;
