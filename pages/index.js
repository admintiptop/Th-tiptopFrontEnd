import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { BsEnvelope } from 'react-icons/bs';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <Link href={'/login'}>login</Link>
      <br/>
      <Link href={'/signup'}>signup</Link>
      <br/>
      <Link href={'/viewuser'}>viewUserDetail</Link>
      <br/>
      <Link href={'/viewhistory'}>viewhistory</Link>
      <BsEnvelope />
    </div>
  )
}
