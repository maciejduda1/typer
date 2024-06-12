import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Auth from "../components/Auth";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import AddTyper from "../components/AddTyper";
import JoinTyper from "../components/JoinTyper";
import TyperList from "../components/TyperList";

export const authenticatedRootRouter = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <div>404 Not Found</div>,
		children: [
			{
				path: "/",
				element: <TyperList />,
				errorElement: <div>404 Not Found</div>,
			},
			{
				path: "create",
				element: <AddTyper />,
				errorElement: <div>404 Not Found</div>,
			},
			{
				path: "join",
				element: <JoinTyper />,
				errorElement: <div>404 Not Found</div>,
			}

		],
	},
]);

export const unauthenticatedRootRouter = createBrowserRouter([
	{
		path: "/",
		element: <Auth />,
		errorElement: <div>404 Not Found</div>,
		children: [
			{
				path: "/",
				element: <Login />,
				errorElement: <div>404 Not Found</div>,
			},
			{
				path: "register",
				element: <Register />,
				errorElement: <div>404 Not Found</div>,
			},
		],
	},
]);
