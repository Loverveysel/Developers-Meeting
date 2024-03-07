import { useRouter } from 'next/router'

export default function navigate(path: string) {
  const router = useRouter()
  router.push(path)
}