import { Button } from "../components/Button";

export default function Exercise2() {
  return (
    <div className="flex items-center justify-center min-h-screen w-1/2 mx-auto gap-4">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="danger">danger</Button>
    </div>
  );
}
