import { darkModeAtom } from "@/utils/atoms";
import { Button } from "@nextui-org/react";
import { useAtom } from "jotai";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const ToggleDark = () => {
  const [dark, setDark] = useAtom(darkModeAtom);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <Button
        size="lg"
        color="primary"
        variant="light"
        onPress={() => setDark(!dark)}
        isIconOnly
      >
        {dark ? <Moon size={30} /> : <Sun size={30} />}
      </Button>
    </>
  );
};

export default ToggleDark;
