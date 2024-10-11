import { useQuery } from "@tanstack/react-query";
import {
	Outlet,
} from "react-router-dom";
import { Loader2 } from "lucide-react";
import { getInfos } from "./http/get-info";
import Navbar from './components/Navbar';

export function App() {
	const { data, isLoading } = useQuery({
		queryKey: ["infos"],
		queryFn: getInfos,
		staleTime: 1000 * 60,
	});

	if (isLoading || !data) {
		return (
			<div className="h-screen flex items-center justify-center">
				<Loader2 className="text-zinc-500 animate-spin size-10" />
			</div>
		);
	}

	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
}
