import { Button2 } from "../components/Button2";

export default function Exercise3() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-1/2 mx-auto gap-4">
      <Button2>Default</Button2>
      <Button2 colVariant="primary" size="lg">
        Primary
      </Button2>
      <Button2 colVariant="success" variant="rounded">
        success
      </Button2>
      <Button2 colVariant="warning" variant="pill" size="md">
        warning
      </Button2>
      <Button2 colVariant="danger" size="full" variant="rounded">
        danger
      </Button2>
    </div>
  );
}
