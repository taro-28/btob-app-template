import Image from "next/image"

export const AccountMenu = () => {
  return (
    <button className="flex items-center">
      <Image
        src="/image/icon.jpeg"
        alt="アイコン画像"
        width={35}
        height={35}
        className="rounded-full"
      />
      <span className="ml-2">大西太郎</span>
      {/* 下向きのトグルアイコン */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 5a1 1 0 011.707 0L10 8.586 13.293 5.3A1 1 0 1114.707 6.7l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 015 5z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}