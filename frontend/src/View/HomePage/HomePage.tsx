import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
} from '@mui/material'
import articles from './data.json'
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  const [page, setPage] = useState<number>(1)
  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  const count = Math.round(articles.length / 12)

  return (
    <Grid container item spacing={6}>
      {articles.map((it) => {
        return (
          <Grid item xs={3}>
            <Link to={`/blog/${it.id}`} style={{ textDecoration: 'none' }}>
              <Card key={it.id} sx={{ maxWidth: 400, height: 450 }}>
                <CardMedia
                  component="img"
                  alt="img"
                  height="200"
                  image={it.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {it.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        )
      })}
      {articles.length > 12 && (
        <Pagination count={count} page={page} onChange={handleChangePage} />
      )}
    </Grid>
  )
}
