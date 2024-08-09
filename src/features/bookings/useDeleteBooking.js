import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryCilent = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingAPI,
    onSuccess: () => {
      toast.success("Booking successfully deleted!", {
        style: {
          color: "1f2937",
        },
      });

      queryCilent.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: () => {
      toast.error("There are some errors occurred.");
    },
  });

  return { deleteBooking, isDeletingBooking };
}
