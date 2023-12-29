import { Typography } from "@mui/material"
import styles from './page.module.css'
import { Button } from "@/components"

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Typography sx={{ textAlign: 'center' }} variant="h1"> Welcome to Express app </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h4"> The best way to organize your entrepreneurship </Typography>
        <div>
          <Button> Login </Button>
        </div>
      </section>
    </main>
  )
}
