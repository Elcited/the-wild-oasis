import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryCilent = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: bookingId =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: data => {
      toast.success(`Booking #${data.id} successfully checked out`, {
        style: {
          color: "1f2937",
        },
      });
      queryCilent.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("There is an error occurred!");
    },
  });

  return { checkout, isCheckingout };
}
