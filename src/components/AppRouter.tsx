import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { privateRoutes, publicRoutes, Routes } from '../routes'

const AppRouter: FC = () => {
	const auth = true

	const routesList = auth ? privateRoutes : publicRoutes

	return (
		<Switch>
			{routesList.map((route) => (
				<Route key={route.path} {...route} />
			))}
			<Redirect to={auth ? Routes.CALENDAR : Routes.LOGIN} />
		</Switch>
	)
}

export default AppRouter
