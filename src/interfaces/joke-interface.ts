export interface IJoke {
  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: Record<string, boolean>;
  id: number;
  safe: boolean;
  lang: string;
}
