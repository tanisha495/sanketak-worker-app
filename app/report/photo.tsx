import { AppButton } from "@/components";
import { PlaceholderScreen } from "@/screens";

export default function AddPhotoRoute() {
  return (
    <PlaceholderScreen
      body="Camera and image selection are intentionally not implemented yet. This route reserves the photo step."
      primaryAction={<AppButton href="/report/success" title="Submit Mock Report" />}
      subtitle="Optional evidence placeholder"
      title="Add Photo"
    />
  );
}
