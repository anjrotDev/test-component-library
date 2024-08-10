import { Button, ButtonProps, Stack, Text } from "anjrot-components";

const variants: ButtonProps["variant"][] = ["default", "primary", "success", "warning", "danger", "ghost"];

const rounded: ButtonProps["rounded"][] = ["basic", "sm", "md", "lg", "full"];

const sizes: ButtonProps["size"][] = ["default", "sm", "md", "lg", "full"];

export default function Exercise() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-1/2 mx-auto gap-4">
      <Text as="h2" className="text-center text-lg font-bold pb-5 pt-10">
        Buttons Variant
      </Text>
      <Stack>
        {variants.map(x => (
          <Button variant={x}>{x}</Button>
        ))}
      </Stack>
      <Text as="h1" className="text-center text-lg font-bold pb-5 pt-10">
        Buttons Oulines
      </Text>
      <Stack>
        {variants.map(x => (
          <Button outline variant={x}>
            Outline {x}
          </Button>
        ))}
      </Stack>
      <Text as="h1" className="text-center text-lg font-bold pb-5 pt-10">
        Rounded Buttons
      </Text>
      <Stack>
        {rounded.map(x => (
          <Button variant="success" rounded={x}>
            button rounded {x}
          </Button>
        ))}
      </Stack>
      <Text as="h1" className="text-center text-lg font-bold pb-5 pt-10">
        Button sizes
      </Text>
      <Stack>
        {sizes.map(x => (
          <Button variant="primary" size={x}>
            Size {x}
          </Button>
        ))}
      </Stack>
    </div>
  );
}
