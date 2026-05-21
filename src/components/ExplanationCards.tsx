export default function ExplanationCards() {

  return (
    <section>
      <h2 className="text-xl font-semibold">Market Making Basics</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border p-4">
          <h3 className="font-semibold">Bid</h3>
          <p className="mt-2 text-sm text-gray-600">
            The price you are willing to buy at.
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="font-semibold">Ask</h3>
          <p className="mt-2 text-sm text-gray-600">
            The price you are willing to sell at.
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="font-semibold">Spread</h3>
          <p className="mt-2 text-sm text-gray-600">
            The difference between your ask and bid prices.
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="font-semibold">Inventory</h3>
          <p className="mt-2 text-sm text-gray-600">
            The position you hold after trades. Positive means long, negative means short.
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="font-semibold">P&L</h3>
          <p className="mt-2 text-sm text-gray-600">
            Profit and loss, calculated from your cash and the value of your inventory.
          </p>
        </div>
      </div>
    </section>
  );
}