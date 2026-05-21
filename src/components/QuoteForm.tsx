export default function QuoteForm() {

  return (
    <section className="rounded-xl border p-4">
      <h2 className="text-xl font-semibold">Submit Quote</h2>

      <div className="mt-4 space-y-2">
        <div>
          <label className="block text-sm font-medium">Bid</label>
          <input
            type="number"
            placeholder="eg. 95"
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Ask</label>
          <input
            type="number"
            placeholder="eg. 105"
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>
       
        <button className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white">
          Submit quote
        </button>
      </div>
    </section>
  );
}