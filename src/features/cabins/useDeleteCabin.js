import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  // eslint-disable-next-line no-unused-vars
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: id => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted", {
        style: {
          color: "1f2937",
        },
      });
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: err =>
      toast.error(err.message, {
        style: {
          color: "1f2937",
        },
      }),
  });

  return { isDeleting, deleteCabin };
}
