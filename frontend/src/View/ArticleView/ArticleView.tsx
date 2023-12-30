import { useParams } from 'react-router-dom'
import articles from '../HomePage/data.json'
import { Stack, Typography } from '@mui/material'

export const ArticleView = () => {
  const { blogId } = useParams()
  const id = blogId !== undefined ? blogId : ''
  const article = articles.find((it) => it.id === parseInt(id))

  return (
    <Stack gap={4}>
      <Stack gap={1}>
        <Typography variant="h5">{article?.title}</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {article?.date}
        </Typography>
      </Stack>
      <Stack direction="row" gap={3}>
        <img src={article?.image} style={{ width: 400 }} />
        <Typography variant="body2">{article?.text}</Typography>
      </Stack>
    </Stack>
  )
}
