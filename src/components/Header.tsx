import Image from "next/image"
import { AccountMenu } from "./AccountMenu"

export const Header = () => {
  return (
    <header
      className="bg-sky flex justify-between items-center px-4 py-3 text-white font-bold"
    >
      <div>
        BtoB App Template
      </div>
      <AccountMenu />
    </header>
  )
}