import { redirect } from '@remix-run/node'
import type { LoaderFunctionArgs } from '@remix-run/node'

export async function loader({ params }: LoaderFunctionArgs) {
  return redirect('/')
}
