import React from 'react'
import BooksCard from './components/BooksCard'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from "@material-ui/styles"
import {
  CssBaseline,
  Typography,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

class App extends React.Component {
	state = {
		booksData: []
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appKTOSxGNYgNXwt0/List?api_key=keybfmZD5YIHZfpoZ')
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
	}

	render() {
		const {booksData} = this.state
			return (
				<ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography style={{ marginTop: 50 }}>
				<Grid container direction='row' spacing={2}>
					{booksData.map(book => (
						<BooksCard {...book.fields} key={book.fields.id} />
					))}
				</Grid>
				<div align="center" justify="center" ><h4><footer>&copy; Copyright 2020 <a href="https://aks.one">https://aks.one</a></footer></h4></div>
				</Typography>
				</ThemeProvider>
			)
		}
}

export default App
