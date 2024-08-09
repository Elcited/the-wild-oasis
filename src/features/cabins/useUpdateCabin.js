import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createUpdateCabin } from "../../services/apiCabins";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => createUpdateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited", {
        style: {
          color: "1f2937",
        },
      });
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: err => {
      toast.error(err.message, {
        style: {
          color: "1f2937",
        },
      });
    },
  });

  return { isUpdating, updateCabin };
}
