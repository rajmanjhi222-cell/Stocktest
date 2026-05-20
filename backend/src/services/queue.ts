export type QueuePlayer = {
  playerId: string;
  mode: "solo" | "duo" | "squad";
  enqueuedAt: number;
};

const queue: QueuePlayer[] = [];

export function enqueuePlayer(player: QueuePlayer): { position: number } {
  queue.push(player);
  return { position: queue.length };
}

export function queueSize(): number {
  return queue.length;
}
