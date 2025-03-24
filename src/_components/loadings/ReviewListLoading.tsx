import HorizontalDivider from "../dividers/HorizontalDivider";
import ReviewItemLoading from "./ReviewItemLoading";

export default function ReviewListLoading() {
  return Array.from({ length: 5 }).map((_, index) => (
    <div key={index}>
      <HorizontalDivider className="my-5" />
      <div className="px-5">
        <ReviewItemLoading />
      </div>
    </div>
  ));
}
