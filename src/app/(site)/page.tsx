import Image from 'next/image'
import styles from './page.module.scss'
import { Prisma, PrismaClient} from '@prisma/client'

//this is homepage

const client = new PrismaClient();

const records = await client.records.findMany();



export default function Home() {
  return (
    <main>
      Hello?
      <button onClick={() => console.log(records)}></button>
    </main>
  )
}
