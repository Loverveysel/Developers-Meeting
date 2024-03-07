import { useRouter } from 'next/router'

export default function navigate(path: string) {
  const router = useRouter()

  const navigator = async () => {
    await router.push(path)
  }

  return navigator
}