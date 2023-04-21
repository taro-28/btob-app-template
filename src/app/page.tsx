import { Card } from "@/components/Card";
import { Fuga } from "@/components/Hoge";

export default function Home() {
  return (
    <div>
      {/* 各ページへルーティングするサイドバー */}
      <nav
      className="bg-white-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
      >
        <ul
        >
          <li
          className="mt-3 text-gray-300 hover:bg-gray-700 hover:text-white sm:mt-0 sm:ml-3 sm:py-2 sm:px-4 sm:text-white sm:hover:bg-gray-700 sm:hover:text-white"
          >Home</li>
          <li>
            <a
            href="/companies"
            className="mt-3 text-gray-300 hover:bg-gray-700 hover:text-white sm:mt-0 sm:ml-3 sm:py-2 sm:px-4 sm:text-white sm:hover:bg-gray-700 sm:hover:text-white"
            >会社</a>
          </li>
        </ul>
      </nav>
    <section>
    {/* gridでカードを表示するエリア */}
      <div
      className="grid grid-cols-1 gap-4 p-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
      <Card
      >
        タスク一覧とか
      </Card>
      <Card
      >
        タスク一覧とか
      </Card>
      <Card
      >
        タスク一覧とか
      </Card>
      </div>
      <div>
        <Fuga />
      </div>
    </section>
    </div>
  )
}
