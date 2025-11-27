import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.name === id
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-4">
      <PropertyDetail property={property} />
    </div>
  );
}
