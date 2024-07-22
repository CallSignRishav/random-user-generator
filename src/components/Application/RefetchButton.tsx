import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";

const RefetchButton = () => {
  const queryClient = useQueryClient();

  const refetchFn = () => {
    queryClient.refetchQueries();
  };

  return (
    <>
      <Button color="primary" variant="bordered" onPress={refetchFn} size="lg">
        Refetch Data
      </Button>
    </>
  );
};

export default RefetchButton;
