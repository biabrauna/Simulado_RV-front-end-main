import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  { App }  from './app';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import ProvaDetails from "./routes/ProvaDetails";
import Prova from "./routes/Prova";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
		errorElement: <ErrorPage/>,
		children: [
			{
				path: '/prova',
				element: <Prova/>
			},
			{
				path: '/',
				element: <Home/>
			},
			// 5- nested routes - identificador unico - dynamic routes
			{
				path: '/prova/:id',
				element: <ProvaDetails/>,
			},
			// 7 - navigate para paginas nao existentes
			// {
			// 	path: 'oldprova',
			// 	element: <Navigate to="/prova"/>
			// } 
		],
	
	},
])

const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router = {router}/>
		</QueryClientProvider>
	</StrictMode>,
);
