export interface BaseHookConfig {
  enabled?: boolean;
  onError?: (error: Error) => void;
}

export type HookReturnType<T> = [T, (...args: any[]) => void]; 