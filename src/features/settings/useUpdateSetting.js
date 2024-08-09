import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited", {
        style: {
          color: "1f2937",
        },
      });
      queryClient.invalidateQueries({
        queryKey: ["settings"],
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

  return { isUpdating, updateSetting };
}
