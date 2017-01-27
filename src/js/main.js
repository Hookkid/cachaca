import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import TodoStore from "./TodoStore"
import TodoList from "./TodoList"
import Header from "./components/Header"
import Page from "./components/Page"
import Footer from "./components/Footer"

const app = document.getElementById("app")

ReactDOM.render(
	<div>
	<Header />	
	<Page />
	<Footer />
	</div>
	, app)

