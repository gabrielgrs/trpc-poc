import { trpc } from '../utils/trpc'
export default function IndexPage() {
  const { data, error } = trpc.hello.useQuery({ text: 'world' })

  if (error) return <div>Failed to request</div>

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <p>{data.greeting}</p>
    </div>
  )
}
