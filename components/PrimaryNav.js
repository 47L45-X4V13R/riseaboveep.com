import Link from 'next/link'

export default function PrimaryNav() {
  return (
    <ul>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/companies"><a>Companies</a></Link></li>
      <li><Link href="/philanthropy"><a>Philanthropy</a></Link></li>
      <li><Link href="/riseabove"><a>Rise Above</a></Link></li>
      <li><Link href="/contact"><a>Contact</a></Link></li>
    </ul>
  )
}
