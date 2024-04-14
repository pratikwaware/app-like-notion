import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
            src={"/logos/bird-logo.png"}
            // src={"/logos/logoipsum-logo.svg"}
            // src={"/logos/logo-no-background.svg"}
            alt="Logo"
            width={150}
            height={150}
            className="w-24 pl-2"
        />
      </Link>
    </>
  )
}

export default Logo
