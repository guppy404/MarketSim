export default function TradeHistory() {

  return (
    <section className="rounded-xl border p-4">
      <h2 className="text-xl font-semibold">Trade History</h2>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              <th className="border p-2">Round</th>
              <th className="border p-2">Bid</th>
              <th className="border p-2">Ask</th>
              <th className="border p-2">Buys</th>
              <th className="border p-2">Sells</th>
              <th className="border p-2">Inventory Δ</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">95</td>
              <td className="border p-2">105</td>
              <td className="border p-2">2</td>
              <td className="border p-2">1</td>
              <td className="border p-2">-1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}