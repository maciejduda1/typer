import {
	authenticatedRootRouter,
	unauthenticatedRootRouter,
} from "../root.router";
import { RouterProvider } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lightTheme from "../../assets/themes/light.theme.ts";
import darkTheme from "../../assets/themes/dark.theme.ts";
import {themeSelector, tokenSelector} from "../../store/selectors/auth.selectors.ts";
import {ThemeType} from "../../types/theme.ts";

const ProtectedRouterProvider: React.FC<PropsWithChildren> = () => {
	const token = useSelector(tokenSelector);
	const theme = useSelector(themeSelector);
	return (
		<ThemeProvider
			theme={theme === ThemeType.LIGHT ? lightTheme : darkTheme}
		>
			<CssBaseline />
			<RouterProvider
				router={
					token ? authenticatedRootRouter : unauthenticatedRootRouter
				}
			/>
		</ThemeProvider>
	);
};

export default ProtectedRouterProvider;
