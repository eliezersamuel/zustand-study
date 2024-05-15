import { useBearStore } from "../../store";

export default function Button() {
  // const increase = useBearStore((state) => state.increase);
  const { increase } = useBearStore();
  return <button onClick={() => increase()}>increase</button>;
}
