import GameStats from "@/components/GameStats";
import QuoteForm from "@/components/QuoteForm";
import RoundFeedback from "@/components/RoundFeedback";
import TradeHistory from "@/components/TradeHistory";
import ExplanationCards from "@/components/ExplanationCards";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-8">
      <h1 className="text-4xl font-bold">MarketSim: a market making game</h1>
      <p className="mt-4 text-lg">
        Quote bid and ask prices, manage inventory, and see how uncertainty affects P&L.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <GameStats />
          <QuoteForm />
          <RoundFeedback />
        </div>

        <TradeHistory />
      </div>

      <div className="mt-8">
        <ExplanationCards />
      </div>
    </main>
  );
}
