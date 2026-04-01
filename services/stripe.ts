export async function createCheckoutSession() {
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create checkout session");
    }

    const { url } = await response.json();
    if (url) {
      window.location.href = url;
    }
  } catch (error: any) {
    console.error("Checkout Error:", error);
    alert(error.message || "Something went wrong. Please try again.");
  }
}
