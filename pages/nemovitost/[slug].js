import { useRouter } from 'next/router'
import BaseLayout from "../../components/Base-layout";

export default function PropertyPage() {
  const router = useRouter()
  const { slug } = router.query

  return (
      <BaseLayout>
        ss
      </BaseLayout>
  )
}


