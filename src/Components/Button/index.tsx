import { useBearStore } from "../../store";

export default function Button() {
  const increase = useBearStore((state) => state.increase);
  return <button onClick={() => increase()}>increase</button>;
}
