export type TradeSide = 'buy' | 'sell';

export type Trade = {
    round: number;
    side: TradeSide;
    price: number;
    quantity: number;
    traderEstimate: number;

};

export type GameState = {
    round: number;
    cash: number;
    inventory: number;
    fairValue: number;
    trades: Trade[];
    realisedPnL: number;
}