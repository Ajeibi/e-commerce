import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

import React from 'react'


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
        {/* the image url is gotten from commerce.js also the price attribute. When you inspect products, thats the name attached to them - price and image - by commerce.js */}
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
            <div className='classes.cardContent'>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    {product.price.formatted_with_symbol}
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary'/>
        </CardContent>
        <CardActions disableSpacing className='{classes.cardActions}'>
            <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)} >
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product
