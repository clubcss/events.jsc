import React from 'react'
import { createGenerateClassName, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		margin: 20
	},
	gutterTopAndBottom: {
		margin: 20
	},
	card: {
		maxWidth: 345
	},
	media: {
		height: 350
	}
}))

function BooksCard({ Name, Type, Date, Description, Image }) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid item xs={10}>
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia className={classes.media} image={Image} Name='React' />
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{createGenerateClassName}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								 {Type}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardContent>
						<Typography paragraph variant='body2'>
							{Description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small' variant='outlined' color='primary'>
							{Date}
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</div>
	)
}
export default BooksCard